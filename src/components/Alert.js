import React from "react";

const Alert = (props) => {
  
    const Capital=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1).toLowerCase();
    }

    return (
      <div style={{height:'50px'}}>
    {props.alert && 
      <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{Capital(props.alert.type)}</strong>: {props.alert.msg}
      </div>}
      </div>
    
  );
};

export default Alert;
