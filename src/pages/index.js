import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Wrapper from "../components/Wrapper";
import ContactForm from "../components/ContactForm";

// markup
const IndexPage = () => {
  return (
    <ChakraProvider>
      <main></main>
    </ChakraProvider>
  );
};

export default IndexPage;
