import React, { useState, useEffect } from "react";
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
import PrecourseText from "../PrecourseText";
import {useWindowSize} from "../../hooks/useWindowSize";
import { detectMob } from "../../functions/detectMob";
const axios = require("axios").default;

export default function StageFour({ userId, setCurrentStage }) {
  const [render, setRender] = useState(false);

  //handleclick function makes a patch request to update stage_4 in our table with the applicant's answer

  function handleClick() {
    let answer = document.querySelector(".stage4question1").value;

    axios
      .patch(
        `https://gci-backend.herokuapp.com/users/${userId}?column=stage_4`,
        {
          link: JSON.stringify(answer),
        }
      )
      .then(() => {
        // this patch request then updates their current stage to 5
        axios.patch(
          `https://gci-backend.herokuapp.com/users/${userId}?column=current_stage`,
          { stage: 5 }
        );
        setCurrentStage(5);
        setRender(true);
      });
  }

   // for mobile interface usage
   const isMobile = navigator.userAgentData.mobile;
   const [width, height] = useWindowSize();
 const [vWidth,setvWidth] = useState("480");
 const [vHeight,setvHeight] = useState("270");
  useEffect(() => {
   if(width<=500||isMobile||detectMob()){
    setvWidth("240");
    setvHeight("135");
   } 
   if(width>500) {
     setvWidth("480");
     setvHeight("270");
   }},[width])

  return (
    <section className="m-5">
      <Heading className="text-4xl font-bold mb-5">CS50 & Scratch</Heading>
      <br></br>
      <Text>
        CS50 is Harvard's free online course which serves as a great
        introduction to computer science and you can watch all the lessons on
        YouTube. As part of our application process, we would like you to watch
        the first lecture, lecture 0 (you’ll see why it’s lecture 0 and not 1 in
        due course).
      </Text>
      <br></br>
      <iframe
        width={vWidth}
        height={vHeight}
        src="https://www.youtube.com/embed/YoXxevp1WRQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <br></br>
      <Text>
        Once you have watched the lecture, your task is to make a project using
        Scratch, a visual coding language which allows you to engage with
        programming concepts without needing to know the syntax of coding.
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
        role="stage4question1"
        label="Scratch Task URL (make sure it is public!)"
        placeholderText="Please paste your link here..."
      />
      <br></br>
      <MainButton buttonText="Submit" onClick={handleClick} />
      <br></br>
      {render ? <PrecourseText /> : null}
    </section>
  );
}
