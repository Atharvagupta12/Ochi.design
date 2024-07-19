import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marqee from "./components/Marqee";
import About from "./components/About";
import Eyes from "./components/Eyes";

function App() {
  return (
    <div className="w-full h-screen text-white">
      <Navbar />
      <LandingPage />
      <Marqee />
      <About />
      <Eyes/>
    </div>
  );
}

export default App;
