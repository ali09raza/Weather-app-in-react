import React from "react";
const InputField=({onChange})=>{
    return(
        <input  type="text" placeholder="Enter city name" onChange={onChange}/>

    );

};
export default InputField;