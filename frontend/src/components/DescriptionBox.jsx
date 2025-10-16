import React from "react";
import "./DescriptionBox.css";

function DescriptionBox({ title, description }) {
  return (
    <div className="description-box">
      <div className="description-box-content">
        {title && <h2>{title}</h2>}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default DescriptionBox;