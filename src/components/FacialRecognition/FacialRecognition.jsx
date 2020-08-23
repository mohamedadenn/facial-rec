import React from "react";
import './FacialRecognition.css';

export default function FacialRecognition({imageUrl, box}) {
  
    return (
        <div className='center ma'>
        <div className='absolute mt2'>
          <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
          <div className='bounding-box' 
          style={{
          top: box.topRow, 
          right: box.rightCol, 
          bottom: box.bottomRow, 
          left: box.leftCol}}></div>
        </div>
      </div>
    );
  }
  