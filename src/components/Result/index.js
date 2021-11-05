import React, { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/layout";
const axios = require("axios").default;

export default function Result({ userId }) {
  const [result, setResult] = useState("wow");
  useEffect(() => {
    axios
      .get(`https://gci-backend.herokuapp.com/users/${userId}`)
      .then((response) => {
        setResult(response.data.payload[0].final.final);
      });
  }, []);

  return (
    <section className="m-5">
      <Heading className="text-4xl font-bold mb-5">Result</Heading>
      <Text>{result}</Text>
    </section>
  );
}
