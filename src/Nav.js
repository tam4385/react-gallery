import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';


const Nav = (props) => {
    return(
        <nav className="main-nav">
        <ul>
          <li><NavLink to='/sunsets'>Sunsets</NavLink></li>
          <li><NavLink to='/dogs'>Dogs</NavLink></li>
          <li><NavLink to='/galaxies'>Galaxies</NavLink></li>
        </ul>
        <Route path="/sunsets" render={ () => props.onSearch('sunsets') } />
        <Route path="/galaxies" render={ () => props.onSearch('galaxies') } />
        <Route path="/dogs" render={ () => props.onSearch('dogs') } />
      </nav>
    );
}

export default Nav;