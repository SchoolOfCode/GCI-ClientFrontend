import React, { useState } from "react";
import { Select, FormControl, FormLabel } from "@chakra-ui/react";

//takes in up to 6 options and placeholder text and props.
// if more options are needed, then add more props here. 

export default function Dropdown({
  label = "dropdown",
  placeholderText = "select option",
  first = "Option 1",
  second = "Option 2",
  third = "Option 3",
  fourth = "Option 4",
  fifth = "Option 5",
  sixth = "",
}) {
  //state to hold the value
  const [option, setOption] = useState("");

  //function to capture the selected value
  const handleSelect = (e) => {
    setOption(e.target.value);
    
    return option;
  };

  let array = [first, second, third, fourth, fifth, sixth];
  let list = [];
  array.forEach(function (e) {
    if (e.length > 1) {
      list.push({ label: e, value: e });
    }
  });
  
  console.log("this is the option selected", option);
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Select
        p="2"
        m="2"
        width="container.sm"
        variant="filled"
        placeholder={placeholderText}
        onChange={handleSelect}
      >
        {list.map((i) => {
          return <option value={i.value}>{i.value}</option>;
        })}
      </Select>
    </FormControl>
  );
}
