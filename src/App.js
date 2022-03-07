import "./App.css";
import React, { useState } from "react";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Statistics from "./components/Statistics/Statistics";
import URLInput from "./components/URLInput/URLInput";

function App() {
  const [link, setLink] = useState("https://www.youtube.com/feed/explore");
  const getInput = (input) => {
    setLink(input);
  };
  return (
    <>
      <Navbar />
      <Hero />
      <URLInput getInput={getInput} />
      <Statistics link={link} />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
