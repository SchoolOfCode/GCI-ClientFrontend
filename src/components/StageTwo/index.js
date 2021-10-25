import React from "react";
import { MainButton } from "../MainButton";
import GenericInput from "../GenericInput";

export function StageTwo() {
  return (
    <section id="stage2section">
      <h4>
        This isn't your standard application process because this isn't your
        standard course!
      </h4>
      <h4>
        This isn't your standard application process because this isn't your
        standard course!
      </h4>
      <h4>
        This isn't your standard application process because this isn't your
        standard course!
      </h4>
      <h4>
        This isn't your standard application process because this isn't your
        standard course!
      </h4>
      <h4>
        This isn't your standard application process because this isn't your
        standard course!
      </h4>
      <GenericInput label="Character link here please..." role="stage2text1" />
      <MainButton
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
