import React from "react";
import './NavBar.css';
import Tilt from 'react-tilt';

export default function NavBar() {
  
    return (
   
<div className="pt4">
      <Tilt className="Tilt br2 shadow-2 center" options={{ max : 65 }} style={{ height: 200, width: 200 }} >
      <img alt="Spot The Faces Logo"className="Tilt-inner pa3" src={process.env.PUBLIC_URL + '/logo.png'}/>
      </Tilt>

</div>

     
    );
  }
  