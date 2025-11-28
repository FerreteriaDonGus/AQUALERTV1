from flask import Blueprint, request, jsonify
from openai import OpenAI 
import re

chat_bp = Blueprint("chat", __name__)

client = OpenAI(api_key="llavedefaultjwt666")

def pregunta_rarona(texto):
    patrones = [
        r"donde vivo",
        r"direccion",
        r"hacke",
        r"bomba",
        r"matar",
        r"haz mi tarea",
        r"explosivo",
        r"fortnite",
    ]
    return any(re.search(p, texto, re.IGNORECASE)for p in patrones)

@chat_bp.route("/chat", methods=[POST])
def chat():
    user_msg = request.json.get("message", "")
    
    if pregunta_rarona(user_msg):
        return jsonify({"response": "Lo siento, pero no puedo ayudarte con esta pregunta, intenta con algo relacionado al agua o al medio ambiente"})
    
    
    completion = client.chat.completion.create(
        model="gpt-4.1-mini",
        messages=[
            {"role":"system","content":"""
             Eres aquabot, un asistente enfocado en temas de hidrologia y cuidado del agua en mexico.
             - Responde siempre con claridad, y amabilidad.
             - Si no sabes un dato preciso y fundamentado, invita a consultar la fuente oficial. 
             - NO inventes informacion cientifica.
             - Manten un tono cercano pero profesional.
             """},
            {"role":"user","content": user_msg}
        ]
    )
    
    respuesta = completion.choices[0].message["content"]
    
    return jsonify({"response": respuesta})