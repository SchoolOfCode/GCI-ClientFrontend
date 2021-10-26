import "./index.css";
import React from "react";

const marked = require("marked");

export function Learn() {
  fetch(
    "https://raw.githubusercontent.com/SchoolOfCode/bootcamp-pre-course/main/README.md"
  )
    .then((response) => response.text())
    .then((result) => {
      document.getElementById("learncontent").innerHTML = marked(result);
    });
  return <div id="learncontent" className="m-5"></div>;
}
