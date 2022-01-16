import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Helmet, HelmetProvider } from "react-helmet-async";
import pageContent from "/src/assets/data/pageContent.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "/src/assets/scss/App.scss";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import FourOFour from "./pages/FourOFour";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const getContent = (pageName) => {
    return pageContent.find((el) => el.title === pageName);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <HelmetProvider>
      <Router basename="/Mg-Consulting-Full/">
        <main className="App">
          <Helmet
            defaultTitle={import.meta.env.VITE_APP_TITLE}
            titleTemplate={`%s | ${import.meta.env.VITE_APP_TITLE}`}
          ></Helmet>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about-us"
              element={<About {...getContent("About Us")} />}
            />
            <Route
              path="/contact-us"
              element={<Contact {...getContent("Contact Us")} />}
            />
            <Route
              path="/services"
              element={<Services {...getContent("Core Services")} />}
            />
            <Route
              path="/projects"
              element={<Projects {...getContent("Our Projects")} />}
            />
            <Route path="/*" element={<FourOFour />} />
          </Routes>
          <Footer />
        </main>
      </Router>
    </HelmetProvider>
  );
}

export default App;
