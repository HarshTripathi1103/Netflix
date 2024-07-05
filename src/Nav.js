import React, { useEffect, useState } from 'react'
import './Nav.css'



function Nav() {

  const[show,handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100){
        handleShow(true)
        

      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll",null)
    }
     
  } , []);



  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img
        className='nav-logo'
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt='netflix-logo'
        />
        <img
        className='nav-avtaar'
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt='netflix-logo'
        />
      
    </div>
  )
}

export default Nav
