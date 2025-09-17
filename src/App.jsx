import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./components/Landing/About";
import Footer from "./components/Landing/Footer";
import Contact from "./components/Landing/Contact";
import Skills from "./components/Landing/Skills";
import Projects from "./components/Landing/Projects";
import Navbar from "./components/Landing/Navbar";
import HeroSection from "./components/Landing/HeroSection";

function App() {
  return (
    <>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Landing/>} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/hero" element={<HeroSection/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/footer" element={<Footer/>} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}

export default App;
