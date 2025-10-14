import React from "react";
import HomePage from "./pages/HomePage";
import LightRaysBackground from "./components/LightRaysBackground";

function App() {
  return (
    <div className="app-container">

      <LightRaysBackground /> {/* Fondo global el de las olas */}
      <HomePage />

    </div>
  );
}
  export default App;

  