import Navbar from "./componenets/navbar/Navbar";
import Home from "./pages/home/Home";
import Services from "./pages/servicess/Services";
import Contact from "./pages/contact/Contact";
import Footer from "./componenets/footer/Footer";
import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]); // whenever the 'theme' gets updated it runs the code inside useEffect().

  return (
    <>
      <div className={`mainContainer ${theme}`}>
        <Router>
          <Navbar theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/services" exact Component={Services} />
            <Route path="/contact" exact Component={Contact} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
