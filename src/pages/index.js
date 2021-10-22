import * as React from "react";
import { ChakraProvider, Heading } from "@chakra-ui/react";

// markup
const IndexPage = () => {
  return (
    <ChakraProvider>
      <main>
        <Heading>I'm a Heading</Heading>
      </main>
    </ChakraProvider>
  );
};

export default IndexPage;
