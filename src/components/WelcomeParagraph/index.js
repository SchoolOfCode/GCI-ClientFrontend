import React from "react";
import { Text } from "@chakra-ui/react";

export function WelcomeParagraph({ name = "there" }) {
  let val = " - Fill out personal details.";
  return (
    <section>
      <Text className="font-semibold text-left">
        Hello {name}! Welcome to your School of Code application, the
        application has several steps:
      </Text>{" "}
      <div className="flex text-left">
        <Text className="font-semibold">Stage 1 </Text>
        <Text>{val}</Text>
      </div>{" "}
      <div className="flex text-left">
        <Text className="font-semibold">Stage 2 </Text>- Create a pixel
        character.
      </div>{" "}
      <div className="flex text-left">
        <Text className="font-semibold">Stage 3 </Text>- Record a video
        interview.
      </div>{" "}
      <div className="flex text-left">
        <Text className="font-semibold">Stage 4 </Text>- Create a game with
        Scratch.
      </div>{" "}
      <Text className="font-semibold text-left">
        More details of each stage will be given when you reach the stage.{" "}
      </Text>
      <Text className="font-semibold text-left">
        You have 4 weeks from now on to complete Stages 1 to 4 - each new stage
        will unlock when you complete the current stage.
      </Text>
    </section>
  );
}
