import React from "react";
import './DetectInput.css';

export default function DetectInput({onInputChange, onSubmit}) {
  
    return (
      <div>
      <p className='f3'>
      
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
    );
  }
  