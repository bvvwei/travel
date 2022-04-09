import React from "react";
import Footer from "./components/home/Footer";
import Navbar from "./components/home/Navbar";
import Services from "./components/home/Services";
import Testimonials from "./components/home/Testimonials";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recommendpage from "./components/home/Recommendpage";
import Home from "./components/home/Home";
export default function App() {
  return (
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <Navbar />
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/recommend'  element={<Recommendpage/>} />
            <Route path='/services'  element={<Services/>} />
            <Route path='/testimonials'  element={<Testimonials/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
  );
}
