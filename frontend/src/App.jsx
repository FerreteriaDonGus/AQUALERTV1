import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MapsPage from "./pages/MapsPage";
import LightRaysBackground from "./components/LightRaysBackground";

function App() {
  return (
    <Router>
      <LightRaysBackground/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/mapas" element={<MapsPage />} />
      </Routes>
    </Router>
  );
}
  export default App;

  