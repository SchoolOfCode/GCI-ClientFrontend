import * as React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import GenericInput from "../components/GenericInput";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Dropdown from "../components/Dropdown";

// markup
const IndexPage = () => {
  return (
    <ChakraProvider>
      <main>
      <Dropdown/>
      <GenericInput/>
      </main>
    </ChakraProvider>
  );
};

export default IndexPage;
