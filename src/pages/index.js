import * as React from "react";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
import {
  withAuthenticator,
  AmplifySignOut,
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp,
} from "@aws-amplify/ui-react";
import {
  ChakraProvider,
  Container,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import { MainButton } from "../components/MainButton";
import { Footer } from "../components/Footer";
import { WelcomeParagraph } from "../components/WelcomeParagraph";
import "./index.css";
Amplify.configure(awsconfig);

// markup
const IndexPage = () => {
  return (
    <ChakraProvider>
      <AmplifyAuthenticator>
        <div
          className="App"
          slot="sign-in"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
            width: "100%",
            backgroundSize: "1800px 1800px",
            marginBottom: "20px",
          
          }}
        >
          <Header />
          <AmplifySignIn headerText="Sign in to access your SoC application" />
        </div>

        <Header />
        <main className="wrapper">
          <Tabs variant="line" align="left" orientation="vertical" isLazy>
            <TabList>
              <Tab
                className="border-2 border-white text-white font-semibold"
                bg="#8896A3"
                _selected={{ color: "white", bg: "#4A90E2" }}
              >
                Welcome
              </Tab>
              <Tab
                className="border-2 border-white text-white font-semibold"
                bg="#8896A3"
                _selected={{ color: "white", bg: "#4A90E2" }}
              >
                Stage 1
              </Tab>
              <Tab
                className="border-2 border-white text-white font-semibold"
                bg="#8896A3"
                _selected={{ color: "white", bg: "#4A90E2" }}
              >
                Stage 2
              </Tab>
              <Tab
                className="border-2 border-white text-white font-semibold"
                bg="#8896A3"
                _selected={{ color: "white", bg: "#4A90E2" }}
              >
                Stage 3
              </Tab>
              <Tab
                className="border-2 border-white text-white font-semibold"
                bg="#8896A3"
                _selected={{ color: "white", bg: "#4A90E2" }}
              >
                Stage 4
              </Tab>
              <Tab
                className="border-2 border-white text-white font-semibold"
                bg="#8896A3"
                _selected={{ color: "white", bg: "#4A90E2" }}
              >
                Interview
              </Tab>
              <Tab
                className="border-2 border-white text-white font-semibold"
                bg="#8896A3"
                _selected={{ color: "white", bg: "#4A90E2" }}
              >
                Result
              </Tab>
              <Tab
                className="border-2 border-white text-white font-semibold"
                bg="#8896A3"
                _selected={{ color: "white", bg: "#4A90E2" }}
              >
                F.A.Q
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <WelcomeParagraph />
              </TabPanel>
              <TabPanel>
                <Header text="Stage 1"></Header>
                <MainButton onClick={() => alert("Wow")} />
              </TabPanel>
              <TabPanel>
                <Header text="Stage 2"></Header>
              </TabPanel>
              <TabPanel>
                <Header text="Stage 3"></Header>
              </TabPanel>
              <TabPanel>
                <Header text="Stage 4"></Header>
              </TabPanel>
              <TabPanel>
                <Header text="Interview"></Header>
              </TabPanel>
              <TabPanel>
                <Header text="Result"></Header>
              </TabPanel>
              <TabPanel>
                <Header text="Result"></Header>
                <Header text="Result"></Header>
                <Header text="Result"></Header>
                <Header text="Result"></Header>
                <Header text="Result"></Header>
                <Heading>Frequently asked questions</Heading>

                <ContactForm />
              </TabPanel>
            </TabPanels>
          </Tabs>
          <AmplifySignOut />
        </main>
        <Footer />
      </AmplifyAuthenticator>
    </ChakraProvider>
  );
};

export default IndexPage;
