import React from "react";
import { Text } from "@chakra-ui/react";

export function Welcome({ name = "there" }) {
  let val = " - Fill out personal details.";
  return (
    <section>
      <Text className="font-semibold">
        Hello {name}! Welcome to your School of Code application, the
        application has several steps:
      </Text>{" "}
      <div className="flex">
        <Text className="font-semibold">Stage 1 </Text>
        <Text>{val}</Text>
      </div>{" "}
      <div className="flex">
        <Text className="font-semibold">Stage 2 </Text>- Create a pixel
        character.
      </div>{" "}
      <div className="flex">
        <Text className="font-semibold">Stage 3 </Text>- Record a video
        interview.
      </div>{" "}
      <div className="flex">
        <Text className="font-semibold">Stage 4 </Text>- Create a game with
        Scratch.
      </div>{" "}
      <Text className="font-semibold">
        More details of each stage will be given when you reach the stage. You
        have 4 weeks from now on to complete Stages 1 to 4 - each new stage will
        unlock when you complete the current stage.
      </Text>
    </section>
  );
}
