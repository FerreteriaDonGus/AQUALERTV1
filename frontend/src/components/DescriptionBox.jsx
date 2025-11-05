import React from "react";
import "./DescriptionBox.css";

function DescriptionBox({ title, description, children, className = "" }) {
  return (
    <section className={`component-container ${className}`}>
      <div className="component-content description-box-content component-pad">
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
        {children}
      </div>
    </section>
  );
}

export default DescriptionBox;