import React from "react";
import './DetectInput.css';

export default function DetectInput({onInputChange, onSubmit}) {
  
    return (
      <div> 
      <p className='f3 center pt4'>
      Let us detect faces in your pictures, give it a try!
      </p>
      <div className='center w-100'>
        <div className='form center pa4 br3'>
          
          <input className='f4 pa2 w-100 center' type='text' onChange={onInputChange} placeholder="Add Image Link Here"/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-yellow'
            onClick={onSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
    );
  }
  