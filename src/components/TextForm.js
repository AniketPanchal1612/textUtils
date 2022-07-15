import React, { useState } from "react";
// import cryptojs from "crypto-js";
export const TextForm = (props) => {
  

  const handleUpClick = () => {
    // console.log("Uppercase ws clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");

  };
  const handleLcClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");

  };

  const handleCopy = () => {
    // var text = document.getElementById("mybox");
    // text.select();
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied","success");

  };
  const handleExtra = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space has been removed","success");

  };

  const handleCleartext = () => {
    setText("");
    props.showAlert("Text Clear!","success");

  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1 style={{color: props.mode==='light'? 'black' :'white'}}>{props.heading}</h1>

        <textarea
          className="form-control"
          onChange={handleOnChange}
          id="mybox"
          value={text}
          rows="4"
          placeholder="Enter text here"
          style={{backgroundColor: props.mode==='dark'? '#13466e' :'white' ,color:props.mode==='light'? 'black' :'white'}}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>

      <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleLcClick}>
        Convert to Lowercase
      </button>

      <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleCopy}>
        Copy Text
      </button>

      <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleExtra}>
        Remove Extra-Space
      </button>
      <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleCleartext}>
        Clear Text
      </button>

      <div className="container my-3" style={{color: props.mode==='light'? 'black' :'white'}}>
        <h2>Your Text Summary</h2>
        <p>
          <b>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length}</b> words and <b>{text.length}</b>{" "}
          characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <br />
        <h2>Preview</h2>
        <p>{text.length>0 ? text: "Nothing to Preview"}</p>
      </div>
    </>
  );
};
