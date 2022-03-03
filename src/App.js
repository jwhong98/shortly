import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Statistics from "./components/Statistics/Statistics";
import URLInput from "./components/URLInput/URLInput";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <URLInput />
      <Statistics />
    </>
  );
}

export default App;
