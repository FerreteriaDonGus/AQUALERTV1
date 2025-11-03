import React from 'react';
import './RegistroForm.css';

function RegistroForm({ formData, handleChange, handleSubmit, message}) {
    return (
        <div className="registro-form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">nombre de usuario: </label>
                    <input type="text" id="username" name="username" value={formData.username} required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">correo electrónico: </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="password">contraseña: </label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>

                <button type="submit">Registrarse</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default RegistroForm;