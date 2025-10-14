import React from "react";
import "./ForumsSection.css";

function ForumsSection() {
    return (
        <div className="forums-section">
            <h2>Foros de Discusión</h2>
            <div className="forum-links">
                <a href="/informacion" className="forum-link">
                informacion
                </a>
                <a href="/mapas" className="forum-link">
                Data center y mapas
                </a>
            </div>
        </div>
    );
}

export default ForumsSection;