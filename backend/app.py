from flask import Flask, jsonify
from flask_cors import CORS
from extensions import db, migrate
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

db.init_app(app)
migrate.init_app(app, db)

from models import Rol, User, PendingPost, PublishedPost
from routes.auth import bp as auth_bp

app.register_blueprint(auth_bp)

@app.route("/api")
def home():
    return jsonify({"message": "Aqualert API now running"})

if __name__ == "__main__":
    print("favor de ejecutar el host del fontend con npm run dev o npm start desde el dir raiz")
    app.run(debug=True, host="0.0.0.0", port=5173)