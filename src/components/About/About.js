import React from 'react';
import './About.css';
import me from './me.jpg';

const About = ()=>{

	return(
			<div className = "About">
						
					<div className = "About-title">
						<h1>About Me</h1>
						<hr/>
					</div>

					<div className = 'about-section'>

									<div className = 'quote'>
										Favorite Quote: "The size of your success is measured by the strength of your desire; the size of your dream; and how you handle disappointment along the way." 	
									</div>


									<section>
										<img className = 'about-imgage' src = {me} width = '300px' height = 'auto' alt = 'Damion McKenzie'/>
									</section>


									<div className = 'para1'>	
															
										Hi, I am Damion McKenzie and I am an aspiring Software Engineer with keen interest in developing mobile and web applications.
										Growing up with a curiosity about how Software, computer hardwares or computers in general works, I first began pulling a part old laptops and desktops at about age 15.
										After being admitted to college, I wanted to do something in Engineering considering my Science and Math background.
										Soon after, I discovered software engineering and being that I was not completely new to coding I decided to give Computer Science a try. 
										Not long after, software engineering became the number one choice for me. 
										Since then, I went on to learning web development and mobile application development for android. 
										My mission is to make the world a better place one Software at a time.
											  
									</div>		

					</div>
            </div>

		);
	
}

export default About;



			