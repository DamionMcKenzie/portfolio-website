import React from "react";
import "./Expertise.css";

/*import Projects from "../Projects/Projects"*/

import { Route, Link, HashRouter as Router } from 'react-router-dom'

import android from './android.png'
import bootstrap from './bootstrap.png'
import github from './github.png'
import java from './java.png'
import html5 from './html5.png'
import react from './react.png'
import javaScript from './javaScript.png'
import database from './database.png'
import css from './css.png'
import python from './python.png'
import postgresql from './postgresql.png'
import django from './django.png'
import git from './git.png'
import cplusplus from './cplusplus.png'
import nodejs from './nodejs.png'


class Expertise extends React.Component{

	render(){
				return(
						
							<div className = 'expertise'>


										<div className = 'expertiseTitle'>

											{/*	marginTop set to 0 to avoid horizontal spacing at the top of page*/}
											<h1 style = {{ 'color': '#D72638', 'marginTop':'0'}}>TOOLS AND SKILLS</h1>

										</div>

										<div className = 'skill'> 
											<img src ={android} />
											<img src ={bootstrap} />
											<img src ={github} />
											<img src ={html5} />
											<img src ={java} />
											<img src ={react} />
											<img src ={javaScript} />
											<img src ={database} />
											<img src ={css} />
											<img src ={python} />
											<img src ={postgresql} />
											<img src ={django} />
											<img src ={git} />
											<img src ={cplusplus} />
											<img src ={nodejs} />
										</div>

											
										
										{/*<Link to="/Projects"  className = 'btn-projects grow shadow-5'> PROJECTS </Link>
													*/}

							</div>
						
				)
	}
}
export default Expertise; 