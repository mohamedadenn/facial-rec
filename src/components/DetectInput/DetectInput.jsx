import React from "react";
import './DetectInput.css';

export default function DetectInput({onInputChange, onSubmit}) {
  
    return (
      <div>
        <input type="text" id="photoLink" name="photoLink" onChange={onInputChange} ></input>
        <input type="submit" value="Detect" onClick={onSubmit}></input>
       
     </div>
    );
  }
  