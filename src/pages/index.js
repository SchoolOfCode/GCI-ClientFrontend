import * as React from "react";
// import Amplify from "aws-amplify";
// import awsconfig from "../aws-exports";
import {
  ChakraProvider,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
// import {
//   AmplifySignOut,
//   AmplifyAuthenticator,
//   AmplifySignIn,
// } from "@aws-amplify/ui-react";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Welcome } from "../components/Welcome";
import { StageTwo } from "../components/StageTwo";
import { StageThree } from "../components/StageThree";
import StageOne from "../components/StageOne";
import StageFour from "../components/StageFour";
import { Learn } from "../components/Learn";
import "./index.css";
// Amplify.configure(awsconfig);

// markup
const IndexPage = () => {
  return (
    <ChakraProvider>
      {/* <AmplifyAuthenticator> */}
      {/* <div
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
      > */}
      {/* <Header /> */}
      {/* <AmplifySignIn headerText="Sign in to access your SoC application" /> */}
      {/* </div> */}

      <Header bgColor="#000818" textColor="white" />
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
            <p className="precourse">Learn</p>
          </Tab>
          <Tab
            className="border-2 border-white text-white font-semibold"
            bg="#8896A3"
            _selected={{ color: "white", bg: "#4A90E2" }}
          >
            <p className="faq">F.A.Q.</p>
          </Tab>
          <Tab
            className="border-2 border-white text-white font-semibold"
            bg="#8896A3"
            _selected={{ color: "white", bg: "#4A90E2" }}
          >
            Sign Out
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Welcome />
          </TabPanel>
          <TabPanel>
            <StageOne />
          </TabPanel>
          <TabPanel>
            <StageTwo />
          </TabPanel>
          <TabPanel>
            <StageThree />
          </TabPanel>
          <TabPanel>
            <StageFour />
          </TabPanel>
          <TabPanel>
            <Header text="Interview"></Header>
          </TabPanel>
          <TabPanel>
            <Header text="Result"></Header>
          </TabPanel>
          <TabPanel>
            <Learn />
            {/* <ContactForm /> */}
          </TabPanel>
          <TabPanel>
            <Heading>Frequently asked questions</Heading>
          </TabPanel>

          <TabPanel>{/* <AmplifySignOut buttonText="Log out" /> */}</TabPanel>
        </TabPanels>
      </Tabs>
      <Footer />
      {/* </AmplifyAuthenticator> */}
    </ChakraProvider>
  );
};

//
export default IndexPage;
