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
          <div key={index} className="item-placeholder">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemContainer;