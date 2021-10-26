import React from "react";
import { Text, Link } from "@chakra-ui/react";

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
      <Text>
        You can find the pre-course material here{" "}
        <Link
          color="#4A90E2"
          target="_blank"
          href="https://github.com/SchoolOfCode/bootcamp-pre-course"
        >
          https://github.com/SchoolOfCode/bootcamp-pre-course
        </Link>
      </Text>
    </section>
  );
}
