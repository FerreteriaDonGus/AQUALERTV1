import React from "react";
import "./Banner.css";

function Banner({
  title = "AquaAlert",
  subtitle = "Identifica riesgos, recibe alertas, actúa.",
  className = "",
  fullScreen = false,
  backgroundImage = null,
  scrollToId = null,
}) {
  const handleScroll = () => {
    if (!scrollToId) return;
    const el = document.getElementById(scrollToId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`banner-wrapper ${fullScreen ? "fullscreen" : ""}`}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      {/* blur */}
      <div className="banner-overlay" />

      <div className={`component-container banner ${className}`}>
        <div className="component-content banner-content component-pad">
          <h1>{title}</h1>
          <p>{subtitle}</p>

          {scrollToId && (
            <button className="scroll-down-btn" onClick={handleScroll}>
              ↓
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Banner;
