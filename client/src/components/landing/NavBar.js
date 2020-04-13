import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
  return(
    <div id='navbar-screen'>
      <div id='navbar'>
        <div id='logo'>
          <h1>SIXFTAPRT</h1>
        </div>
        <div id='nav-items'>
          <a id='donation' href="https://my.gobluefire.com/App/Form/76b858a5-8168-4ac8-8fd5-e82bd2eb9f9c" target="_blank">Donate</a>
          
        </div>
      </div>
    </div>
  );
}

//<Link to="/products">Products</Link>
//<Link to="/team">Team</Link>

export default NavBar;