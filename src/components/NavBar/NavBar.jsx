import React from "react";
import './NavBar.css';
import Tilt from 'react-tilt';

export default function NavBar() {
  
    return (
   
<div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{ max : 65 }} style={{ height: 250, width: 250 }} >
      <img className="Tilt-inner pa3" src={process.env.PUBLIC_URL + '/SpotTheFaces-LOGO.png'}/>
      </Tilt>

</div>

     
    );
  }
  