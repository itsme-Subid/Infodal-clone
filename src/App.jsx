import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Widgets from "./components/Widgets";
import Register from "./components/Register";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Widgets />
      <Hero />
      <Register />
    </div>
  );
};

export default App;
