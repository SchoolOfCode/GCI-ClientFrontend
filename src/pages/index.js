import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Wrapper from "../components/Wrapper";

// markup
const IndexPage = () => {
  return (
    <ChakraProvider>
      <main></main>
      <Wrapper></Wrapper>
    </ChakraProvider>
  );
};

export default IndexPage;
