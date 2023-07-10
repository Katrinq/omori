FROM python:3.11-slim-buster

WORKDIR /usr/src/app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV PYTHONPATH "${PYTHONPATH}:/usr/src/app"
ENV PIP_DEFAULT_TIMEOUT=100
ENV GOOGLE_APPLICATION_CREDENTIALS="/usr/src/app/service_account.json"
ENV SENTRY_SDK_DSN="https://36508a31dbb3468994b7ae470704ce10@o718840.ingest.sentry.io/5783806"

COPY . /usr/src/app
RUN apt-get update && apt-get install -y \
    libgeos-dev
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

CMD python /usr/src/main.py