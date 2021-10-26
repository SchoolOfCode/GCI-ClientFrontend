import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

//takes in the label for the input as a prop. This can be just a label or a question to the user

export default function GenericTextarea({ label, role, placeholderText="Please type your answer here..." }) {
  //state to hold the value
  const [text, setText] = useState("");

  //function to capture the selected value
  const handleChange = (e) => {
    setText(e.target.value);
  };

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
        width="500px"
      />
    </FormControl>
  );
}