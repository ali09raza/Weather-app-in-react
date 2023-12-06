import React from "react";
import './ListItems.scss'
const Listitems=(props)=>{
    return(
        <div className="wind">
          <p>{Math.round(props.value)}%</p>
          <p>{props.name}</p>
        </div>

    )
};
export default Listitems;