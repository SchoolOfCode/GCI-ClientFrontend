import React, { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import Interweave from "interweave";
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
      <Interweave content={result} />
    </section>
  );
}
