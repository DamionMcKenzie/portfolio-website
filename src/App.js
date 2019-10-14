import React, {Component} from 'react';
import Cover from './components/Cover/Cover'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'
import About from './components/About/About'

import './App.css';



class App extends Component {

        render(){

           return( 
                    <div className = 'App'>

                            <Cover/>
                            <About/>
                            <Projects/>
                            <Footer/>

                    </div>
                );

        }
  
  }

export default App;
