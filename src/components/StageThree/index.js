import React from "react";
import { MainButton } from "../MainButton";
import GenericInput from "../GenericInput";

export function StageThree() {
  return (
    <section id="stage2section" className="m-5">
      <p className="text-xl font-bold mb-5">Stage 3 - Character creation!</p>
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
      <p>
        {" "}
        Step 1 - Visit{" "}
        <a className="text-blue-500" href="http://application.schoolofcode.io">
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
        Once you've registered and are logged in to the home page, click on your
        Character Building room, click “Join” (see images below), and start
        building your very own cute little pixel character with code!
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
