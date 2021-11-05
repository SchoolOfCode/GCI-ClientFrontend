import React, { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/layout";
const axios = require("axios").default;

export default function Result({ userId }) {
  const [result, setResult] = useState("");
  useEffect(() => {
    axios
      .get(`${process.env.API_URL}/users/${userId}`)
      .then((response) => setResult(response.final.final));
  }, []);

  return (
    <section className="m-5">
      <Heading className="text-4xl font-bold mb-5">Result</Heading>
      <Text>{result}</Text>
    </section>
  );
}
