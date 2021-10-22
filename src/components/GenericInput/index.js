import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

export default function GenericInput({ label }) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input type="text" placeholder="text" />
    </FormControl>
  );
}
