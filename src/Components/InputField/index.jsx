import React from "react";
const InputField=({onChange})=>{
    return(
        <input  type="text" autoFocus="true" placeholder="Enter city name" onChange={onChange}/>

    );

};
export default InputField;