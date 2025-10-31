from extensions import db
from datetime import datetime

class Rol(db.Model):
    __tablename__ = "roles"
    
    id_rol = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50), unique=True)
    descripcion = db.Column(db.Text)
    
    usuarios = db.relationship("User", backref="rol", lazy=True)
    
    def __repr__(self):
        return f"<Rol {self.nombre}>"
    
class User(db.Model):
    __tablename__ = "usuarios"
    
    id_usuario = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    pass_hash = db.Column(db.String(255), nullable=False)
    rol_id = db.Column(db.Integer, db.ForeignKey("roles.id_rol"), nullable=False)
    fecha_registro = db.Column(db.DateTime, default=datetime.utcnow)
    activo = db.Column(db.Boolean, default=True)
    
    posts_pendientes = db.relationship("PendingPost", backref="usuario", lazy=True)
    posts_publicados = db.relationship("PublishedPost", backref="usuario", lazy=True)
    
    def __repr__(self):
        return f"<User {self.username}>"
    
class PendingPost(db.Model):
    __tablename__ = "posts_pendientes"
    
    id_post = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey("usuarios.id_usuario"), nullable=False)
    titulo = db.Column(db.String(150), nullable=False)
    contenido = db.Column(db.Text, nullable=False)
    fecha_creacion = db.Column(db.DateTime, default=datetime.utcnow)
    estado = db.Column(db.Enum("pendiente", "rechazado", "aprobado"), default="pendiente")
    admin_revisor_id = db.Column(db.Integer, db.ForeignKey("usuarios.id_usuario"), nullable=True)
    comentario_revisor = db.Column(db.Text)
    
    def __repr__(self):
        return f"<PendingPost {self.titulo}>"
    
class PublishedPost(db.Model):
    __tablename__ = "posts_publicados"
    
    id_post_publicado = db.Column(db.Integer, primary_key=True)
    id_post_original = db.Column(db.Integer, db.ForeignKey("posts_pendientes.id_post"), nullable=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey("usuarios.id_usuario"), nullable=False)
    titulo = db.Column(db.String(150), nullable=False)
    contenido = db.Column(db.Text, nullable=False)
    fecha_publicacion = db.Column(db.DateTime, default=datetime.utcnow)
    visible = db.Column(db.Boolean, default=True)
    
    def __repr__(self):
        return f"<PublishedPost {self.titulo}>"