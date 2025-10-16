import React from "react";
import "./ItemContainer.css";

function ItemContainer({ title, items = [] }) {
  return (
    <div className="item-container">
      <div className="item-container-header">
        <h2>{title}</h2>
      </div>
      <div className="item-container-grid">
        {items.map((item, index) => (
          <div key={index} className="item">
            <div
              className="item-background"
              style={{
                backgroundImage: `url(${item.image || "https://via.placeholder.com/300"})`,
              }}
            ></div>
            <div className="item-card">
              <a href={item.link || "#"} className="item-link">
                {item.description || "Descripción Placeholder"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemContainer;