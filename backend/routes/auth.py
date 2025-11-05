from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy.exc import IntegrityError
from extensions import db
from models import User, Rol

bp = Blueprint("auth", __name__, url_prefix="/api")

def get_default_role():
    role = Rol.query.filter_by(nombre="user").first()
    if role:
        return role.id_rol
    
    role = Rol(nombre="user", descripcion="Usuario por defecto")
    db.session.add(role)
    db.session.commit()
    return role.id_rol

@bp.route("/register", methods=["POST"])
def register():
    data = request.get_json() or {}
    username = (data.get("username") or "").strip()
    email = (data.get("email") or "").strip()
    password = data.get("password") or ""
    
    if not username or not email or not password:
        return jsonify({"error": "Faltan campos obligatorios"}), 400
    
    if "@" not in email:
        return jsonify({"error": "Email inválido"}), 400
    
    try:
        rol_id = get_default_role()
        pw_hash = generate_password_hash(password, method="pbkdf2:sha256", salt_length=8)
        
        user = User(username=username, email=email, pass_hash=pw_hash, rol_id=rol_id)
        db.session.add(user)
        db.session.commit()
    except IntegrityError as e:
        db.session.rollback()
        
        return jsonify({"error": "Nombre de usuario o email ya registrados"}), 400
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "Error interno del servidor"}), 500
    
    return jsonify({"message": "Usuario registrado exitosamente"}), 201

    