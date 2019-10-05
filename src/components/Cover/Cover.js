import React from "react";
import { Slide } from 'react-slideshow-image';
import "./Cover.css";
import img1 from './img1.JPG';
import img5 from './img5.JPG';
import img4 from './img4.JPG';
import img12 from './img12.jpg';



 
const properties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  /*indicators: true,*/
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Cover = () => {
    return (
    	
			        <Slide {...properties} className = 'slide-container' >

			          <div className="each-slide ">
			           <img src = {img4} alt = "" />
			          </div>


			          <div className="each-slide">
			            <img src = {img1} alt = ""/>
			          </div>



			          <div className="each-slide">
			            <img src = {img12} alt = "" />
			          </div>


			          <div className="each-slide">
			            <img src = {img5} alt = "" />
			          </div>

			        </Slide>
			      
		
    )
}

export default Cover;