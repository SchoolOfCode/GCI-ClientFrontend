import * as React from "react";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import "./index.css";
import GenericInput from "../components/GenericInput";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Dropdown from "../components/Dropdown";
Amplify.configure(awsconfig);

// markup
const IndexPage = () => {
  return (
    <ChakraProvider>
      <AmplifySignOut />
      <main>
        <Dropdown />
        <GenericInput />
      </main>
    </ChakraProvider>
  );
};

export default withAuthenticator(IndexPage);
