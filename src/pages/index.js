import * as React from "react";
// import Amplify, { Auth } from "aws-amplify";
// import awsconfig from "../aws-exports";
// import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import {
  ChakraProvider,
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
import { Welcome } from "../components/Welcome";
import { Stage2 } from "../components/Stage2";
import "./index.css";
// Amplify.configure(awsconfig);

// markup
const IndexPage = () => {
  return (
    <ChakraProvider>
      {/* <AmplifySignOut /> */}
      <main className="wrapper">
        <Header />
        <Tabs
          className="m-20"
          variant="line"
          align="left"
          orientation="vertical"
          isLazy
        >
          <TabList>
            <Tab
              className="border-2 border-white text-white font-semibold"
              bg="#8896A3"
              _selected={{ color: "white", bg: "#4A90E2" }}
            >
              <p className="welcome">Welcome</p>
            </Tab>
            <Tab
              className="border-2 border-white text-white font-semibold"
              bg="#8896A3"
              _selected={{ color: "white", bg: "#4A90E2" }}
            >
              <p className="stage1">Stage 1</p>
            </Tab>
            <Tab
              className="border-2 border-white text-white font-semibold"
              bg="#8896A3"
              _selected={{ color: "white", bg: "#4A90E2" }}
            >
              <p className="stage2">Stage 2</p>
            </Tab>
            <Tab
              className="border-2 border-white text-white font-semibold"
              bg="#8896A3"
              _selected={{ color: "white", bg: "#4A90E2" }}
            >
              <p className="stage3">Stage 3</p>
            </Tab>
            <Tab
              className="border-2 border-white text-white font-semibold"
              bg="#8896A3"
              _selected={{ color: "white", bg: "#4A90E2" }}
            >
              <p className="stage4">Stage 4</p>
            </Tab>
            <Tab
              className="border-2 border-white text-white font-semibold"
              bg="#8896A3"
              _selected={{ color: "white", bg: "#4A90E2" }}
            >
              <p className="interview">Interview</p>
            </Tab>
            <Tab
              className="border-2 border-white text-white font-semibold"
              bg="#8896A3"
              _selected={{ color: "white", bg: "#4A90E2" }}
            >
              <p className="result">Result</p>
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
              <Welcome />
            </TabPanel>
            <TabPanel>
              <Header text="Stage 1"></Header>
              <MainButton onClick={() => alert("Wow")} />
            </TabPanel>
            <TabPanel>
              <Stage2 />
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
      </main>
      <Footer />
    </ChakraProvider>
  );
};

// export default withAuthenticator(IndexPage);
export default IndexPage;
