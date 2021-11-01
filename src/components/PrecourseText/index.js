import React from "react";
import { Text } from "@chakra-ui/react";
import { MainButton } from "../MainButton";

export default function PrecourseText() {
  return (
    <section>
      <br></br>
      <Text color="#000818" fontWeight="bold">
        Thank you for completing your application!
      </Text>{" "}
      <br></br>
      <Text>
        {" "}
        There are no further actions required. Your application will be assessed
        and we will let you know if you have been successful as soon as
        possible.
      </Text>
      <br></br>
      <Text>
        If you are successful you will be required to complete some pre-course
        material. You are free to start them now, but please note by doing so
        you are not guaranteed a place on the course.
      </Text>
      <br></br>
      <Text>
        Even if you are unsuccessful in this application, studying the
        pre-course material will be helpful for future applications to the
        School of Code and to your overall journey into tech!
      </Text>
      <br></br>
      <MainButton
        // m="m-5"
        buttonText="Go to pre-course"
        onClick={() => {
          document.querySelector(".learn").click();
        }}
      />
    </section>
  );
}
