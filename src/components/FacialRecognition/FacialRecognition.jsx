import React from "react";
import './FacialRecognition.css';

export default function FacialRecognition({imageUrl, boxes}) {
  
  let n = 0; //key identifier
    return ( 
        <div className='center ma'>
        <div className='absolute mt2'>
        <img className="pt3" id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>

    {boxes.map(box => (    
      <div 
          key={n++}
          className='bounding-box' 
          style={{
          top: box.topRow, 
          right: box.rightCol, 
          bottom: box.bottomRow, 
          left: box.leftCol}}>
          </div>

          ))}
        </div>
      </div>
    );
  }
  