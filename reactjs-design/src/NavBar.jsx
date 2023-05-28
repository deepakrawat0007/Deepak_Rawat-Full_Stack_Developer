import React from 'react'
import headLogo from "./assets/headLogo.png";
import "./page.css";

function NavBar() {

  return (
    <nav>
        <img src={headLogo} alt='headLogo'/>
        <div className='NavBtn'>My Assignment</div>
        <div className='NavBtn'>Chat With Mentor</div>
        <div><span><i class="fa-solid fa-user"></i></span><select className='profile'><option>Profile Name</option></select></div>
    </nav>
  )
}

export default NavBar