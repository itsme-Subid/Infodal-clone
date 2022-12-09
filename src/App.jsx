import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Widgets from "./components/Widgets";
import Register from "./components/Register";
import Marquee from "./components/Marquee";
import LiveCourse from "./components/LiveCourse";
import VideoCourse from './components/VideoCourse';

const App = () => {
  return (
    <div className="App overflow-hidden">
      <Navbar />
      <Widgets />
      <Hero />
      <Register />
      <Marquee />
      <LiveCourse />
      <VideoCourse />
    </div>
  );
};

export default App;
