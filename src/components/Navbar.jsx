import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
 
        const [scrolling, setScrolling] = useState(false);
      
        useEffect(() => {
          const handleScroll = () => {
            if (window.scrollY > 50) {
              setScrolling(true);
            } else {
              setScrolling(false);
            }
          };
      
          // Add scroll event listener
          window.addEventListener("scroll", handleScroll);
      
          // Clean up the event listener
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        }, []);
  return (
    <>
    <header className={`navbar ${scrolling ? "scrolled" : ""}`}>
    <Link to={'/'}><img src="./logo.png" width={'85px'} height={'45px'} alt="" /></Link>
    <nav className='text-uppercase'>
            
            <Link to={'/home'} className='link'>Home</Link>
            <Link to={'/about'} className='link' >About</Link>
            <Link to={'/products'} className='link'>Products</Link>
            <Link to={'/booth'} className='link'>Booth</Link>
        </nav>
    </header>

    </>
  )
}

export default Navbar