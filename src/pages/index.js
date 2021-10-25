import * as React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import GenericInput from "../components/GenericInput";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Dropdown from "../components/Dropdown";
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
Amplify.configure(awsconfig);

// markup
const IndexPage = () => {
  return (
    
    <ChakraProvider>
    <AmplifySignOut />
      <main>
      <Dropdown/>
      <GenericInput/>
      </main>
    </ChakraProvider>
  );
};

export default withAuthenticator(IndexPage);
