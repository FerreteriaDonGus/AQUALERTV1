import React, { useState } from "react";
import RegistroForm from "../components/RegistroForm";

function Registro() {
    const[formData, setFormData] = useState({username: "", email: "", password: ""});
    const [message, setMessage] = useState("");
    const handleChange = (e) => { const { name, value } = e.target;
        setFormData({ ...formData, [name]: value}); };

    const handleSubmit = async (e) => {e.preventDefault();
        try {
            const respuesta = await fetch("/api/register", {method: "POST", headers: {"Content-type": "application/json",}, body: JSON.stringify(formData),});

            const datos = await respuesta.json();
            if(respuesta.ok) {
                setMessage("Usuario registrado exitosamente.");
                setFormData({username: "", email: "", password: ""});
            } else {
                setMessage(datos.error || "Error al registrar el usuario.");
            }} catch (error) {
                setMessage("Error al conectar con el servidor.")
            }
    };

    return (
        <div className="Registro-page">
            <h1>Registrarse</h1>
            <RegistroForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} message={message} />
        </div>
    );
}
export default Registro;