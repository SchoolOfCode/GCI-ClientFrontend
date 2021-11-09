import React, { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import Interweave, { Node } from "interweave";
import { Link } from "@chakra-ui/layout";
const axios = require("axios").default;

export default function Result({ userId }) {
  const [result, setResult] = useState("wow");

  function transform(node, children) {
    if (node.tagName === "a") {
      console.log("found one!")
      return <Link target="_blank" color="blue.600" href={node.getAttribute("href")} data-saferedirecturl={node.getAttribute("data-saferedirecturl")}>{children}</Link>;
    }
  }

  

  useEffect(() => {
    axios
      .get(`https://gci-backend.herokuapp.com/users/${userId}`)
      .then((response) => {
        setResult(response.data.payload[0].final.final);
      });
  }, []);

  return (
    <section className="m-5">
      <Interweave transform={transform} content={result} />
    </section>
  );
}
