import React from "react";
import { MainButton } from "../MainButton";
import GenericInput from "../GenericInput";
import { Text, Heading, Link, Image } from "@chakra-ui/react";
const axios = require("axios").default;

export function StageTwo({ userId, setCurrentStage }) {
  function handleClick() {
    let answer = document.querySelector(".stage2question1").value;
    console.log("stage 2 id", userId);
    //fetch to add the stage 2 answer to the DB

    axios
      .patch(
        `https://gci-backend.herokuapp.com/users/${userId}?column=stage_2`,
        {
          link: JSON.stringify(answer),
        }
      )
      .then(() => {
        axios.patch(
          `https://gci-backend.herokuapp.com/users/${userId}?column=current_stage`,
          { stage: 3 }
        );
        setCurrentStage(3);
      });
  }

  //   fetch(`${process.env.API_URL}/users/${userId}`, {
  //     method: "PATCH",
  //     mode: "no-cors",
  //     cache: "no-cache",
  //     credentials: "same-origin",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     redirect: "follow",
  //     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //     body: JSON.stringify(answer),
  //   }).then(setCurrentStage(3));
  // }

  return (
    <section id="stage2section" className="m-5">
      <Heading className="text-4xl font-bold mb-5">Character Creation</Heading>
      <br></br>
      <Text>
        This isn't your standard application process because this isn't your
        standard course!
      </Text>
      <Text>
        Get your first taste of coding with our School of Code Avatar Challenge.
      </Text>
      <Text>
        This task gently introduces you to HTML and CSS - show us how creative
        you can be with a little coding knowledge!
      </Text>
      <div>
        <div className="m-5">
          <Text>
            Step 1 -Visit{" "}
            <Link
              color="#4A90E2"
              target="_blank"
              href="http://application.schoolofcode.io"
            >
              https://application.schoolofcode.io
            </Link>{" "}
            - we recommend using a laptop/desktop computer with Google's Chrome
            browser.
          </Text>
          <Text>
            Step 2 - Register an account - please use the same email address you
            applied with if possible.
          </Text>
        </div>
        <Text>
          Once you've registered and are logged in to the home page, click on
          your Character Building room, click “Join” (see images below), and
          start building your very own cute little pixel character with code!
        </Text>
        <Text>Click on the room here...</Text>
        <Image
          className="max-w-lg"
          src="https://lh5.googleusercontent.com/GkFCBCaraux1R1ndd9TMzTQ9PJcfAnsdsjNXqz0i2lep7o8Or2x39YGbq8V1BIA3spthHxMWqlsS9zZVRcomU5WrnTItNH3cHM3yjSz6vX-OK3x2sjqV454NIE-HaGf_=w1600"
          alt="instruction describing joining a room"
        />
        <Text>And then click join to start coding!</Text>
        <img
          className="max-w-lg"
          src="https://lh4.googleusercontent.com/iiXyoTuzKTr44N_HpH2f9Tl_iVb05pptwxchERSwGC6_MhAeGbKIpOUgO97sSc_zocuqhiM9TmZQq8JLSZV3lpBwuDyHG2HVBwf8naqZ1Uw60G0mcQ_vm6FSlpBhDIix=w1600"
          alt="instruction describing joining a room"
        />
        <Text>
          Step 3 - You'll be taken to a coding "game" where you'll be taught the
          basics of HTML and CSS through making a character.
        </Text>{" "}
        <Text>
          You'll find instructions on the left of the screen (you can click the
          headings to reveal the sections).
        </Text>
      </div>
      <br />
      <Text>
        You can create a pixel version of you, a friend, someone famous, or it
        could just be the random result of some creative juices flowing.
      </Text>{" "}
      <Text>
        We don't mind, but give it a go. Once you are done, save the character
        (by pressing save and choosing a name for it).
      </Text>{" "}
      <Text>
        You can create more than one if you’d like, but only one character is
        required for this stage of the application.{" "}
      </Text>
      <Text>
        You'll also be able to play a game with your character as a special
        surprise... let us know what you think!
      </Text>
      <GenericInput
        m="m-5"
        label="Please paste your username (from application.schoolofcode.io) here"
        role="stage2question1"
        placeholderText="Username..."
      />
      <MainButton m="m-5" buttonText="Submit" onClick={handleClick} />
    </section>
  );
}
