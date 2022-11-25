import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import logo from "../images/image.jpg";
import './navbar.css';



const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  }


  return (
    <>
      <nav className={toggle ? 'navbar expanded' : 'navbar'}>
        <img src="" className="logo" alt="Easy Africana logo" />
        <div className='toggle-icon' onClick={handleToggle}>
          {toggle ? <p className="menu-close"><FaTimes /> </p>: <FaBars />}
        </div>
        <ul className='links'>
          <Link to="/" className="navbar-link"><li>Home</li></Link>
          <Link to="/about" className="navbar-link"><li>About</li></Link>
          <Link to="/services" className="navbar-link"><li>Services</li></Link>
          <Link to="/projects" className="navbar-link"><li>Project</li></Link>
        </ul>

        <p className='links' id="btn">
          <Link to="/contact" ><span>Contact Me</span></Link>
        </p>
        
      </nav>
    </>


  )
}

export default Navbar