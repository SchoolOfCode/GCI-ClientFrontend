import React, { useState, useEffect } from "react";
import { MainButton } from "../MainButton";
import { Auth } from "@aws-amplify/auth";

export default function GetUserEmail() {
  const [email, setEmail] = useState("");

  Auth.currentAuthenticatedUser()
    .then((data) => setEmail(data.attributes.email))
    .catch((err) => console.log(err));

  function handleClick() {
    alert(`your email address is: ${email}`);
  }

  return (
    <section>
      <MainButton buttonText="TEST" onClick={handleClick}></MainButton>
    </section>
  );
}
