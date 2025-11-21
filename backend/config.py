import os

class Config:
    LLAVE_SECRETA = os.environ.get("LLAVE_SECRETA") or "dev-secret"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = os.environ.get("DB_URI") or "mysql+pymsql://root:@localhost/aqualert"
    
    JWT_LLAVE_SECRETA = os.environ.get("JWT_LLAVE_SECRETA") or "llavedefaultjwt666" # llave para JWT
    
    