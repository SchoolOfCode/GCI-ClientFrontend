import React from "react";
import { Heading } from "@chakra-ui/layout";
import PrecourseText from "../PrecourseText";

//this stage is a placeholder for applicants once they have complete the aplication
// it tells them there are no further actions and directs them to the pre-course material

export default function StageFive() {
  return (
    <>
      <Heading className="text-4xl font-bold mb-5">All done for now!</Heading>
      <PrecourseText />
    </>
  );
}
