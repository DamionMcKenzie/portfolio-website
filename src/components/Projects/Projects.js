import React from 'react';
import './Projects.css'
import IMDB from './IMDB.jpg';
import janitorialCleaningServices from './janitorialCleaningServices.jpeg';
import twitterAppAndroid from './twitterAppAndroid.png';
import obama from './obama.jpg'



const Projects = () =>{

	return(
		<div className = 'project'>


							<div className = "portfolio-title">
									<h1 style = {{ 'color': '#D72638'}}>PORTFOLIO</h1>
							</div>


							<p className = " project-intro courier f4 b pa2">
							These are some of the projects I have been working on. The code for the business application will not be available for viewing but the Live Demo will be available as soon as the web app is live.
							</p>

					<div className = "Portfolio">

								<div className = 'project1'>
											<div class="twitter-img grow ">
												  <img src={twitterAppAndroid} alt="twitter app" style = {{'width':'300px', 'height':'500px', 'borderRadius':'5%'}}/>	  
											</div>

								            <div className = 'description1'>
									            <p className = 'justify'>This Android app is a sample Twitter application. Users can use this app to log in to twitter to 
									            view their feed among other things. All logging in are authenticated by using OAuth.</p>

									            <p className = 'justify'>Created with: Twitter client API, Java, Android studio</p>

									           		<div className = 'btns'>
									            		<a href = "https://github.com/DamionMcKenzie/simpleTweetApp"><button className = 'btn-code grow'>Code</button></a>
													</div>
								            </div>
								</div>




								<div className = 'project2'>
											<div class="wjcs-img grow ">
												  <img src={janitorialCleaningServices} alt="business app" style = {{'width':'300px', 'height':'500px' , 'borderRadius':'5%'}}/>	  
											</div>

								            <div className = 'description1'>

									            <p className = 'justify'>This full stack web app is a project i am doing which will serve as the official application for a business. 
									            It was started out of necessity to have a custom web app and someone to handle the technological affairs of the business
									            </p>

									            <p className = 'justify'>Created with: Twitter client API, Java, Android studio</p>

									           		<div className = 'btn'>
														<a><button className = 'btn-demo grow'>Live Demo</button></a>
													</div>
								            </div>
								</div>




								<div className = 'project3'>
											<div class="imdb-img grow ">
												  <img src={IMDB} alt="IMDB app" style = {{'width':'300px', 'height':'500px', 'borderRadius':'5%'}}/>	  
											</div>

								            <div className = 'description1'>
									            <p className = 'justify'>The flickster application uses the IMDB API to display movies now playing in theaters. App features 
									            include a summary, a trailer and ratings according to IMDB for each movie</p>

									            <p className = 'justify'>Created with: IMDB API, Java, Android studio</p>

									           		<div className = 'btns'>
									            		<a href = "https://github.com/DamionMcKenzie/IMDB-MOVIE-APP"><button className = 'btn-code grow'>Code</button></a>
													</div>
								            </div>
					</div>




								<div className = 'project4'>
											<div class="obama-img grow ">
												  <img src={obama} alt="smart-brain-app" style = {{'width':'300px', 'height':'500px' , 'borderRadius':'5%'}}/>	  
											</div>

								            <div className = 'description1'>
									            <p className = 'justify'>This app was built using the popular PERN stack. It uses a machine learning API to recognize 
									            faces in an image. This app also rank users according to the number of searches done</p>

									            <p className = 'justify'>Created with: PostgreSql, Express.js, React.js, Node.js, Clarifai Machine Learning API</p>

									           		<div className = 'btns'>
									            		<a href = "https://github.com/DamionMcKenzie/smart-brain-app"><button className = 'btn-code grow'>Code</button></a>
														<a href = "https://face-detector-ai.herokuapp.com/"><button className = 'btn-demo grow'>Live Demo</button></a>
													</div>
								            </div>
								</div>

			            </div>


						
		</div>
	);
		
}

export default Projects