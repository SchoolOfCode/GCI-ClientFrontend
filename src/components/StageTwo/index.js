import React from "react";
import { MainButton } from "../MainButton";
import GenericInput from "../GenericInput";

export function StageTwo() {
  return (
    <section id="stage2section" className="m-5">
      <p className="text-xl font-bold mb-5">Stage 2 - Character creation!</p>
      <p>
        This isn't your standard application process because this isn't your
        standard course!
      </p>
      <p>
        Get your first taste of coding with our School of Code Avatar Challenge.{" "}
      </p>
      <p>
        This task gently introduces you to HTML and CSS - show us how creative
        you can be with a little coding knowledge!{" "}
      </p>
      <div className="m-5">
        <p>
          {" "}
          Step 1 -Visit{" "}
          <a
            className="text-blue-500"
            href="http://application.schoolofcode.io"
            target="_blank"
          >
            https://application.schoolofcode.io
          </a>{" "}
          - we recommend using a laptop/desktop computer with Google's Chrome
          browser.
        </p>
        <p>
          Step 2 - Register an account - please use the same email address you
          applied with if possible.{" "}
        </p>
        <p>
          Once you've registered and are logged in to the home page, click on
          your Character Building room, click “Join” (see images below), and
          start building your very own cute little pixel character with code!
        </p>
        <p>Click on the room here...</p>
        <img
          className="max-w-lg"
          src="https://lh5.googleusercontent.com/GkFCBCaraux1R1ndd9TMzTQ9PJcfAnsdsjNXqz0i2lep7o8Or2x39YGbq8V1BIA3spthHxMWqlsS9zZVRcomU5WrnTItNH3cHM3yjSz6vX-OK3x2sjqV454NIE-HaGf_=w1600"
          alt="image describing joining a room"
        />
        <p>And then click join to start coding!</p>
        <img
          className="max-w-lg"
          src="https://lh4.googleusercontent.com/iiXyoTuzKTr44N_HpH2f9Tl_iVb05pptwxchERSwGC6_MhAeGbKIpOUgO97sSc_zocuqhiM9TmZQq8JLSZV3lpBwuDyHG2HVBwf8naqZ1Uw60G0mcQ_vm6FSlpBhDIix=w1600"
          alt="image describing joining a room"
        />
        <p>
          Step 3 - You'll be taken to a coding "game" where you'll be taught the
          basics of HTML and CSS through making a character.
        </p>{" "}
        <p>
          You'll find instructions on the left of the screen (you can click the
          headings to reveal the sections).
        </p>
      </div>
      <br />
      <p>
        You can create a pixel version of you, a friend, someone famous, or it
        could just be the random result of some creative juices flowing.
      </p>{" "}
      <p>
        We don't mind, but give it a go. Once you are done, save the character
        (by pressing save and choosing a name for it).
      </p>{" "}
      <p>
        You can create more than one if you’d like, but only one character is
        required for this stage of the application.{" "}
      </p>
      <p>
        You'll also be able to play a game with your character as a special
        surprise... let us know what you think!
      </p>
      <GenericInput
        m="m-5"
        label="Character link here please..."
        role="stage2text1"
        placeholderText="Link here please..."
      />
      <MainButton
        m="m-5"
        buttonText="To Stage 3"
        onClick={() => {
          alert(
            document.querySelector(".stage2text1").value +
              " has been sent to the cloud!"
          ); //
          document.querySelector(".stage3").click();
        }}
      />
    </section>
  );
}
