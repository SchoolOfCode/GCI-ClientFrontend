import React, { useEffect, useState } from "react";
import { Heading, Text } from "@chakra-ui/react";
import { InlineWidget } from "react-calendly";
const axios = require("axios").default;

export default function Interview({ userId }) {
  const [hasDate, setHasDate] = useState(false);
  function isCalendlyEvent(e) {
    return e.data.event && e.data.event.indexOf("calendly") === 0;
  }

  window.addEventListener("message", function (e) {
    if (isCalendlyEvent(e)) {
      if (e.data.event === "calendly.event_scheduled") {
        axios
          .patch(
            `https://gci-backend.herokuapp.com/users/${userId}?column=interview`,
            {
              interview: true,
            }
          )
          .then(setHasDate(true));
      }
    }
  });

  useEffect(() => {
    axios
      .get(`https://gci-backend.herokuapp.com/users/${userId}`)
      .then((result) => {
        if (result.data.payload[0].interview.interview === true) {
          setHasDate(true);
        } else {
          setHasDate(false);
        }
      });
  }, []);

  return !hasDate ? (
    <section className="m-5">
      <Heading className="text-xl font-bold mb-5">1-1 Interview</Heading>
      <br></br>
      <Text>
        Thanks for completing all the application stages for our bootcamp.
        Fantastic work! We’re delighted to be able to invite you to a 1:1 Zoom
        call to get to know you a little better.
      </Text>
      <Text>
        We’ll be asking you about the application process so far as well as a
        few questions to help us find out if the course is right for you. The
        call will take no longer that 30 minutes.
      </Text>
      <br></br>

      <InlineWidget url="https://calendly.com/soc_gci/bootcamp-interviews-cohort-x" />
      <br></br>
      <Text>
        It would really help us if you could book your interview at the earliest
        possible time that is convenient for you.
      </Text>
      <br></br>
    </section>
  ) : (
    <section>
      <Text>
        Thanks for completing all the application stages for our bootcamp.
        Fantastic work! <br></br>We’re delighted to be able to invite you to a
        1:1 Zoom call to get to know you a little better.
      </Text>{" "}
      <Text>
        We’ll be asking you about the application process so far as well as a
        few questions to help us find out if the course is right for you.
        <br></br> The call will take no longer that 30 minutes.
      </Text>
      <br></br>
      <Text>
        Please check your emails for the interview details as you have selected
        an interview time.
      </Text>
    </section>
  );
}
