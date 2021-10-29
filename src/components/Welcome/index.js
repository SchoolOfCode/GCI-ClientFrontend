import React, {useState, useEffect } from "react";
import { MainButton } from "../MainButton";
import { WelcomeParagraph } from "../WelcomeParagraph";
const axios = require('axios').default;
const setCurrentStage = require('../../pages')

export function Welcome({ handleStateChange, email}) {
  const [userId, setUserId] = useState("");
 

  //fetch request to check if user with that email already exists and return id if so

  useEffect(() => {
    axios.get(`https://gci-backend.herokuapp.com/users?email=${email}`)
    .then((result) => {setUserId(result.data.payload[0].id)})
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }, []);

  // fetch request to use the ID (if it exists) to return the current stage of the user. if not user exists it will do nothing and throw an err
  setTimeout(function () { axios.get(`https://gci-backend.herokuapp.com/users/${userId}?column=current_stage`)
  .then((result) => {console.log(userId); handleStateChange(result.data)})
  .catch(function (error) {
    // handle error
    console.log(error);
  })},2000)
  

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
