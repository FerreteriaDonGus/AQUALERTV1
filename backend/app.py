from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

@app.route("/api")
def home():
    return jsonify({"message": "Aqualert API now runnning"})

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)