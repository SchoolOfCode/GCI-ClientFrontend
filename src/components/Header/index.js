import { Heading, Image, Flex } from "@chakra-ui/react";
import React from "react";
import "./index.css";

export default function Header({
  text = "SoC Application Portal",
  textColor = "white",
  textSize = "2xl",
}) {
  return (
    <Flex align="center" justify="center" bgColor="#000818">
      <Image
        className="m-5"
        display="flex"
        boxSize="120px"
        src="https://i.imgur.com/TsMzmXK.png"
        alt="school of code logo"
      />

      <Heading as="h1" color={textColor} size={textSize}>
        {text}
      </Heading>
    </Flex>
  );
}
