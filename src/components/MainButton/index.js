import { Button } from "@chakra-ui/react";
import React from "react";

// button to be used for general needs
export function MainButton({
  onClick,
  buttonColor = "#4A90E2",
  textColor = "white",
  buttonText = "CLICK ME!",
}) {
  return (
    <Button
      onClick={onClick}
      bg={buttonColor}
      color={textColor}
      size="md"
      _hover={{ bg: "#000818" }}
      _active={{
        transform: "scale(0.75)",
      }}
    >
      {buttonText}
    </Button>
  );
}
