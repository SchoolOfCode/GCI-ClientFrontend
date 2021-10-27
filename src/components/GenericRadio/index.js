import { RadioGroup, Radio, Stack } from "@chakra-ui/react";
import React, { useState } from "react";

export default function GenericRadio({ role, valueOne, valueTwo }) {
  const [value, setValue] = useState("accept");

  return (
    <RadioGroup value={value} id={value} className={role} onChange={setValue}>
      <Stack spacing={5} direction="row">
        <Radio value={valueOne} onChange={()=>setValue(valueOne)}>{valueOne}</Radio>
        <Radio value={valueTwo} onChange={()=>setValue(valueTwo)}>{valueTwo}</Radio>
      </Stack>
    </RadioGroup>
  );
}
