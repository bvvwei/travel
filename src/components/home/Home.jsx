import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Services from './Services'
import Testimonials from './Testimonials'
import ScrollToTop from './ScrollToTop'
import hero from './Hero'
import Recommend from './Recommend'
import Hero from './Hero'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
      <div style={{height: 300}}>
        Home Page
        <Link to={"/recommend"}>
          <p>route to recommend</p>
        </Link>
      </div>
    </>
  );
}