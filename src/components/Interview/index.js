import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import { InlineWidget } from "react-calendly";

export default function Interview() {
  return (
    <section className="m-5">
      <Heading className="text-xl font-bold mb-5">Interview Stage</Heading>
      <br></br>
      <Text>
        Thanks for completing all the application stages for our bootcamp.
        Fantastic work! We’re delighted to be able to invite you to a 1:1 Zoom
        call to get to know you a little better.
      </Text>
      <Text>
        We’ll be asking you about the application process so far as well as a
        few questions to help us find out if the course is right for you. The
        call will take no longer that 30 minutes.
      </Text>
      <br></br>

      <InlineWidget url="https://calendly.com/soc_gci/bootcamp-interviews-cohort-x" />
      <br></br>
      <Text>
        It would really help us if you could book your interview at the earliest
        possible time that is convenient for you.
      </Text>
      <br></br>
    </section>
  );
}
