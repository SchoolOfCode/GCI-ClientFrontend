import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Wrapper from "../components/Wrapper";

// markup
const IndexPage = () => {
  return (
    <ChakraProvider>
      <main></main>
    </ChakraProvider>
  );
};

export default IndexPage;
