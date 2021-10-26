import React from "react";
import { MainButton } from "../MainButton";
import { WelcomeParagraph } from "../WelcomeParagraph";

export function Welcome() {
  return (
    <section>
      <WelcomeParagraph />
      <br />
      <MainButton
        m="ml-10"
        onClick={() => {
          document.querySelector(".stage1").click();
        }}
        buttonText="Start!"
      ></MainButton>
    </section>
  );
}
