import React, { useState } from "react";
import Amplify from "aws-amplify";
import awsconfig from "../aws-exports";
import {
  AmplifySignOut,
  AmplifyAuthenticator,
  AmplifySignIn,
} from "@aws-amplify/ui-react";
import {
  ChakraProvider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import Header from "../components/Header";

import { Footer } from "../components/Footer";
import { Welcome } from "../components/Welcome";
import { StageTwo } from "../components/StageTwo";
import { StageThree } from "../components/StageThree";
import StageOne from "../components/StageOne";
import StageFour from "../components/StageFour";
import Interview from "../components/Interview";
import Result from "../components/Result";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import { Auth } from "@aws-amplify/auth";
import { Learn } from "../components/Learn";
// import Testlearn from "../components/Testlearn";
import "./index.css";
Amplify.configure(awsconfig);

// markup
const IndexPage = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [email, setEmail] = useState("");
  const handleStateChange = (state) => {setCurrentStage(state)}

  //Auth function to grab user email 

  Auth.currentAuthenticatedUser()
    .then((data) => {setEmail(data.attributes.email)})
    .catch((err) => console.log(err));

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

        <Header className="bg-gcinavy text-white" />
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
              isDisabled={{ currentStage } === 2 ? false : true}
              className="border-2 border-white text-white font-semibold"
              bg="#8896A3"
              _selected={{ color: "white", bg: "#4A90E2" }}
            >
              <p className="stage2">Stage 2</p>
            </Tab>
            <Tab
              isDisabled={{ currentStage } === 3 ? false : true}
              className="border-2 border-white text-white font-semibold"
              bg="#8896A3"
              _selected={{ color: "white", bg: "#4A90E2" }}
            >
              <p className="stage3">Stage 3</p>
            </Tab>
            <Tab
              isDisabled={{ currentStage } === 4 ? false : true}
              className="border-2 border-white text-white font-semibold"
              bg="#8896A3"
              _selected={{ color: "white", bg: "#4A90E2" }}
            >
              <p className="stage4">Stage 4</p>
            </Tab>
            <Tab
              isDisabled={{ currentStage } === 5 ? false : true}
              className="border-2 border-white text-white font-semibold"
              bg="#8896A3"
              _selected={{ color: "white", bg: "#4A90E2" }}
            >
              <p className="interview">Interview</p>
            </Tab>
            <Tab
              isDisabled={{ currentStage } === 6 ? false : true}
              className="border-2 border-white text-white font-semibold"
              bg="#8896A3"
              _selected={{ color: "white", bg: "#4A90E2" }}
            >
              <p className="result">Result</p>
            </Tab>
            <Tab
              isDisabled={{ currentStage } >= 5 ? false : true}
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
              <Welcome email={email} />
            </TabPanel>
            <TabPanel>
              <StageOne handleStateChange={handleStateChange}/>
            </TabPanel>
            <TabPanel>
              <StageTwo handleStateChange={handleStateChange} />
            </TabPanel>
            <TabPanel>
              <StageThree handleStateChange={handleStateChange}  />
            </TabPanel>
            <TabPanel>
              <StageFour  />
            </TabPanel>
            <TabPanel>
              <Interview />
            </TabPanel>
            <TabPanel>
              <Result />
            </TabPanel>
            <TabPanel>
              <Learn />
            </TabPanel>
            <TabPanel>
              <FrequentlyAskedQuestions />
            </TabPanel>
            <TabPanel>
              <AmplifySignOut buttonText="Log out" />{" "}
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Footer />
      </AmplifyAuthenticator>
    </ChakraProvider>
  );
};

//
export default IndexPage;
