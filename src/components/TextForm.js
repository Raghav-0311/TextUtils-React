import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const handleRevClick = () => {
    let newText = text.split(" ").reverse().join(" ");
    setText(newText);
  };

  const handleClearClick = () => {
    const newText = "";
    setText(newText);
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleStartCase = () => {
    let newText = text.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    );
    setText(newText);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#212529" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#212529",
              color: props.mode === "light" ? "#212529" : "white",
            }}
            placeholder="Enter your text here"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleStartCase}>
          Convert to StartCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary mx-1" onClick={handleRevClick}>
          Reverse Words
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear text
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "light" ? "#212529" : "white" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter some text in the above text area to preview it here !!"}
        </p>
      </div>
    </>
  );
}

export default TextForm;
