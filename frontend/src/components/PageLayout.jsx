import React from "react";
import Navbar from "./Navbar";
import "./PageLayout.css";

export default function PageLayout({ children }) {
  return (
    <div className="page-layout">
      <Navbar />
      <main className="page-content">{children}</main>
    </div>
  );
}