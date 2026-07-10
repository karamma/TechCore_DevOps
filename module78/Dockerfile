FROM python:3.14-slim
WORKDIR /app
COPY ./requirements.txt ./
RUN pip install --no-cache-dir  -r requirements.txt
COPY . .
RUN groupadd --system --gid 1001 mygrp && \
    useradd --system --gid 1001 --uid 1001 myusr && \
    chown -R 1001:1001 .
USER 1001:1001
EXPOSE 5000 
CMD ["python", "app.py"]

