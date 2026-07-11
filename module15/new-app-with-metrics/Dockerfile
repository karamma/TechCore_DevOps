FROM python:3.14-slim
WORKDIR /app
COPY requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
RUN groupadd --system --gid 1001 myg && \
    useradd --system --gid 1001 --uid 1001 myu
COPY --chown=1001:1001 . .
USER 1001:1001
EXPOSE 5000
ENTRYPOINT ["python3", "app.py"]

