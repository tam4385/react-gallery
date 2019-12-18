import React from 'react';
import { NavLink } from 'react-router-dom';


// function to render the nav buttons that link to the appropriate url
const Nav = () => {
    return(
        <nav className="main-nav">
        <ul>
          <li><NavLink to='/rainforest'>Rainforest</NavLink></li>
          <li><NavLink to='/night-sky'>Night Sky</NavLink></li>
          <li><NavLink to='/waterfall'>Waterfall</NavLink></li>
        </ul>
      </nav>
    );
}

export default Nav;