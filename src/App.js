import React, {Component} from 'react';
import Cover from './components/Cover/Cover'
import Footer from './components/Footer/Footer'

import './App.css';







class App extends Component {

    


        render(){

           return( 
                        <div className = 'App'>


                                <Cover/>
                                <Footer/>
                        
                        </div>
                    );

        }
  
  }

export default App;
