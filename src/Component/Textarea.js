import React, { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("");

  const handleonchange = (event) => {
    setText(event.target.value);
  };

  const handleUpclick = () => {
    setText(text.toUpperCase());
    props.showAlert("Convert to Uppercase ", "success");
  };
  const handleLoclick = () => {
    setText(text.toLowerCase());
    props.showAlert("Convert to Lowercase ", "success");
  };
  const Clear = () => {
    setText("");
    props.showAlert("Text cleared ", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied ", "success");
  };

  return (
    <>
      <div className={`text-${props.mode === "dark" ? "white" : "black"}`}>
        <div className="container my-4">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleonchange}
              style={{
                backgroundColor: props.mode === "dark" ? "gray" : "white",
              }}
              id="mybox"
              rows="8"
            ></textarea>
          </div>
          <div>
            <button
              disabled={text.length === 0}
              type="button"
              className="btn btn-primary mx-1 my-1"
              onClick={handleUpclick}
            >
              To Uppercase
            </button>
            <button
              disabled={text.length === 0}
              type="button"
              className="btn btn-primary mx-1 my-1"
              onClick={handleLoclick}
            >
              To lowercase
            </button>

            <button
              disabled={text.length === 0}
              type="button"
              className="btn btn-primary mx-1 my-1"
              onClick={Clear}
            >
              Clear
            </button>
            <button
              disabled={text.length === 0}
              type="button"
              className="btn btn-primary mx-1 my-1"
              onClick={handleCopy}
            >
              Copy Text
            </button>
          </div>
        </div>

        <div className="container">
          <h2>Your text summary</h2>
          <p>
            {
              text.split(/\s/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words, {text.length} charecters
          </p>
          <h4>Preview</h4>
          <p>{text.length > 0 ? text : "Enter your text to preview"}</p>
        </div>
      </div>
    </>
  );
}
