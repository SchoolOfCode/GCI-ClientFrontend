import React, { useState } from "react";
import { Select } from "@chakra-ui/react";

//takes in threee options and placeholder text and props. Can update number of options
// to suit your needs

export default function Dropdown({
  placeholderText = "select option",
  first = "Option 1",
  second = "Option 2",
  third = "Option 3",
}) {
  //state to hold the value
  const [option, setOption] = useState("");

  //function to capture the selected value
  const handleSelect = (e) => {
    setOption(e.target.value);
    return option;
  };

  return (
    <Select
      p="2"
      m="2"
      width="container.sm"
      variant="filled"
      placeholder={placeholderText}
      onChange={handleSelect}
    >
      <option value={first}>{first}</option>
      <option value={second}>{second}</option>
      <option value={third}>{third}</option>
    </Select>
  );
}
