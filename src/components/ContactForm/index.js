import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

export default function ContactForm({
  heading = "Contact Us",
  label1 = "Application ID",
  label2 = "Name",
  label3 = "Questions:",
  buttontext = "Submit",
}) {
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={4} borderWidth="3px" borderRadius="5%" borderColor="#4A90E2">
        <Box textAlign="center">
          <Heading>{heading}</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl>
              <FormLabel>{label1}</FormLabel>
              <Input type="text" placeholder="1234" />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>{label2}</FormLabel>
              <Input type="text" placeholder="Your name" />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>{label3}</FormLabel>
              <Textarea
                type="text"
                placeholder="Please type your questions here..."
              />
            </FormControl>
            <Button
              bg="#4A90E2"
              width="full"
              mt={4}
              type="submit"
              textColor="white"
            >
              {buttontext}
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}
