import React from "react";


function Navbar() {
    return (
      <nav className="nav">
        <h1 className="nav--title">Mersharch Demenya's Portfolio</h1>
        <ul className="nav--ul">
            <li className="nav--li">Home</li>
            <li className="nav--li">Profile</li>
            <li className="nav--li" >Projects</li>
            <li className="nav--li">Skills</li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;