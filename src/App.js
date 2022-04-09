import React, { useEffect } from "react";
import Footer from "./components/home/Footer";
import Hero from "./components/home/Hero";
import Navbar from "./components/home/Navbar";
import Recommend from "./components/home/Recommend";
import ScrollToTop from "./components/home/ScrollToTop";
import Services from "./components/home/Services";
import Testimonials from "./components/home/Testimonials";
import scrollreveal from "scrollreveal";
import connect from "../src/components/login/connect";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recommendpage from "./components/home/Recommendpage";
import Home from "./components/home/Home";
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #recommendpage,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (<>
    
    <div>
      <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path='/' component={Home} />
        <Route exact path='/recommend'  component={Recommendpage} />
        <Route exact path='/services'  component={Services} />
        <Route exact path='/testimonials'  component={Testimonials} />
      </Routes>
      <Hero />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
      </Router>
    </div>
    </>
  );
  

}
