import React from "react";
import { MainButton } from "../MainButton";
import GenericInput from "../GenericInput";

export function StageThree() {
  return (
    <section id="stage3section" className="m-5">
      <p className="text-xl font-bold mb-5">Stage 3 - Video Intro Stage!</p>
      <br />
      <p>
        Being a good communicator is an essential skill for a modern developer -
        especially in a world of remote working. The video will show us that you
        can confidently express yourself.
      </p>
      <br />
      <p>Watch the video below for more information.</p>
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
      <p>
        Please record you answers to the following questions. You should try to
        answer each question within 1 minute.{" "}
      </p>
      <br />
      <p>
        1. Tell us about a time you had to work in a team to solve a problem
        (1m){" "}
      </p>
      <p>
        2. Tell us about something which is a passion of yours (can be anything,
        from stamps, to TV, to pets, to watching clouds) - why do you like it,
        and what’s the most interesting part? (1m)
      </p>
      <p>
        3. Explain something that is complex to us (but that you know well) in a
        simple way (1m)
      </p>
      <p>
        4. Why do you want to join the School of Code? Why is it right for you?
        (1m)
      </p>

      <GenericInput
        m="m-5"
        label="Your video url (please put as unlisted on Youtube)"
        role="stage3text1"
        placeholderText="Link here please..."
      />
      <MainButton
        m="m-5"
        buttonText="Submit"
        onClick={() => {
          alert(
            document.querySelector(".stage3text1").value +
              " has been sent to the cloud!"
          ); //
          document.querySelector(".stage4").click();
        }}
      />
    </section>
  );
}
