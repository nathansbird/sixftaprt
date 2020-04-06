import React from 'react';
import '../sass/navbar.scss';

const NavBar = () => {
  return(
    <div id='navbar-screen'>
      <div id='navbar'>
        <div id='logo'>
          <h1>SIXFTAPRT</h1>
        </div>
        <div id='nav-items'>
          <a>Products</a>
          <a>Resources</a>
          <a>Team</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;