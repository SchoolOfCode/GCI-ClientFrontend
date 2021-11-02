import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { detectMob } from "../../functions/detectMob";
import { useWindowSize } from "../../hooks/useWindowSize";

//takes in the label for the input as a prop. This can be just a label or a question to the user

export default function GenericTextarea({ label, role, placeholderText="Please type your answer here..." }) {
  //state to hold the value
  const [text, setText] = useState("");

  //function to capture the selected value
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // for mobile interface usage
   const isMobile = navigator.userAgentData.mobile;
   const [width, height] = useWindowSize();
  const [widthBox,setWidthBox] = useState("40%");
   useEffect(() => {
    if(width<=500||isMobile||detectMob()){
     setWidthBox("100%");
    } 
    if(width>500) {
     setWidthBox("40%");
    }},[width])


  return (
    <FormControl isRequired>
      <FormLabel>{label}</FormLabel>
      <Textarea
        type="text"
        placeholder={placeholderText}
        value={text}
        onChange={handleChange}
        className={role}
        size='md'
        width={widthBox}
      />
    </FormControl>
  );
}
