import React, { useState, useEffect } from "react";
import { MainButton } from "../MainButton";
import { WelcomeParagraph } from "../WelcomeParagraph";
import { Auth } from "@aws-amplify/auth";

export function Welcome({ userId, setUserId, setCurrentStage }) {
  const [email, setEmail] = useState("");

  //Auth function to grab user email 

  Auth.currentAuthenticatedUser()
    .then((data) => setEmail(data.attributes.email))
    .catch((err) => console.log(err));

  //fetch request to check if user with that email already exists and return id if so

  useEffect(() => {
    fetch(`${process.env.API_URL}/users?email=${email}`, {
      method: "GET",
      mode: "no-cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    })
      .then((response) => response.json())
      .then((result) => setUserId(result.payload))
      .catch((err) => console.log(err, "This person doesn't exist"));
  }, []);

  // fetch request to use the ID (if it exists) to return the current stage of the user. if not user exists it will do nothing and throw an err

  useEffect(() => {
    fetch(`${process.env.API_URL}/users/${userId}?column=current_stage`, {
      method: "GET",
      mode: "no-cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    })
      .then((response) => response.json())
      .then((result) => setCurrentStage(result.payload))
      .catch((err) => console.log(err, "No ID"));
  }, []);

  return (
    <section className="m-5">
      <WelcomeParagraph />
      <br />
      <MainButton
        onClick={() => {
          document.querySelector(".stage1").click();
        }}
        buttonText="Start!"
      ></MainButton>
    </section>
  );
}
