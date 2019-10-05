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
				Damion McKenzie is an aspiring Software Engineer with keen interest in developing mobile and web applications.
				He hails from the beautiful island of Jamaica. 
				Growing up with a curiosity about how Software, computer hardware or computers in general works, he first began pulling a part old and current laptops and desktops at about age 15.
				After being admitted to college, he wanted to do something in engineering considering his Science and Math background.
				Soon after, he discovered software engineering and being that he was not completely new to coding he decided to give Computer Science a try. 
				Not very long after, he deemed software engineering as the number one choice for him. 
				Since then, he went on to learning web development and mobile application development for android. 
				His mission is to make the world a better place one Software at a time.




				  
				</div>

				<div className = 'para2'>					
				   
				</div>

	</div>
</div>

		);
	
}

export default About;



			