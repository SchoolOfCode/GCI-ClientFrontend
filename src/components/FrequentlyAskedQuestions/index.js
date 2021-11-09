import React, { useRef } from "react";
import {
  Button,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Box,
  AccordionPanel,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

import DeleteButton from "../DeleteButton";

export default function FrequentlyAskedQuestions({
  currUserId,
  theCurrentStage,
}) {
  const initialFocusRef = useRef();

  return (
    <section className="m-5">
      <Heading as="h3" className="text-xl font-bold mb-5">
        Frequently Asked Questions
      </Heading>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box className="font-semibold" flex="1" textAlign="left">
                How do I move to the next stage?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            The button for the next stage of your application will become
            unlocked when you have completed your current stage. Please ensure
            you have completed all steps and Submitted on your current stage.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box className="font-semibold" flex="1" textAlign="left">
                How do I know if my application is completed?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Click on the Stage 4 button. At the bottom if you can see some text
            that starts with "Thank you for completing your application!" then
            you have nothing further to do. We will contact you if you are being
            invited for an interview.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box className="font-semibold" flex="1" textAlign="left">
                What is love?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>Baby don't hurt me.</AccordionPanel>
        </AccordionItem>
        {theCurrentStage > 1 && (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box className="font-semibold" flex="1" textAlign="left">
                  How can I delete my information?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="flex flex-col">
              You can delete your information using the button below. Keep in
              mind, this will delete all existing information from our
              databases, but you will always still be able to log in to restart
              your application.
              <Popover
                initialFocusRef={initialFocusRef}
                placement="start"
                closeOnBlur={false}
              >
                <PopoverTrigger>
                  <Button
                    marginRight="2"
                    _hover={{ bg: "#000818" }}
                    size="lg"
                    bg="red"
                    color="white"
                    _active={{
                      transform: "scale(0.75)",
                    }}
                  >
                    Delete
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  color="white"
                  bg="blue.800"
                  borderColor="blue.800"
                >
                  <PopoverHeader pt={4} fontWeight="bold" border="0">
                    CONFIRM
                  </PopoverHeader>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody>Please confirm deletion</PopoverBody>
                  <PopoverFooter
                    border="0"
                    d="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    pb={4}
                  ></PopoverFooter>
                  <DeleteButton userId={currUserId} />
                </PopoverContent>
              </Popover>
            </AccordionPanel>
          </AccordionItem>
        )}
      </Accordion>
    </section>
  );
}
