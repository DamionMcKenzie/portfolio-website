import React from 'react';
import './projectClone.css'
import IMDB from './IMDB.jpg';
import janitorialCleaningServices from './janitorialCleaningServices.jpeg';
import twitterAppAndroid from './twitterAppAndroid.png';
import obama from './obama.jpg'



const Projects = () =>{

	return(
		<div className = 'project'>


							<div className = "portfolio-title">
									<h1>Portfolio</h1>
							</div>


				<p className = " project-intro courier f3 b pa3">
				These are some of the projects I have been working on. The code for the business application will not be available for viewing but the Live Demo will be available as soon as the web app is live.
				</p>

			<div className = "Portfolio">


					<div className = "project1 " >
						<div className=" shadow-5 grow">
								<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-100-l mw5  ">
								  
								  <div className = 'container'>
										  <img src={twitterAppAndroid} className="db w-100 br2 br--top" alt="Twitter application "  height = "500px"  width = 'auto'/>
											
											<div className=" overlay">
												<div className = 'text'>This project was developed during my time learning android development with CodePath. In this app I built the client side of twitter using the twitter API to load tweets in the app. I also use OAuth to authenticate logging in to your twitter account.</div>					
											</div>	  
									</div>			 

									 <div className=" project1-style pa2 ph3-ns pb3-ns">

												    		<div className="dt w-100 mt1">
															      <div className="dtc">
															        <h1 className="f5 f4-ns mv0">Twitter Client Mobile Application</h1>
															      </div>
												    		</div>

												  </div>
								</article>

						</div>

										<a href = "https://github.com/DamionMcKenzie/simpleTweetApp" >
									<div className = 'btnCard grow'>
										<button style = {{'cursor': 'pointer'}}>Code and video walkthrough</button>
									</div>
										</a>
			</div>


			<div className = "project2 " >
						<div className=" shadow-5 grow">
								<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-100-l mw5 center ">
								  
								  <div className = 'container'>
										  <img src={obama} className="db w-100 br2 br--top" alt="Twitter application"  height = "500px"  width = 'auto'/>
											
											<div className=" overlay">
												<div className = 'text'>A full stack web application that uses the Clarifai Machine learning API for facial recognition in an image. This web app also rank users based on the number of searches performed.</div>					
											</div>	  
									</div>			 

									 <div className=" project1-style pa2 ph3-ns pb3-ns">

												    		<div className="dt w-100 mt1">
															      <div className="dtc">
															        <h1 className="f5 f4-ns mv0">Smart Brain Web Application</h1>
															      </div>
												    		</div>
												  </div>
								</article>

						</div>

									<div className = 'btns'>
												<a href = "https://github.com/DamionMcKenzie/smart-brain-app" >
											<div className = 'btnCard grow'>
												<button style = {{'cursor': 'pointer'}}>Code</button>
											</div>
												</a>

											<div className = 'liveDemo'>
												<a href = "https://face-detector-ai.herokuapp.com/" >
											<div className = 'btnCard grow'>
												<button style = {{'cursor': 'pointer'}}>Live Demo</button>
											</div>
												</a>

											</div>
									</div>

			</div>


		 <div className = "project3">
						<div className=" shadow-5 grow">
								<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-100-l mw5 center ">
								  
								  <div className = 'container'>
										  <img src={IMDB} className="db w-100 br2 br--top" alt="Twitter application "  height = "500px"  width = 'auto'/>
											
											<div className=" overlay">
												<div className = 'text'>This application uses IMDB API to display movies now playing in theaters. Also including in the app is a summary of each movie, a trailer and its ratings according to IMDB.</div>					
											</div>	  
									</div>			 

									 <div className=" project1-style pa2 ph3-ns pb3-ns">

												    		<div className="dt w-100 mt1">
															      <div className="dtc">
															        <h1 className="f5 f4-ns mv0">IMDB Mobile Application</h1>
															      </div>
												    		</div>
												  </div>
								</article>

						</div>

										<a href = "https://github.com/DamionMcKenzie/IMDB-MOVIE-APP" >
									<div className = 'btnCard grow'>
										<button style = {{'cursor': 'pointer'}}>Code and video walkthrough</button>
									</div>
										</a>
			</div>



			<div className = "project4 " >
						<div className=" shadow-5 grow">
								<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-100-l mw5 center ">
								  
								  <div className = 'container'>
										  <img src={janitorialCleaningServices} className="db w-100 br2 br--top" alt="Twitter application image"  height = "475px"  width = 'auto'/>
											
											<div className=" overlay">
												<div className = 'text'>This application is being developed currently. The purpose of this project is to create a custom built web app which will suit the need to better handle the affairs of the business.</div>					
											</div>	  
									</div>			 

									 <div className=" project1-style pa2 ph3-ns pb3-ns">

												    		<div className="dt w-100 mt1">
															      <div className="dtc">
															        <h1 className="f5 f4-ns mv0">White Glove Janitorial Services Web Application</h1>
															      </div>
												    		</div>
												  </div>
								</article>

						</div>

							<div className = 'btns'>
										
									<div className = 'liveDemo'>
											<a href = "" >
										<div className = 'btnCard grow'>
											<button style = {{'cursor': 'pointer'}}>Live Demo</button>
										</div>
											</a>
									</div>
							</div>

						</div>

			</div>

		</div>


);
		
}

export default Projects