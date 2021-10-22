import * as React from "react";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import { MainButton } from "../components/MainButton";
import { Footer } from "../components/Footer";
import { Welcome } from "../components/Welcome";

// markup
const IndexPage = () => {
  return (
    <ChakraProvider>
      <main>
        <Heading>I'm a Heading</Heading>
        <MainButton onClick={() => alert("Wow")} />
        <Welcome />
      </main>
      <Footer />
    </ChakraProvider>
  );
};

export default IndexPage;
