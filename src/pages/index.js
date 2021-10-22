import * as React from "react";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import { MainButton } from "../components/MainButton";

// markup
const IndexPage = () => {
  return (
    <ChakraProvider>
      <main>
        <Heading>I'm a Heading</Heading>
        <MainButton onClick={() => alert("Wow")} />
      </main>
    </ChakraProvider>
  );
};

export default IndexPage;
