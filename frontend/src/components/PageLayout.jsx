import React from "react";
import Navbar from "./Navbar";
import "./PageLayout.css";

export default function PageLayout({ children }) {
  const firstChild = Array.isArray(children) ? children[0] : children;
  const isFullscreenBanner = firstChild?.props?.fullScreen;

  return (
    <div className="page-layout">
      <Navbar />
      <main className={`page-content ${isFullscreenBanner ? "no-top-padding" : ""}`}>
        {children}
      </main>
    </div>
  );
}