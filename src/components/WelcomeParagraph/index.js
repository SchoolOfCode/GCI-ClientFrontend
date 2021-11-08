import React from "react";
import { Text, Heading, Box } from "@chakra-ui/react";

export function WelcomeParagraph({ name = "there" }) {
  return (
    <section>
      <Heading className="text-4xl font-bold mb-5">
        Hello {name}! Welcome to your School of Code application, the
        application has several steps:
      </Heading>
      <br></br>
      <Box className="flex flex-row ">
        <div className="stages mr-10 space-y-7">
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            borderColor="blue.400"
            className="bg-blue-400"
          >
            <Text fontSize="lg" className="font-semibold text-white p-3">
              Stage 1
            </Text>
            <Text className="text-white p-3">
              Fill out application form & demographics survey.
            </Text>
          </Box>
          <br></br>
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            borderColor="blue.400"
          >
            <Text fontSize="lg" className="font-semibold p-3">
              Stage 2
            </Text>
            <Text className="p-3">Create a pixel character.</Text>
          </Box>
          <br></br>
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            borderColor="blue.400"
            className="bg-blue-400"
          >
            <Text fontSize="lg" className="font-semibold text-white p-3">
              Stage 3
            </Text>
            <Text className="text-white p-3">Record a video interview.</Text>
          </Box>
          <br></br>

          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            borderColor="blue.400"
          >
            <Text fontSize="lg" className="font-semibold p-3">
              Stage 4
            </Text>
            <Text className="p-3">Create a game with Scratch.</Text>
          </Box>
        </div>
        <br></br>
        <div className="next-steps">
          <Box maxW="sm">
            <Text className="font-semibold p-3">
              More details of each stage will be given when you reach the stage.{" "}
            </Text>
            <Text className="font-semibold p-3">
              You have 4 weeks from now on to complete Stages 1 to 4 - each new
              stage will unlock when you complete the current stage.
            </Text>

            <br></br>
            <Text fontSize="lg" className="font-semibold p-3">
              1-1 Interview
            </Text>
            <Text className=" p-3">
              Once you have completed the 4 stages, your applicattion will be
              assessed and we will let you know if we would like to invite you
              to an interview. At this stage, the interview tab will be
              unlocked.
            </Text>
            <br></br>
            <Text fontSize="lg" className="  p-3 font-semibold">
              Confirmation
            </Text>
            <Text className="  p-3">
              If your application is successful, we'll send you confirmation.
              It's then time to congratulate yourself on making it through a
              highly competitive process
            </Text>
          </Box>
        </div>
      </Box>
    </section>
  );
}
