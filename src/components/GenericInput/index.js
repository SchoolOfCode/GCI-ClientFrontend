import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";

//takes in the label for the input as a prop. This can be just a label or a question to the user

export default function GenericInput({ label, role }) {
  //state to hold the value
  const [text, setText] = useState("");

  //function to capture the selected value
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        type="text"
        placeholder="text"
        value={text}
        onChange={handleChange}
        className={role}
      />
    </FormControl>
  );
}
