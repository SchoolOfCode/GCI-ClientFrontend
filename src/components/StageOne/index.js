import React, { useState } from "react";
import GenericInput from "../GenericInput";
import DropDown from "../Dropdown";
import { Radio, RadioGroup } from "@chakra-ui/react";
import "./index.css";

export default function StageOne() {
  const [value, setValue] = useState("");

  return (
    <div>
      <RadioGroup onChange={setValue} value={value}>
        <label>
          <h2>
            The next bootcamp starts on 15th November 2021. To be eligible you
            must: *
          </h2>

          <ul>
            <li>
              be able to attend remote lectures 9am-5pm on Monday-Friday for the
              duration of the 16 week course
            </li>
            <li>have access to the internet for that time</li>
            <li>
              live in, and be able to work in, the North West, East Midlands,
              West Midlands, London, or the South East of England
            </li>
            <li>be 19+ years of age</li>
            <li>be eligible to live and work in the UK</li>
            <li>be ready to start a new career in tech after the bootcamp</li>
          </ul>
        </label>
        <Radio value="accept">I accept</Radio>
        <Radio value="decline">I don't accept</Radio>
      </RadioGroup>
      <br></br>
      <GenericInput
        label="What is your first name? *"
        placeholderText="Type your answer here..."
      />
      <br></br>
      <GenericInput
        label="What is your last name? *"
        placeholderText="Type your answer here..."
      />
      <br></br>
      <GenericInput
        label="What is your email address? *"
        placeholderText="name@example.com"
      />
    </div>
  );
}
