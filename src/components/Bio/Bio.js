import React from 'react';
import './Bio.css';
import BB from './BB.png';

const Bio = ()=>{

	return(
					<div className = "About">
						
								<div className = "About-title">
									<h1 style = {{ 'color': '#D72638'}}>ABOUT ME</h1>
									<hr/>
								</div>

								<div className = 'quote'>
									Favorite Quote: "The size of your success is measured by the strength of your desire; the size of your dream; and how you handle disappointment along the way." 	
								</div>

								
								
													<img src = {BB}  
													alt = "Damion McKenzie" 
													className = "about-image"
													style= {{'borderRadius': '20%'}}
													/>


								<div className = 'about-section'>

												<p className = 'para'>


														The world stories should be told from many different perspectives, hence the reason for
														diversity and inclusion. I am Damion McKenzie and I am an aspiring software engineer. Being
														fond of everything engineering, firstly inspired by tv series and a passion for problem solving, 
														to be an engineer was a long time dream of mine. Shortly before attending college, I was
														introduced to computer Science by someone who ascertain me about the need for programmers and 
														their problem solving ability. I started out
														learning Java which gave me the confidence to go in pursuit of a career in software engineering. 
														The world then became my oyster.

													</p>


												<p className = 'para'>
													I had an amazing experience exploring different areas of Computer Science. I then felt a great need to learn as much as I can as I 
													strive to be one of the best Software Engineers. Not long after, I felt that I may be getting burned
													out but then I reassured myself of the reason why I decided do programming. The skills I learned in programming was just a 
													tool. A tool that would help me to write software to impact the lives of millions of people. I think 
													to myself for a moment. Then things become apparent. The reason for my journey until now becomes not 
													to be just a programmer but to be a problem solver. As I challenge myself to become a better problem solver each day,
													my greatest aspiration is to make the world a better place one software at a time. 
												</p>		

								</div>
            		</div>

		);
	
}

export default Bio;



			