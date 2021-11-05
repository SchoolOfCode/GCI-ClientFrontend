import React, { useState } from "react";
import GenericInput from "../GenericInput";
import Dropdown from "../Dropdown";
import GenericTextarea from "../GenericTextarea";
import GenericRadio from "../GenericRadio";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { MainButton } from "../MainButton";
import {
  Image,
  Box,
  Link,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { useEffect } from "react";
const axios = require("axios").default;

//This function collates all answers into an objects. It also tests whether the applicants answers are valid

export default function StageOne({
  setCurrentStage,
  setCurrentId,
  email,
  setName,
}) {
  const [tabIndex, setTabIndex] = useState(0);

  const [state, setState] = useState(0);

  function increment() {
    setTabIndex(tabIndex + 1);
    console.log("tab index", tabIndex);
  }
  function decrement() {
    tabIndex >= 0 ? setTabIndex(tabIndex - 1) : setTabIndex(tabIndex);
    console.log("tab index", tabIndex);
  }

  function handleTabsChange(index) {
    setTabIndex(index);
  }
  function handleClick() {
    let answers = [];
    let requiredAnswers = [];
    answers.push(document.querySelector(".stage1question1").id);
    requiredAnswers.push(document.querySelector(".stage1question1").id);
    answers.push(document.querySelector(".stage1question2").value);
    requiredAnswers.push(document.querySelector(".stage1question2").value);
    answers.push(document.querySelector(".stage1question3").value);
    requiredAnswers.push(document.querySelector(".stage1question3").value);
    answers.push(document.querySelector(".stage1question4").value);
    requiredAnswers.push(document.querySelector(".stage1question4").value);
    answers.push(document.querySelector(".stage1question5").value);
    requiredAnswers.push(document.querySelector(".stage1question5").value);
    answers.push(document.querySelector(".stage1question6").value);
    requiredAnswers.push(document.querySelector(".stage1question6").value);
    answers.push(document.querySelector(".stage1question7").value);
    requiredAnswers.push(document.querySelector(".stage1question7").value);
    answers.push(document.querySelector(".stage1question8").value);
    requiredAnswers.push(document.querySelector(".stage1question8").value);
    answers.push(document.querySelector(".stage1question9").value);
    answers.push(document.querySelector(".stage1question10").value);
    requiredAnswers.push(document.querySelector(".stage1question10").value);
    answers.push(document.querySelector(".stage1question11").value);
    requiredAnswers.push(document.querySelector(".stage1question11").value);
    answers.push(document.querySelector(".stage1question12").value);
    answers.push(document.querySelector(".stage1question13").value);
    requiredAnswers.push(document.querySelector(".stage1question13").value);
    answers.push(document.querySelector(".stage1question14").value);
    answers.push(document.querySelector(".stage1question15").value);
    requiredAnswers.push(document.querySelector(".stage1question15").value);
    answers.push(document.querySelector(".stage1question16").value);
    requiredAnswers.push(document.querySelector(".stage1question16").value);
    answers.push(document.querySelector(".stage1question17").value);
    answers.push(document.querySelector(".stage1question18").value);
    answers.push(document.querySelector(".stage1question19").value);
    requiredAnswers.push(document.querySelector(".stage1question19").value);
    answers.push(document.querySelector(".stage1question20").value);
    requiredAnswers.push(document.querySelector(".stage1question20").value);
    answers.push(document.querySelector(".stage1question21").value);
    requiredAnswers.push(document.querySelector(".stage1question21").value);
    answers.push(document.querySelector(".stage1question22").value);
    answers.push(document.querySelector(".stage1question23").value);
    answers.push(document.querySelector(".stage1question24").value);
    requiredAnswers.push(document.querySelector(".stage1question24").value);
    answers.push(document.querySelector(".stage1question25").value);
    requiredAnswers.push(document.querySelector(".stage1question25").value);
    answers.push(document.querySelector(".stage1question26").value);
    answers.push(document.querySelector(".stage1question27").value);
    requiredAnswers.push(document.querySelector(".stage1question27").value);
    answers.push(document.querySelector(".stage1question28").value);
    answers.push(document.querySelector(".stage1question29").value);
    requiredAnswers.push(document.querySelector(".stage1question29").value);
    answers.push(document.querySelector(".stage1question30").value);
    answers.push(document.querySelector(".stage1question31").value);
    requiredAnswers.push(document.querySelector(".stage1question31").value);
    answers.push(document.querySelector(".stage1question32").value);
    requiredAnswers.push(document.querySelector(".stage1question32").value);
    answers.push(document.querySelector(".stage1question33").id);
    requiredAnswers.push(document.querySelector(".stage1question33").value);
    //validity check. This checks that all required questions have an answer
    let valid = !requiredAnswers.includes("");
    console.log("validity check", valid);
    let answerObject = Object.assign({}, answers);
    // this section checks that applicants have selected 'accept' for both the eligibility
    // criteria, the privacy notice and the Q&A
    //if they have, it then uses the validity check to confirm all required answers have a value
    // if all checks pass, it passes all of the answers into an object saved in a variable called 'answers'

    if (document.querySelector(".stage1question1").id === "decline") {
      alert("please accept the eligibility criteria (question 1)");
    } else if (document.querySelector(".stage1question33").id === "decline") {
      alert("please read and accept the Privacy Notice and the Q&A");
    } else if (valid) {
      //fetch request to add a new user to the database using the answers from their application form.

      axios
        .post(`https://gci-backend.herokuapp.com/users`, {
          username: answerObject[3],
          current_stage: 2,
          first_name: answerObject[1],
          last_name: answerObject[2],
          email: email,
          contact_number: answerObject[4],
          created_at: new Date(),
          stage_1: JSON.stringify(answers),
          stage_2: null,
          stage_3: null,
          stage_4: null,
          interview: null,
          final: null,
          region: answerObject[14],
          assignee: "Not assigned",
        })
        .then((response) => {
          console.log("user added", response);

          setState(state + 1);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert(
        "please complete all required fields. These are marked with a red asterisk"
      );
    }
  }

  //returns form with 33 questions from application & demographics form

  useEffect(() => {
    axios
      .get(`https://gci-backend.herokuapp.com/users?email=${email}`)
      .then((result) => {
        if (result.data.payload[0]) {
          setCurrentId(result.data.payload[0].id);
          setName(result.data.payload[0].first_name);
          setCurrentStage(2);
        } else return;
      });
  }, [state]);

  return (
    <div>
      <Tabs
        align="left"
        variant="enclosed"
        index={tabIndex}
        onChange={handleTabsChange}
      >
        <TabList>
          <Tab className="bg-#4a90e2 text-white font-semibold">Section 1</Tab>
          <Tab className="bg-#4a90e2 text-white font-semibold">Section 2</Tab>
          <Tab className="bg-#4a90e2 text-white font-semibold">Section 3</Tab>
          <Tab className="bg-#4a90e2 text-white font-semibold">Section 4</Tab>
          <Tab className="bg-#4a90e2 text-white font-semibold">Section 5</Tab>
          <Tab className="bg-#4a90e2 text-white font-semibold">Section 6</Tab>
          <Tab className="bg-#4a90e2 text-white font-semibold">Section 7</Tab>
          <Tab className="bg-#4a90e2 text-white font-semibold">Section 8</Tab>
          <Tab className="bg-#4a90e2 text-white font-semibold">Section 9</Tab>
 
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text fontWeight="bold">
              1. The next bootcamp starts on 15th November 2021. To be eligible
              you must: *
            </Text>
            <UnorderedList>
              <ListItem>
                be able to attend remote lectures 9am-5pm on Monday-Friday for
                the duration of the 16 week course
              </ListItem>
              <ListItem>have access to the internet for that time</ListItem>
              <ListItem>
                live in, and be able to work in, the North West, East Midlands,
                West Midlands, London, or the South East of England
              </ListItem>
              <ListItem>be 19+ years of age</ListItem>
              <ListItem>be eligible to live and work in the UK</ListItem>
              <ListItem>
                be ready to start a new career in tech after the bootcamp
              </ListItem>
            </UnorderedList>

            <GenericRadio
              role="stage1question1"
              valueOne="accept"
              valueTwo="decline"
            />
            <MainButton className="m-3" buttonText="Back" onClick={decrement} />
            <MainButton className="m-3" buttonText="Next" onClick={increment} />
          </TabPanel>
          <TabPanel>
            <GenericInput
              role="stage1question2"
              label="2. What is your first name?"
            />
            <br></br>
            <GenericInput
              role="stage1question3"
              label="3. What is your last name?"
            />
            <br></br>
            <GenericInput
              role="stage1question4"
              label="4. What is your email address?"
              placeholderText="name@example.com"
            />
            <br></br>
            <GenericInput
              role="stage1question5"
              label="5. What is your phone number?"
              placeholderText="12345 678 912"
            />
            <br></br>
            <GenericInput
              role="stage1question6"
              label="6. What is your date of birth (format dd/mm/yyyy)?"
              placeholderText="dd/mm/yyyy"
            />
            <br></br>
            <Dropdown
              role="stage1question7"
              label="7. What is your gender?"
              placeholderText="Please make your selection"
              first="Male"
              second="Female"
              third="Non-binary"
              fourth="Prefer not to say"
              fifth="Other"
            />
            <MainButton
              className="mt-3 mr-1"
              buttonText="Back"
              onClick={decrement}
            />
            <MainButton
              className="mt-3 ml-1"
              buttonText="Next"
              onClick={increment}
            />
          </TabPanel>
          <TabPanel>
            <Dropdown
              role="stage1question8"
              label="8. To which of the following groups do you feel you belong?"
              placeholderText="Please make your selection..."
              first="White-British"
              second="White-Irish"
              third="White-any other White background"
              fourth="Mixed - White & Black Caribbean"
              fifth="Mixed - White & Black African"
              sixth="Mixed - White & Asian"
              seventh="Mixed - any other Mixed background"
              eight="Black or Black British - African"
              ninth="Black or Black British - Caribbean"
              tenth="Black or Black British - any other Black background"
              eleventh="Asian or Asian British - Indian"
              twelfth="Asian or Asian British - Pakistani"
              thirteenth="Asian or Asian British - Bangladeshi"
              fourteenth="Asian or Asian British - Any other Asian background"
              fifteenth="Chinese"
              sixteenth="Other"
            />
            <br></br>
            <GenericInput
              role="stage1question9"
              label="9. If 'Other' please specify..."
              isRequired={false}
            />
            <br></br>
            <GenericInput
              role="stage1question10"
              label="10. Where were you born? (City/Country)"
            />
            <br></br>
            <GenericInput
              role="stage1question11"
              label="11. What is your current Post Code?"
            />
            <br></br>
            <GenericInput
              role="stage1question12"
              label="12. What is your National Insurance number (if you have one)"
              isRequired={false}
            />
            <Dropdown
              role="stage1question13"
              label="13. Do you have any long-standing illness, disability or infirmity?"
              first="yes"
              second="no"
            />
            <br></br>
            <GenericInput
              role="stage1question14"
              label="14. If 'yes' please specify..."
              isRequired={false}
            />
            <MainButton
              className="mt-3 mr-1"
              buttonText="Back"
              onClick={decrement}
            />
            <MainButton
              className="mt-3 ml-1"
              buttonText="Next"
              onClick={increment}
            />
          </TabPanel>
          <TabPanel>
            {" "}
            <Box className="box">
              <Dropdown
                role="stage1question15"
                label="15. Which region are your applying for?"
                placeholderText="Pick a region from the School of Code Bootcamp areas listed below"
                first="North West"
                second="West Midlands"
                third="East Midlands"
                fourth="London"
                fifth="South East"
                sixth="Other"
              />
              <Image
                boxSize="500px"
                objectFit="cover"
                src="https://images.typeform.com/images/BCHhJYBU6Vg8/image/default-firstframe.png"
                alt="regional map of England"
              />
              <br></br>
            </Box>
            <MainButton
              className="mt-3 mr-1"
              buttonText="Back"
              onClick={decrement}
            />
            <MainButton
              className="mt-3 ml-1"
              buttonText="Next"
              onClick={increment}
            />
          </TabPanel>
          <TabPanel>
            <Dropdown
              role="stage1question16"
              label="16. What best describes your current situation?"
              placeholderText="Please make your selection..."
              first="Self-employed, but looking to change career"
              second="unemployed and looking to start a career"
              third="employed full-time but looking to change career"
              fourth="employed part-time but looking to change career"
              fifth="finishing college/school and looking to start a career"
              sixth="graduating university and looking to start a career"
              seventh="leaving military service and looking for a new career"
              eight="Current student, looking for a new career"
              ninth="Other"
            />
            <br></br>
            <GenericInput
              role="stage1question17"
              label="17. If employed, what industry do you currently work in?"
              isRequired={false}
            />
            <br></br>
            <GenericInput
              role="stage1question18"
              label="18. If employed, what is your current annual income (£)?"
              isRequired={false}
            />
            <br></br>
            <GenericInput
              role="stage1question19"
              label="19. What is your current household annual income? (£)"
            />
            <MainButton
              className="mt-3 mr-1"
              buttonText="Back"
              onClick={decrement}
            />
            <MainButton
              className="mt-3 ml-1"
              buttonText="Next"
              onClick={increment}
            />
          </TabPanel>
          <TabPanel>
            <GenericInput
              role="stage1question20"
              label="20. What is your primary language?"
            />
            <br></br>
            <Dropdown
              role="stage1question21"
              label="21. What is your highest qualification in education?"
              first="no GCSEs"
              second="GCSEs or equivalent"
              third="Vocational/technical college"
              fourth="A-Levels/BTEC National Diploma"
              fifth="Bachelor's Degree"
              sixth="Master's Degree"
              seventh="Doctorate"
              eight="Other"
            />
            <br></br>
            <GenericInput
              role="stage1question22"
              label="22. If 'Other' please specify..."
              isRequired={false}
            />
            <br></br>
            <GenericInput
              role="stage1question23"
              label="23. If you have a university degree, what subject is it in?"
              isRequired={false}
            />
            <br></br>
            <Dropdown
              role="stage1question24"
              label="24. What is your martial status?"
              first="Single"
              second="Co-habiting"
              third="Married"
              fourth="Separated/Divorced"
              fifth="Widowed"
            />
            <br></br>
            <Dropdown
              role="stage1question25"
              label="25. Do you have any children?"
              first="Yes"
              second="No"
            />
            <GenericInput
              role="stage1question26"
              label="26. If 'Yes' how many?"
              isRequired={false}
            />
            <MainButton
              className="mt-3 mr-1"
              buttonText="Back"
              onClick={decrement}
            />
            <MainButton
              className="mt-3 ml-1"
              buttonText="Next"
              onClick={increment}
            />
          </TabPanel>
          <TabPanel>
            <Dropdown
              role="stage1question27"
              label="27. Do you practice a religion and if so, which one?"
              first="None (atheism)"
              second="Buddhism"
              third="Christianity"
              fourth="Hinduism"
              fifth="Hinduism"
              sixth="Islam"
              seventh="Judaism"
              eight="Sikhism"
              ninth="Other"
            />
            <br></br>
            <GenericInput
              role="stage1question28"
              label="28. If 'Other' please specify..."
              isRequired={false}
            />
            <br></br>
            <Dropdown
              role="stage1question29"
              label="29. What is your current housing status?"
              first="Owned outright"
              second="Buying on a mortgage"
              third="Rent from council"
              fourth="Rent from Housing Association/Trust"
              fifth="Rent from private landlord"
              sixth="Homeless"
              seventh="Staying with friends or family"
              eight="Other"
            />
            <br></br>
            <GenericInput
              role="stage1question30"
              label="30. If 'Other' please specify..."
              isRequired={false}
            />
            <MainButton
              className="mt-3 mr-1"
              buttonText="Back"
              onClick={decrement}
            />
            <MainButton
              className="mt-3 ml-1"
              buttonText="Next"
              onClick={increment}
            />
          </TabPanel>
          <TabPanel>
            <GenericTextarea
              role="stage1question31"
              label="31. Why do you want to join the School of Code?"
              placeholderText="Please type your answer here..."
            />
            <br></br>
            <Dropdown
              role="stage1question32"
              label="32. Where did you hear about School of Code?"
              placeholderText="Please make your selection..."
              first="Internet search (e.g. Google, Bing, DuckDuckGo)"
              second="Facebook"
              third="Twitter"
              fourth="Instagram"
              fifth="Linkedin"
              sixth="Word of mouth (family/friends/colleagues)"
              seventh="Referral from a previous bootcamper"
              eight="A blog post"
              ninth="Newspaper"
              tenth="Email newsletter"
              eleventh="Other"
            />
            <MainButton
              className="mt-3 mr-1"
              buttonText="Back"
              onClick={decrement}
            />
            <MainButton
              className="mt-3 ml-1"
              buttonText="Next"
              onClick={increment}
            />
          </TabPanel>
          <TabPanel>
            <label className="form">
              <Heading as="h2" size="md">
                33. Please read this Privacy Notice and Q&A, which indicate how
                data is used as part of our process. After reading those
                documents, please indicate that you understand and accept them
                by selecting "I accept"..
              </Heading>

              <UnorderedList>
                <ListItem>
                  <Link
                    color="#4A90E2"
                    target="_blank"
                    href="https://drive.google.com/file/d/1fwoD7ZKVFPHbQtmdSoYyzqHsxBb1EPpa/view"
                    isExternal
                  >
                    Privacy Notice
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    color="#4A90E2"
                    target="_blank"
                    href="https://drive.google.com/file/d/1oRTCXXsOX0jGIaH4bL_S0vQClM5NH4iG/view"
                  >
                    Q&A
                  </Link>
                </ListItem>
              </UnorderedList>
            </label>
            <GenericRadio
              role="stage1question33"
              valueOne="accept"
              valueTwo="decline"
            />
            <br></br>
            <MainButton
              buttonText="Submit your application!"
              onClick={handleClick}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
