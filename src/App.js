import "./App.css";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";
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
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
