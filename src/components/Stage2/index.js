import React from "react";
import { MainButton } from "../MainButton";
import GenericInput from "../GenericInput";

export function Stage2() {
  return (
    <section id="stage2section">
      <GenericInput label="Character link here please..." role="stage2text1" />
      <MainButton
        buttonText="To Stage 3"
        onClick={() => {
          alert(
            document.querySelector(".stage2text1").value +
              " has been sent to the cloud!"
          );
        }}
      />
    </section>
  );
}
