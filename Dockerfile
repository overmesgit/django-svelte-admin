FROM python:3.9-slim
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/
EXPOSE 80
ENTRYPOINT ["gunicorn", "sousage.wsgi:application","-b", "0.0.0.0:80", "--timeout", "300",  "--workers", "4"]