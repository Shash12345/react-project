import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //  console.log("uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!","success");
  };
  const handleloClick = () => {
    //  console.log("uppercase was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!","success");
  };
  const handleclearClick = () => {
    //  console.log("uppercase was clicked"+ text);
    let newText = " ";
    setText(newText);
    props.showAlert("text has been cleared!","success");
  };
  const handlecopy = () => {
    // console.log("I am copy");
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text has been copied!","success");
  };
  const removeextraspaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
   props.showAlert("xtraspace has been removed!","success");
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState(" ");
  // text="new text";//wrong way to change the state;
  //setText("new text")//correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#063270" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/*<label for="mybox" class="form-label">Example textarea</label>*/}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#063270"
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>
          convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>
          clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>
          copy text
        </button>
        <button className="btn btn-primary mx-2" onClick={removeextraspaces}>
          remxtraspace
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#063270" }}
      >
        <h2> Your text here</h2>
        <p>
          {text.split("").length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length}minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
