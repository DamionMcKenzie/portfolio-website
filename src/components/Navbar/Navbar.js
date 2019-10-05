import React from 'react';
import './Navbar.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'



const Navbar = ()=>{

	return(

		               <nav>
						      <ul classname = "navlinks">
								        <li>
								          <Link to="/">Home</Link>
								        </li>
								        <li>
								          <Link to="/About">About Me</Link>
								        </li>
								         <li>
								          <Link to="/Projects">Projects</Link>
								        </li>     
						      </ul>
					  </nav>
/*
		<nav className = 'navbar'>
			<ul className = "nav-word-style">
				<li>Home</li>
				<li>About Me</li>
				<li>Projects</li>
				<li className = 'push'>Contacts</li>
			</ul>	
		</nav>*/


		);
}

export default Navbar;