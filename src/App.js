import "./App.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
