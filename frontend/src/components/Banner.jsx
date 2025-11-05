import React from "react";
import "./Banner.css";

function Banner({ title = "Aqua alert", subtitle = "Identifica riesgos, recibe alertas, actúa.", className = "" }) {
    return (
        <div className={`component-container ${className}`}>
            <div className="component-content banner-content component-pad">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}

export default Banner;