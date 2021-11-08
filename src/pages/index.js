import React, { useState, useEffect } from "react";
import Amplify, { Hub, Logger } from "aws-amplify";
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
  const [id, setId] = useState("nada");
  const [email, setEmail] = useState("nada");
  const [name, setName] = useState("there");
  const [margin, setMargin] = useState("m-20");
  const [width, height] = useWindowSize();
  const [menuAlignment, setMenuAlignment] = useState("vertical");
  const [contentAlignment, setContentAlignment] = useState("left");
  const [defIndex, setDefIndex] = useState(2);
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

  const logger = new Logger("Logger", "INFO");
  const listener = (data) => {
    switch (data.payload.event) {
      case "signIn":
        setName("there");
        logger.info("user signed in");
        Auth.currentUserInfo({ bypassCache: true })
          .then((data) => {
            // console.log(data.attributes.email);
            setEmail(data.attributes.email);
            setId("nada");
            axios
              .get(
                `https://gci-backend.herokuapp.com/users?email=${data.attributes.email}`
              )
              .then((result) => {
                // console.log("this is the id", result.data.payload[0].id);
                setId(result.data.payload[0].id);
                axios
                  .get(
                    `https://gci-backend.herokuapp.com/users/${result.data.payload[0].id}`
                  )
                  .then((result) => {
                    // console.log(result.data);
                    setStage(result.data.payload[0].current_stage);
                    setName(result.data.payload[0].first_name);
                  })

                  .catch(function (error) {
                    // handle error
                    setStage(1);
                    setName("there");
                    // console.log(error);
                  });
              })
              .then(() => document.querySelector(".welcome").click())
              .catch((err) => document.querySelector(".welcome").click());
          })
          .catch(function (error) {
            // handle error
            setEmail("nada");
            // console.log(error);
            // console.log(email, " ", id); // this is where you check
          });
        break;
      case "signUp":
        logger.info("user signed up");
        break;
      case "signOut":
        logger.info("user signed out");
        setEmail("nada");
        setName("there");
        setId("nada");
        setStage(1);
        break;
      case "signIn_failure":
        logger.info("user sign in failed");
        break;
      case "configured":
        logger.info("the Auth module is configured");
        break;
      default:
        logger.error("Something went wrong, look at data object", data);
    }
  };
  Hub.listen("auth", listener);

  //this useEffect grabs the logged-in user's email from AMS Auth.
  // it uses this to identify them in the DB and fetch their user id
  // we then use this to make a GET request to find their current stage
  //this is then used to determine which stage is displayed to them

  useEffect(() => {
    Auth.currentUserInfo({ bypassCache: true })
      .then((data) => {
        // console.log(data.attributes.email);
        setEmail(data.attributes.email);
        setId("nada");
        axios
          .get(
            `https://gci-backend.herokuapp.com/users?email=${data.attributes.email}`
          )
          .then((result) => {
            // console.log("this is the id", result.data.payload[0].id);
            setId(result.data.payload[0].id);
            axios
              .get(
                `https://gci-backend.herokuapp.com/users/${result.data.payload[0].id}`
              )
              .then((result) => {
                // console.log(result.data);
                setStage(result.data.payload[0].current_stage);
                setName(result.data.payload[0].first_name);
              })
              .then(() => document.querySelector(".welcome").click())
              .catch(function (error) {
                // handle error
                setStage(1);
                setName("there");
                // console.log(error);
              });
          })
          .then(() => document.querySelector(".welcome").click())
          .catch((err) => document.querySelector(".welcome").click());
      })
      .catch(function (error) {
        // handle error
        document.querySelector(".welcome").click();
        setEmail("nada");
        // console.log(error);
        // console.log(email, " ", id); // this is where you check
      });
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
              defaultIndex={defIndex}
              className={margin}
              variant="line"
              align={contentAlignment}
              orientation={menuAlignment}
              isLazy
            >
              <TabList>
                <Tab
                  className="welcome m-1 text-white font-semibold"
                  bg="#8896A3"
                  _selected={{ color: "white", bg: "#4A90E2" }}
                >
                  <p className="w">Welcome</p>
                </Tab>
                {currentStage === 1 && (
                  <Tab
                    className="m-1 text-white font-semibold"
                    bg="#8896A3"
                    _selected={{ color: "white", bg: "#4A90E2" }}
                  >
                    <p className="stage1">Stage 1</p>
                  </Tab>
                )}
                {currentStage === 2 && (
                  <Tab
                    className="m-1 text-white font-semibold"
                    bg="#8896A3"
                    _selected={{ color: "white", bg: "#4A90E2" }}
                  >
                    <p className="stage2">Stage 2</p>
                  </Tab>
                )}
                {currentStage === 3 && (
                  <Tab
                    className="m-1 text-white font-semibold"
                    bg="#8896A3"
                    _selected={{ color: "white", bg: "#4A90E2" }}
                  >
                    <p className="stage3">Stage 3</p>
                  </Tab>
                )}
                {currentStage === 4 && (
                  <Tab
                    className="m-1 text-white font-semibold"
                    bg="#8896A3"
                    _selected={{ color: "white", bg: "#4A90E2" }}
                  >
                    <p className="stage4">Stage 4</p>
                  </Tab>
                )}
                {currentStage === 6 && (
                  <Tab
                    className="m-1 text-white font-semibold"
                    bg="#8896A3"
                    _selected={{ color: "white", bg: "#4A90E2" }}
                  >
                    <p className="interview">Interview</p>
                  </Tab>
                )}
                {currentStage === 7 && (
                  <Tab
                    id="result"
                    className="m-1 text-white font-semibold"
                    bg="#8896A3"
                    _selected={{ color: "white", bg: "#4A90E2" }}
                  >
                    <p className="result">Result</p>
                  </Tab>
                )}
                {currentStage === 5 && (
                  <Tab
                    className="m-1 text-white font-semibold"
                    bg="#8896A3"
                    _selected={{ color: "white", bg: "#4A90E2" }}
                  >
                    <p className="stage5">Stage 4</p>
                  </Tab>
                )}
                {currentStage >= 5 && (
                  <Tab
                    className="m-1 text-white font-semibold"
                    bg="#8896A3"
                    _selected={{ color: "white", bg: "#4A90E2" }}
                  >
                    <p className="learn">Learn</p>
                  </Tab>
                )}

                <Tab
                  className="m-1 text-white font-semibold"
                  bg="#8896A3"
                  _selected={{ color: "white", bg: "#4A90E2" }}
                >
                  <p className="faq">F.A.Q.</p>
                </Tab>
                <Tab
                  className="m-1 text-white font-semibold"
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
                    <Result userId={id} />
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
