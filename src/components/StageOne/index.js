import React, { useState } from "react";
import GenericInput from "../GenericInput";
import Dropdown from "../Dropdown";
import { Radio, RadioGroup, Image, Box } from "@chakra-ui/react";
import "./index.css";

export default function StageOne() {
  const [value, setValue] = useState("");

  return (
    <div>
      <h2 className="text-xl font-bold">
        Please complete the below application form
      </h2>
      <RadioGroup onChange={setValue} value={value}>
        <label className="form">
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
      <br></br>
      <GenericInput
        label="What is your phone number? *"
        placeholderText="12345 678 912"
      />
      <br></br>
      <GenericInput
        label="What is your date of birth (format dd/mm/yyyy)? *"
        placeholderText="dd/mm/yyyy"
      />
      <br></br>
      <Dropdown
        label="What is your gender? *"
        placeholderText="Please make your selection"
        first="Male"
        second="Female"
        third="Non-binary"
        fourth="Prefer not to say"
        fifth="Other"
      />
      <br></br>
      <GenericInput
        label="What is your current Post Code? *"
        placeholderText="Type your answer here..."
      />
      <br></br>
      <Box className="box">
        <Dropdown
          label="Which region are your applying for? *"
          placeholderText="Pick a region from the School of Code Bootcamp areas listed below"
          first="North West"
          second="West Midlands"
          third="East Midlands"
          fourth="London"
          fifth="South East"
          sixth="Other"
        />
        <Image
          boxSize="500px"
          objectFit="cover"
          src="https://images.typeform.com/images/BCHhJYBU6Vg8/image/default-firstframe.png"
          alt="regional map of England"
        />
        <br></br>
      </Box>
      <Dropdown
        label="What best describes your current situation? *"
        placeholderText="Please make your selection..."
        first="Self-employed, but looking to change career"
        second="unemployed and looking to start a career"
        third="employed but looking to change career"
        fourth="finishing college/school and looking to start a career"
        fifth="graduating university and looking to start a career"
        sixth="leaving military service and looking for a new career"
        seventh="Other"
      />
      <br></br>
      <GenericInput
        label="Why do you want to join the School of Code? *"
        placeholderText="Type your answer here..."
      />
      <br></br>
      <RadioGroup onChange={setValue} value={value}>
        <label className="form">
          <h2>
            Please read this Privacy Notice and Q&A, which indicate how data is
            used as part of our process. After reading those documents (or
            alternatively the text below), please indicate that you understand
            and accept them by clicking "I accept" at the bottom of this page. *
          </h2>

          <ul>
            <li>
              https://drive.google.com/file/d/1fwoD7ZKVFPHbQtmdSoYyzqHsxBb1EPpa/view
            </li>
            <li>
              https://drive.google.com/file/d/1oRTCXXsOX0jGIaH4bL_S0vQClM5NH4iG/view
            </li>
          </ul>
        </label>
        <Radio value="accept">I accept</Radio>
        <Radio value="decline">I don't accept</Radio>
      </RadioGroup>
    </div>
  );
}
