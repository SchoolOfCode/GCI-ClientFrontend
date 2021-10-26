import { RadioGroup, Radio, Stack } from "@chakra-ui/react";
import React, { useState } from "react";

export default function GenericRadio({ role, valueOne, valueTwo }) {
  const [value, setValue] = useState("accept");

  return (
    <RadioGroup id={role} className={role} onChange={setValue} xxxvalue={value}>
      <Stack spacing={5} direction="row">
        <Radio value={valueOne} onChange={()=>setValue(valueOne)}>{valueOne}</Radio>
        <Radio value={valueTwo} onChange={()=>setValue(valueTwo)}>{valueTwo}</Radio>
      </Stack>
    </RadioGroup>
  );
}
