import React from "react";
import { Link } from "react-router-dom";
import "./ItemContainer.css";

function ItemContainer({ title, items = [] }) {
  return (
    <div className="component-container">
      <div className="component-content">
      <div className="item-container">
        <div className="item-container-header"><h2>{title}</h2></div>
        <div className="item-container-grid">
          {items.map((it, i) => (
            <div key={i} className="item">
              <div className="item-background" style={{ backgroundImage: `url(${it.image || "https://via.placeholder.com/400"})` }} />
              <div className="item-card">
                <Link to={it.link || "#"} className="item-link">{it.description || "Placeholder"}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
export default ItemContainer;