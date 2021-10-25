import * as React from "react";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import { MainButton } from "../components/MainButton";
import { Footer } from "../components/Footer";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

// markup
const IndexPage = () => {
  return (
    <ChakraProvider>
      <main>
        <Tabs
          variant="solid-rounded"
          align="center"
          orientation="vertical"
          isLazy
        >
          <TabList>
            <Tab>Welcome</Tab>
            <Tab>Stage 1</Tab>
            <Tab>Stage 2</Tab>
            <Tab>Stage 3</Tab>
            <Tab>Stage 4</Tab>
            <Tab>Interview</Tab>
            <Tab>Result</Tab>
            <Tab>F.A.Q</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Heading>I'm a Heading</Heading>
            </TabPanel>
            <TabPanel>
              <MainButton onClick={() => alert("Wow")} />
            </TabPanel>
            <TabPanel>
              <p>Stage 2!</p>
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
