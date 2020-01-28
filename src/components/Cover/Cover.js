import React from "react";
import { Route, Link, HashRouter as Router } from 'react-router-dom'


import "./Cover.css";

import Bio from "../Bio/Bio"

 
const Cover = () => {

			    return (

			    	
								<div className="hero-image">
									<Link to="/Bio">
									  <div className="hero-text">
										    <h1 style={{'font-size':'50px'}}>Hi, I'm Damion Mckenzie</h1>
										    <h1>Software Engineer</h1>
									  </div>
									</Link>
								</div>	
					

			             )

}


export default Cover;