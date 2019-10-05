import React from 'react';
import './Footer.css'
import instagram from './instagram.png'
import linkedin from './linkedin.png'
import facebook from './facebook.png'
import twitter from './twitter.png'
import github from './github.png'


const Footer = () =>{

	return(

		
					<footer id="footer" className = 'icon'>
						
							<a href = "https://www.instagram.com/dm10.ja/?hl=en"><img src ={instagram} alt = "" height = "40" width = "40"/></a>
							<a href = "https://www.linkedin.com/in/damion-mckenzie-823064142/"><img src ={linkedin} alt = "" height = "40" width = "40"/></a>
							<a href	= "https://www.facebook.com/damion.mckenzie.961"><img src ={facebook} alt = "" height = "40" width = "40"/></a>
							<a href = "https://twitter.com/DMckenzie_10"><img src ={twitter} alt = "" height = "40" width = "40"/></a>
							<a href = "https://github.com/DamionMcKenzie"><img src = {github} alt = "" height = "40" width = "40"/></a>
						
					</footer>
		

	);
}


export default Footer; 

