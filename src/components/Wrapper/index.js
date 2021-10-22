import { Heading, Image, Flex } from "@chakra-ui/react";
import React from "react";

export default function Wrapper({ text="SoC Application Portal", textColor="black", textSize="2xl" }) {
  return (
    <Flex align="center" justify="center" bgColor="white">
      <Image
        display="flex"
        boxSize="150px"
        src="https://i.imgur.com/TsMzmXK.png"
        alt="school of code logo"
      />

      <Heading as="h1" color={textColor} size={textSize} >{text}</Heading>
    </Flex>
  );
}
