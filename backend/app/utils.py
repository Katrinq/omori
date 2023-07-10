from contextlib import asynccontextmanager

from fastapi import FastAPI
import vertexai
import json
from google.oauth2 import service_account
import google.cloud.aiplatform as aiplatform


@asynccontextmanager
async def lifespan(app: FastAPI):
    with open("service_account.json", encoding="utf-8") as f:
        service_account_info = json.load(f)
        my_credentials = service_account.Credentials.from_service_account_info(service_account_info)
        project_id = service_account_info["project_id"]

    aiplatform.init(
        credentials=my_credentials,
    )
    vertexai.init(project=project_id, location="us-central1")
    yield
