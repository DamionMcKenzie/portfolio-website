import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/About/About';
import Projects from './components/projectClone/projectClone';
import 'tachyons';





import { Route, Link, HashRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


const routing = (
		  <Router >

			      	
			      <ul className = 'navbar'>
					        <li>
					          <Link to="/" className = 'tags dim'>Home</Link>
					        </li>

					        <li>
					          <Link to="/About" className = 'tags dim'>About Me</Link>
					        </li>

					         <li>
					          <Link to="/Projects" className = 'tags dim'>Projects</Link>
					        </li>
			      </ul>
					

		      <Route exact path="/" component={App} />
		      <Route path="/About" component={About} />
		      <Route path="/Projects" component={Projects} />
				   
		  </Router>
)

ReactDOM.render( routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
