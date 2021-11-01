import React, { useState,useEffect } from "react";
import { Select, FormControl, FormLabel } from "@chakra-ui/react";
import { useWindowSize } from "../../hooks/useWindowSize";

//takes in up to 6 options and placeholder text and props.
// if more options are needed, then add more props here.

export default function Dropdown({
  label = "dropdown",
  role, 
  placeholderText = "select option",
  first = "Option 1",
  second = "",
  third = "",
  fourth = "",
  fifth = "",
  sixth = "",
  seventh = "",
  eighth = "",
  ninth = "",
  tenth = "",
  eleventh = "",
  twelfth = "",
  thirteenth = "",
  fourteenth = "",
  fifteenth = "",
  sixteenth = "",
  seventeenth = "",
}) {
  //state to hold the value
  const [option, setOption] = useState("");

  //function to capture the selected value
  const handleSelect = (e) => {
    setOption(e.target.value);
  };

   // for mobile interface usage
   const [width, height] = useWindowSize();
   const [widthBox,setWidthBox] = useState("40%");
    useEffect(() => {
     if(width<=500){
      setWidthBox("100%");
     } 
     if(width>500) {
      setWidthBox("40%");
     }},[width])

  let array = [
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninth,
    tenth,
    eleventh,
    twelfth,
    thirteenth,
    fourteenth,
    fifteenth,
    sixteenth,
    seventeenth,
  ];
  let list = [];
  array.forEach(function (e) {
    if (e.length > 1) {
      list.push({ label: e, value: e });
    }
  });

 
  return (
    <FormControl isRequired>
      <FormLabel>{label}</FormLabel>
      <Select
        p="2"
        m="2"
        width={widthBox}
        variant="filled"
        placeholder={placeholderText}
        onChange={handleSelect}
        className={role}
        value={option}
      >
        {list.map((i) => {
          return <option value={i.value}>{i.value}</option>;
        })}
      </Select>
    </FormControl>
  );
}
