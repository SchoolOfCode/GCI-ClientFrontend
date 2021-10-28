import React from "react";
import { Text, Heading } from "@chakra-ui/react";

export function WelcomeParagraph({ name = "there" }) {
  return (
    <section>
      <Heading className="text-4xl font-bold mb-5">
        Hello {name}! Welcome to your School of Code application, the
        application has several steps:
      </Heading>
      <br></br>
      <Text fontSize="lg" className="font-semibold">
        Stage 1
      </Text>
      <Text>Fill out application form & demographics survey.</Text>
      <br></br>
      <Text fontSize="lg" className="font-semibold">
        Stage 2
      </Text>
      <Text>Create a pixel character.</Text>
      <br></br>
      <Text fontSize="lg" className="font-semibold">
        Stage 3
      </Text>
      <Text>Record a video interview.</Text>
      <br></br>
      <Text fontSize="lg" className="font-semibold">
        Stage 4
      </Text>
      <Text>Create a game with Scratch.</Text>
      <br></br>
      <Text className="font-semibold">
        More details of each stage will be given when you reach the stage.{" "}
      </Text>
      <Text className="font-semibold">
        You have 4 weeks from now on to complete Stages 1 to 4 - each new stage
        will unlock when you complete the current stage.
      </Text>
    </section>
  );
}
