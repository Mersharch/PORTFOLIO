import React from "react";


function Navbar() {

  let menuOpen = false;

  const handleClick = () => {
    const menubtn = document.querySelector('.menu-btn');
    menubtn.addEventListener('click', () => {
     if (!menuOpen) {
         menubtn.classList.add('open');
         menuOpen=true;
      } else {
         menubtn.classList.remove('open');
         menuOpen= false;
        }
      }
    )
  }

  return (
    <nav className="nav">
      <h1 className="nav--title">Mersharch Demenya's Portfolio</h1>

      <div className="nav--menu">
        <ul className="nav--ul">
            <li className="nav--li">Home</li>
            <li className="nav--li">Profile</li>
            <li className="nav--li" >Projects</li>
            <li className="nav--li">Skills</li>
        </ul>
        <div className="menu-btn" onClick={handleClick}>
          <div className="menu-btn-burger"></div>
        </div>
      </div>
    </nav>
  );
}
  
export default Navbar;
