from typing import Annotated

import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from google.cloud.speech_v2 import SpeechClient
from google.cloud.speech_v2.types import cloud_speech
from vertexai.preview.language_models import ChatModel
from fastapi.openapi.docs import get_swagger_ui_html

from fastapi import FastAPI, UploadFile, HTTPException, Form
from google.api_core import client_options

from utils import lifespan
from prompts import SRS_PROMPT, USE_CASES_PROMPT, USER_STORIES_PROMPT


app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"msg": "OK"}


@app.get("/docs")
async def get_documentation():
    return get_swagger_ui_html(openapi_url="/openapi.json", title="docs")


@app.post("/api/create-project")
async def generate_project_handler(name: Annotated[str, Form()], file: UploadFile):
    if file.filename.split(".")[-1] not in ["mp3"]:
        raise HTTPException(status_code=400, detail="Wrong file format")
    if file.size > 1_500_000:
        raise HTTPException(status_code=400, detail="File is too big")
    client_options_var = client_options.ClientOptions(api_endpoint="europe-west4-speech.googleapis.com")
    client = SpeechClient(client_options=client_options_var)
    config = cloud_speech.RecognitionConfig(auto_decoding_config={}, language_codes=["en-GB"], model="chirp")
    content = await file.read()
    request = cloud_speech.RecognizeRequest(
        recognizer=f"projects/omori-392212/locations/europe-west4/recognizers/_",
        config=config,
        content=content,
    )

    response = client.recognize(request=request)
    chat_model = ChatModel.from_pretrained("chat-bison@001")
    parameters = {
        "temperature": 0.6,
        "max_output_tokens": 1024,
        "top_p": 0.8,
        "top_k": 40,
    }
    chat = chat_model.start_chat()
    requirements_response = chat.send_message(
        SRS_PROMPT.format(REQUIREMENTS=response.results[0].alternatives[0].transcript), **parameters
    )
    user_stories_response = chat.send_message(USER_STORIES_PROMPT, **parameters)
    user_cases_response = chat.send_message(USE_CASES_PROMPT, **parameters)
    return {
        "project_name": name,
        "description": response.results[0].alternatives[0].transcript,
        "requirements": requirements_response.text,
        "user_stories": user_stories_response.text,
        "use_cases": user_cases_response.text,
    }


if __name__ == "__main__":
    uvicorn.run("__main__:app", host="0.0.0.0", port=8000, reload=True)
