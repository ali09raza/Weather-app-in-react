import React from "react";
import './card.scss'

function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.imgsrc} alt="sunImage" />
        <button id="btn" onClick={props.onClick}>
        <h2>{props.city}</h2>
        
        </button>
        
        
      </div>
    </>
  );
}

export default Card;
