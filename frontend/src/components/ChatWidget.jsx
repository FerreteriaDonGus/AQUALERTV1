import React, { useState, useEffect, useRef } from "react";
import "./ChatWidget.css";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  // scroll automático al último mensaje
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim()) return;

    // Agregar mensaje del usuario
    setMessages(prev => [...prev, { from: "user", text: input }]);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    const data = await response.json();

    // Agregar respuesta del bot
    setMessages(prev => [...prev, { from: "bot", text: data.response }]);
    setInput("");
  }

  return (
    <>
      {/* Botón flotante */}
      <button className="chat-button" onClick={() => setOpen(!open)}>
        💬
      </button>

      {/* Ventana del chat */}
      <div className={`chat-window ${open ? "open" : ""}`}>
        <div className="chat-header">
          <span>AquaBot 💧</span>
          <button onClick={() => setOpen(false)}>✖</button>
        </div>

        <div className="chat-body">
          {messages.map((msg, i) => (
            <div key={i} className={`msg ${msg.from}`}>
              {msg.text}
            </div>
          ))}
          <div ref={bottomRef}></div>
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Escribe tu mensaje..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>➤</button>
        </div>
      </div>
    </>
  );
}
