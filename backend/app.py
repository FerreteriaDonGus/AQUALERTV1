from flask import Flask, jsonify
from flask_cors import CORS
from extensions import db
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

db.init_app(app)

from models import Rol, User, PendingPost, PublishedPost

@app.route("/api")
def home():
    return jsonify({"message": "Aqualert API now running"})

if __name__ == "__main__":
    with app.app_context():
        db.create_all() 
        print("Servidor Flask corriendo en http://localhost:5000")
    app.run(debug=True, host="0.0.0.0", port=5000)