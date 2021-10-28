import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Markdown from "markdown-to-jsx";
// import "./index.css";
const marked = require("marked");

export function Learn() {
  const [text, setText] = useState("");
  fetch(
    "https://raw.githubusercontent.com/SchoolOfCode/bootcamp-pre-course/main/README.md"
  )
    .then((response) => response.text())
    .then((result) => {
      setText(result);
    });
  return <Markdown className="text-green-600">{text}</Markdown>;
}
