import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Bio from './components/Bio/Bio';
import Expertise from './components/Expertise/Expertise';
import Projects from './components/Projects/Projects';

import 'tachyons';

import { Route, Link, HashRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


const navbar = (
				  <Router>
					   	
							      <ul className = 'navbar shadow-5'>
									        <li>
									          <Link to="/" className = 'tags dim'>HOME</Link>
									        </li>


									        <li>
									          <Link to="/Bio" className = 'tags dim'>BIO</Link>
									        </li>


									        <li>
									          <Link to="/Expertise" className = 'tags dim'>EXPERTISE</Link>
									        </li>

									         <li>
									          <Link to="/Projects" className = 'tags dim'>PROJECTS</Link>
									        </li>

									         <li className = 'resume-btn'>
												  <a href="https://app.enhancv.com/share/a91568eb?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic" className="button grow">RESUME</a>
									        </li>
							      </ul>
									

						     		<Route exact path="/" component={App} />
						      		<Route path="/Bio" component={Bio} />
						      		<Route path="/Expertise" component={Expertise} />
						      		<Route path="/Projects" component={Projects} />
						   				   
				  </Router>

	);



ReactDOM.render( navbar, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
