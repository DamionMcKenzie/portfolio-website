import React, {Component} from 'react';
import Cover from './components/Cover/Cover'
//import Intro from './components/Intro/Intro'
//import Expertise from './components/Expertise/Expertise'
import Footer from './components/Footer/Footer'



import './App.css';



class App extends Component {

        render(){

           return( 
                    <div className = 'App'>

                            <Cover/>
                            {/*<Intro/>
                            <Expertise/>*/}
                            <Footer/>

                    </div>
                );

        }
  
  }

export default App;
