import React, { useState } from "react";
import { Select } from "@chakra-ui/react";

//Component complete but still researching how to capture the value

export default function Dropdown({
  placeholderText = "select option",
  first = "Option 1",
  second = "Option 2",
  third = "Option 3",
}) {
  const [option, setOption] = useState("");

  const handleSelect=(e)=>{
    console.log(e);
    console.log(e.target.value)
    setOption(e.target.value)
  }
  return (
    <Select
      p="2"
      m="2"
      width="container.sm"
      variant="filled"
      placeholder={placeholderText}
      onSelect={handleSelect}
    >
      <option value={first}>{first}</option>
      <option value={second}>{second}</option>
      <option value={third}>{third}</option>
    </Select>
  );
}
