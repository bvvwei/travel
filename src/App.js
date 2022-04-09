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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
  return (
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        {/* <Navbar /> */}
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/recommend'  element={<Recommendpage/>} />
            <Route path='/services'  element={<Services/>} />
            <Route path='/testimonials'  element={<Testimonials/>} />
          </Routes>
        {/* <Hero /> */}
        {/* <Footer /> */}
      </BrowserRouter>
  );
}
