import React from "react";
import { MainButton } from "../MainButton";
import GenericInput from "../GenericInput";
import { Text, Heading } from "@chakra-ui/layout";

export function StageThree({ userId, setCurrentStage }) {
  function handleClick() {
    let answer = document.querySelector(".stage3question1").value;

    fetch(`${process.env.API_URL}/users/${userId}`, {
      method: "PATCH",
      mode: "no-cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(answer),
    }).then(setCurrentStage(4));
  }
  return (
    <section id="stage3section" className="m-5">
      <Heading className="text-4xl font-bold mb-5">
        Record a Video Intro
      </Heading>
      <br />
      <Text>
        Being a good communicator is an essential skill for a modern developer -
        especially in a world of remote working. The video will show us that you
        can confidently express yourself.
      </Text>
      <br />
      <Text>Watch the video below for more information.</Text>
      <br />
      <iframe
        width="480"
        height="270"
        src="https://www.youtube.com/embed/7RE2z1yEymU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <br />
      <p className="text-lg font-bold">Your Questions.</p>
      <Text>
        Please record you answers to the following questions. You should try to
        answer each question within 1 minute.{" "}
      </Text>
      <br />
      <Text>
        1. Tell us about a time you had to work in a team to solve a problem
        (1m){" "}
      </Text>
      <Text>
        2. Tell us about something which is a passion of yours (can be anything,
        from stamps, to TV, to pets, to watching clouds) - why do you like it,
        and what’s the most interesting part? (1m)
      </Text>
      <Text>
        3. Explain something that is complex to us (but that you know well) in a
        simple way (1m)
      </Text>
      <Text>
        4. Why do you want to join the School of Code? Why is it right for you?
        (1m)
      </Text>

      <GenericInput
        m="m-5"
        label="Your video url (please put as unlisted on Youtube)"
        role="stage3question1"
        placeholderText="Link here please..."
      />
      <MainButton
        m="m-5"
        buttonText="Submit"
        onClick={() => {
          handleClick();
          document.querySelector(".stage4").click();
        }}
      />
    </section>
  );
}

//comment
