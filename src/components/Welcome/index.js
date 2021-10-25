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
          document.querySelector(".stage1").click();
        }}
        buttonText="To Stage 1"
      ></MainButton>
    </section>
  );
}
