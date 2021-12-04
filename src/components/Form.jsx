import React, { useState } from "react";

const Form = ({ mode, showAlert }) => {
  const [text, setText] = useState("");
  const [copy, setCopy] = useState("copy");
  const handleUpClick = () => {
    setText(text.toUpperCase());
    showAlert("Text copied!", "success");
  };
  const handleCopy = () => {
    // alert("copy");
    let textt = document.getElementById("myBox");
    textt.select();
    navigator.clipboard.writeText(textt.value);
    setCopy("copy text");
    showAlert("Text copied!", "success");
  };

  const handleExtraSpaces = () => {
    let newTexttt = text.split(/[ ]+/);
    setText(newTexttt.join(" "));
    showAlert("Text copied!", "success");
  };
  return (
    <div className="container">
      <h2 className="my-2">Enter the Text </h2>
      <div className="mb-3">
        <textarea
          style={{
            backgroundColor: mode === "dark" ? "transparent" : "white",
            color: mode === "dark" ? "white" : "black",
          }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control"
          placeholder="Enter text..."
          id="myBox"
          rows="6"
        ></textarea>
      </div>
      <button onClick={handleUpClick} className="btn-primary btn">
        Convert to upercase
      </button>
      <button
        onClick={() => setText(text.toLowerCase())}
        className="ms-2 btn-primary btn"
      >
        Convert to lowercase
      </button>
      <button
        title={copy}
        onClick={handleCopy}
        className="ms-2 btn-primary btn"
      >
        Copy to clipboard
      </button>
      <button onClick={handleExtraSpaces} className="ms-2 btn-primary btn">
        Remove Extra Spaces
      </button>
      <button onClick={() => setText("")} className="ms-2 btn-primary btn">
        Clear
      </button>
      <h2 className="mt-4">Your Text Summary</h2>
      <p>
        {text.split(" ").length} words and {text.length} characters
      </p>
      <p> {0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter something in the textbox"}</p>
    </div>
  );
};

export default Form;
