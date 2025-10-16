import React from "react";
import { Link } from "react-router-dom";
import "./ForumsSection.css";

function ForumsSection() {
    return (
        <div className="forums-section">
            <h2>Foros de Discusión</h2>
            <div className="forum-links">
                <a href="/informacion" className="forum-link">
                informacion
                </a>
                <Link to="/mapas" className="forum-link">
                Mapas y Data Center
                </Link>
            </div>
        </div>
    );
}

export default ForumsSection;