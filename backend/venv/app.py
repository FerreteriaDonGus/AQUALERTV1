from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api")
def home():
    return jsonify({"message": "Aqualert API now runnning"})

if __name__ == "__main__":
    app.run(debug=True)