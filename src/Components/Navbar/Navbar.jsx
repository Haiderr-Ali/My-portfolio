import React, { useRef, useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar() {

   const[menu, setMenu] = useState("home");
   const menuref = useRef();

   const openMenu = ()=>{
    menuref.current.style.right="0";
   }
   const closeMenu = ()=>{
    menuref.current.style.right="-350px";
   }

  return (
    <div className='navbar'>
       <img  src="./logo.png" height="100px" width="150" alt="" />
       <div className="nav-mob-open" onClick={openMenu}><i class="fa-solid fa-bars"></i></div>
      <ul ref={menuref} className='nav-menu'>
      <div className="nav-mob-close" onClick={closeMenu}><i  class="fa-solid fa-xmark"></i></div>
        <li><AnchorLink className="anchor-link"  href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink></li>
        
        <li><AnchorLink className="anchor-link" offset={50} href="#projects"><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink></li>
        
        <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
      </ul>
      <div className="nav-connect"><a href="https://www.linkedin.com/in/haider-ali-5701031a6" target='_blank' >Connect with me on <i class="fa-brands fa-linkedin"></i></a></div>
    </div>
  )
}

export default Navbar
