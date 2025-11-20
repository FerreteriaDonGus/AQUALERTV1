import React from "react";
import PageLayout from "../components/PageLayout";
import LoginForm from "../components/LoginForm";
import "./Registro.css";

function Login() {
    return (
        <PageLayout>
            <div className="page-inner">
                <div className="registro-window">
                    <div className="registro-card">
                        <h1>Iniciar sesión</h1>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default Login;
