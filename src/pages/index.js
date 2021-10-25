import * as React from "react";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import { MainButton } from "../components/MainButton";
import { Footer } from "../components/Footer";
import { WelcomeParagraph } from "../components/WelcomeParagraph";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

// markup
const IndexPage = () => {
  return (
    <ChakraProvider>
      <main>
        <Tabs variant="line" align="center" orientation="vertical" isLazy>
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
              <MainButton onClick={() => alert("Wow")} />
            </TabPanel>
            <TabPanel>
              <Heading>I'm a Heading</Heading>
            </TabPanel>
            <TabPanel>
              <p>Stage 3!</p>
            </TabPanel>
            <TabPanel>
              <p>Stage 4!</p>
            </TabPanel>
            <TabPanel>
              <p>Interview!</p>
            </TabPanel>
            <TabPanel>
              <p>Result!</p>
            </TabPanel>
            <TabPanel>
              <p>FAQ!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </main>
      <Footer />
    </ChakraProvider>
  );
};

export default IndexPage;
//comment
