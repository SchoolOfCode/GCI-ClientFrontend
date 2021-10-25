import React from "react";
import { MainButton } from "../MainButton";
import { WelcomeParagraph } from "../WelcomeParagraph";

export function Welcome() {
  return (
    <section>
      <WelcomeParagraph />
      <br />
      <MainButton
        onClick={() => {
          //   document.getElementById("stage-1").click();
          alert("hello");
        }}
        buttonText="To Stage 1"
      ></MainButton>
    </section>
  );
}
