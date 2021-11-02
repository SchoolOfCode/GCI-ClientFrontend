import React, { useState, useEffect } from "react";
import Amplify from "aws-amplify";
import awsconfig from "../aws-exports";
import { StageProvider } from "../components/StageContext";
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
import { useWindowSize } from "../hooks/useWindowSize";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { Welcome } from "../components/Welcome";
import { StageTwo } from "../components/StageTwo";
import { StageThree } from "../components/StageThree";
import StageOne from "../components/StageOne";
import StageFour from "../components/StageFour";
import Interview from "../components/Interview";
import StageFive from "../components/Stage Five";
import Result from "../components/Result";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import { Auth } from "@aws-amplify/auth";
import { Learn } from "../components/Learn";
import "./index.css";
import { detectMob } from "../functions/detectMob";
const axios = require("axios").default;
Amplify.configure(awsconfig);

// markup
const IndexPage = () => {
  const [currentStage, setStage] = useState(1);
  const [id, setId] = useState();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("there");
  const [margin, setMargin] = useState("m-20");
  const [width, height] = useWindowSize();
  const [menuAlignment, setMenuAlignment] = useState("vertical");
  const [contentAlignment, setContentAlignment] = useState("left");
  // for mobile interface usage
  useEffect(() => {
    if (width <= 1080 || detectMob()) {
      setMenuAlignment("horizontal");
      setContentAlignment("center");
      setMargin("mt-5");
    }
    if (width > 1080) {
      setMenuAlignment("vertical");
      setContentAlignment("left");
      setMargin("m-20");
    }
  }, [width]);

  //this useEffect grabs the logged-in user's email from AMS Auth.
  // it uses this to identify them in the DB and fetch their user id
  // we then use this to make a GET request to find their current stage
  //this is then used to determine which stage is displayed to them

  useEffect(() => {
    Auth.currentUserInfo()
      .then((data) => {
        setEmail(data.attributes.email);
        axios
          .get(
            `https://gci-backend.herokuapp.com/users?email=${data.attributes.email}`
          )
          .then((result) => {
            if (result.data.payload[0]) {
              console.log("this is the id", result.data.payload[0].id);
              setId(result.data.payload[0].id);
              axios
                .get(
                  `https://gci-backend.herokuapp.com/users/${result.data.payload[0].id}`
                )
                .then((result) => {
                  console.log(result.data);
                  setStage(result.data.payload[0].current_stage);
                  setName(result.data.payload[0].first_name);
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                });
            } else return;
          });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ChakraProvider>
      <StageProvider>
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
          <main className="wrapper">
            <Tabs
              className={margin}
              variant="line"
              align={contentAlignment}
              orientation={menuAlignment}
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
                {currentStage === 1 && (
                  <Tab
                    className="border-2 border-white text-white font-semibold"
                    bg="#8896A3"
                    _selected={{ color: "white", bg: "#4A90E2" }}
                  >
                    <p className="stage1">Stage 1</p>
                  </Tab>
                )}
                {currentStage === 2 && (
                  <Tab
                    className="border-2 border-white text-white font-semibold"
                    bg="#8896A3"
                    _selected={{ color: "white", bg: "#4A90E2" }}
                  >
                    <p className="stage2">Stage 2</p>
                  </Tab>
                )}
                {currentStage === 3 && (
                  <Tab
                    className="border-2 border-white text-white font-semibold"
                    bg="#8896A3"
                    _selected={{ color: "white", bg: "#4A90E2" }}
                  >
                    <p className="stage3">Stage 3</p>
                  </Tab>
                )}
                {currentStage === 4 && (
                  <Tab
                    className="border-2 border-white text-white font-semibold"
                    bg="#8896A3"
                    _selected={{ color: "white", bg: "#4A90E2" }}
                  >
                    <p className="stage4">Stage 4</p>
                  </Tab>
                )}
                {currentStage === 6 && (
                  <Tab
                    className="border-2 border-white text-white font-semibold"
                    bg="#8896A3"
                    _selected={{ color: "white", bg: "#4A90E2" }}
                  >
                    <p className="interview">Interview</p>
                  </Tab>
                )}
                {currentStage === 7 && (
                  <Tab
                    className="border-2 border-white text-white font-semibold"
                    bg="#8896A3"
                    _selected={{ color: "white", bg: "#4A90E2" }}
                  >
                    <p className="result">Result</p>
                  </Tab>
                )}
                {currentStage === 5 && (
                  <Tab
                    className="border-2 border-white text-white font-semibold"
                    bg="#8896A3"
                    _selected={{ color: "white", bg: "#4A90E2" }}
                  >
                    <p className="stage5">Stage 5</p>
                  </Tab>
                )}
                {currentStage >= 5 && (
                  <Tab
                    className="border-2 border-white text-white font-semibold"
                    bg="#8896A3"
                    _selected={{ color: "white", bg: "#4A90E2" }}
                  >
                    <p className="learn">Learn</p>
                  </Tab>
                )}

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
                  <Welcome name={name} />
                </TabPanel>
                {currentStage === 1 && (
                  <TabPanel>
                    <StageOne
                      userId={id}
                      setCurrentStage={setStage}
                      setCurrentId={setId}
                      email={email}
                      setName={setName}
                    />
                  </TabPanel>
                )}
                {currentStage === 2 && (
                  <TabPanel>
                    <StageTwo
                      userId={id}
                      setCurrentStage={setStage}
                      setCurrentId={setId}
                    />
                  </TabPanel>
                )}
                {currentStage === 3 && (
                  <TabPanel>
                    <StageThree
                      userId={id}
                      setCurrentStage={setStage}
                      setCurrentId={setId}
                    />
                  </TabPanel>
                )}
                {currentStage === 4 && (
                  <TabPanel>
                    <StageFour
                      userId={id}
                      setCurrentStage={setStage}
                      setCurrentId={setId}
                    />
                  </TabPanel>
                )}
                {currentStage === 6 && (
                  <TabPanel>
                    <Interview />
                  </TabPanel>
                )}
                {currentStage === 7 && (
                  <TabPanel>
                    <Result />
                  </TabPanel>
                )}
                {currentStage === 5 && (
                  <TabPanel>
                    <StageFive />
                  </TabPanel>
                )}
                {currentStage >= 5 && (
                  <TabPanel>
                    <Learn />
                  </TabPanel>
                )}

                <TabPanel>
                  <FrequentlyAskedQuestions />
                </TabPanel>
                <TabPanel>
                  <AmplifySignOut buttonText="Log out" />{" "}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </main>
          <Footer />
        </AmplifyAuthenticator>
      </StageProvider>
    </ChakraProvider>
  );
};

export default IndexPage;
