import React, { useState } from "react";
import {
  Heading,
  Text,
  Link,
  UnorderedList,
  ListItem,
  Divider,
} from "@chakra-ui/react";
import GenericInput from "../GenericInput";
import { MainButton } from "../MainButton";

export default function StageFour() {
  function handleClick() {
    return (
      <section>
        <Text>
          Thank you for completing your application, there are no further
          actions required. Your application will be assessed and we will let
          you know if you have been successful as soon as possible.
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

  return (
    <section>
      <Heading>CS50 Stage</Heading>
      <br></br>
      <Text>
        CS50 is Harvard's free online course which serves as a great
        introduction to computer science and you can watch all the lessons on
        YouTube. As part of our application process, we would like you to watch
        the first lecture, lecture 0 (you’ll see why it’s lecture 0 and not 1 in
        due course).
      </Text>
      <br></br>
      <Text>
        Once you have watched the lecture{" "}
        <Link
          color="#4A90E2"
          target="_blank"
          href="https://www.youtube.com/watch?v=YoXxevp1WRQ"
        >
          https://www.youtube.com/watch?v=YoXxevp1WRQ
        </Link>
        , your task is to make a project using Scratch, a visual coding language
        which allows you to engage with programming concepts without needing to
        know the syntax of coding.
      </Text>
      <br></br>
      <Text>
        For the Flexible Bootcamp, you will need to be able to actively engage
        with video content in order to succeed, and this task will demonstrate
        that you can do that.
      </Text>
      <br></br>
      <Text>
        After watching the lecture we would like you to create a Scratch project
        of your choice that fulfils these standard CS50 requirements:
      </Text>
      <br></br>
      <UnorderedList>
        <ListItem>Your project must be a playable game.</ListItem>
        <ListItem>
          Your project must take the name of the user as input.
        </ListItem>
        <ListItem>Your project must track the score.</ListItem>
        <ListItem>
          Your project must have at least two sprites, at least one of which
          must resemble something other than a cat.
        </ListItem>
        <ListItem>
          Your project must use at least one condition, one loop, and one
          variable.
        </ListItem>
        <ListItem>Your project must use at least one sound.</ListItem>
        <ListItem>
          Your project should be more complex than most of those demonstrated in
          the lecture.
        </ListItem>
      </UnorderedList>
      <br></br>
      <Text>
        You can find scratch here{" "}
        <Link color="#4A90E2" target="_blank" href="https://scratch.mit.edu/">
          https://scratch.mit.edu/
        </Link>
      </Text>
      <br></br>
      <Text>
        Once you have completed your scratch task, make sure that it is set to
        public, and paste the URL of the project below.
      </Text>
      <br></br>
      <Divider />
      <br></br>
      <GenericInput
        label="Scratch Task URL (make sure it is public!)"
        placeholderText="Please paste your link here..."
      />
      <br></br>
      <MainButton buttonText="Submit" onClike={handleClick} />
    </section>
  );
}
