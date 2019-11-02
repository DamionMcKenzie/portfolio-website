import React from "react";
import "./Intro.css";

const Intro = () =>{

	return(
			<div className = 'intro'>

					<h1 style = {{ 'color': '#D72638'}}>ABOUT ME</h1>


				<p className = 'para'>
					The world stories should be told from many different perspectives, hence the reason for
					diversity and inclusion. I am Damion McKenzie and I am an aspiring software engineer. Being
					fond of everything engineering, firstly inspired by tv series and a passion for problem solving, 
					to be an engineer was a long time dream of mine. Shortly before attending college, I was
					introduced to computer Science by someone who ascertain me about the need for programmers and 
					their problem solving ability. I then decided to give software engineering a try. I started out
					with java which gave me the confidence to go in pursuit of a career in software engineering. 
					The world then became my oyster.

				</p>

				<p className = 'para'>
					Programming was fun and life was great. I then felt a great need to learn as much as I can as I 
					strive to be one of the best software engineers. Not long after, I felt that I may be getting burned
					out but then I reassured myself of the reason why I decide do programming. Programming was just a 
					tool. A tool that would help me to write software to impact the lives of millions of people. I think 
					to myself for a moment. Then things become apparent. The reason for my journey through now becomes not 
					to be just a programmer but to be a problem solver.
				</p>


					<div className = 'btn'>

							<button className = 'btn-learn grow shadow-5'>LEARN MORE</button>

							<button className = 'btn-resume grow shadow-5'>RESUME</button>
					</div>

			</div>
		)
}
export default Intro;