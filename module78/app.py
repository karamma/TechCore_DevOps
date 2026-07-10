from flask import Flask
import socket
from datetime import datetime

app = Flask(__name__)

@app.route("/")
def hello():
    return {
        "message": "Hello, my name is Timur AAAAAAA", 
        "status": "ok",
        "hostname": socket.gethostname(),
        "timestamp": datetime.now().isoformat()
    }

@app.route("/health")
def health():
    return {"status": "healthy"}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
