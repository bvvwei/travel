import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Services from './Services'
import Testimonials from './Testimonials'
import ScrollToTop from './ScrollToTop'
import hero from './Hero'
import Recommend from './Recommend'
import Hero from './Hero'
export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Recommend />
      <ScrollToTop />
      <Testimonials/>

      
    </>
  );
}