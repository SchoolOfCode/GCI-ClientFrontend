import React, { useState } from "react";
import GenericInput from "../GenericInput";
import Dropdown from "../Dropdown";
import GenericTextarea from "../GenericTextarea";
import { MainButton } from "../MainButton";
import {
  Radio,
  RadioGroup,
  Image,
  Box,
  Link,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Stack,
} from "@chakra-ui/react";
import "./index.css";

export default function StageOne() {
  const [value, setValue] = useState("");

  return (
    <div>
      <br></br>
      <Heading as="h3" size="lg">
        For this stage, we will ask you to fill out a combined application
        form/demographics survey
      </Heading>
      <br></br>
      <Text>
        The information given will not be shared outside of the School of
        Code/Government partnership and will be for statistical purposes only.{" "}
      </Text>
      <br></br>
      <RadioGroup onChange={setValue} value={value}>
        <label className="form">
          <Text>
            The next bootcamp starts on 15th November 2021. To be eligible you
            must: *
          </Text>
          <UnorderedList>
            <ListItem>
              be able to attend remote lectures 9am-5pm on Monday-Friday for the
              duration of the 16 week course
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
        </label>
        <Stack spacing={5} direction="row">
          <Radio value="accept">I accept</Radio>
          <Radio value="decline">I don't accept</Radio>
        </Stack>
      </RadioGroup>
      <br></br>
      <GenericInput
        label="What is your first name?"
        placeholderText="Type your answer here..."
      />
      <br></br>
      <GenericInput
        label="What is your last name?"
        placeholderText="Type your answer here..."
      />
      <br></br>
      <GenericInput
        label="What is your email address?"
        placeholderText="name@example.com"
      />
      <br></br>
      <GenericInput
        label="What is your phone number?"
        placeholderText="12345 678 912"
      />
      <br></br>
      <GenericInput
        label="What is your date of birth (format dd/mm/yyyy)?"
        placeholderText="dd/mm/yyyy"
      />
      <br></br>
      <Dropdown
        label="What is your gender?"
        placeholderText="Please make your selection"
        first="Male"
        second="Female"
        third="Non-binary"
        fourth="Prefer not to say"
        fifth="Other"
      />
      <br></br>
      <Dropdown
        label="To which of the following groups do you feel you belong?"
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
      <GenericInput label="If 'Other' please specify..." isRequired={false} />
      <br></br>
      <GenericInput label="Where were you born? (City/Country)" />
      <br></br>
      <GenericInput label="What is your current Post Code?" />
      <br></br>
      <GenericInput
        label="What is your National Insurance number (if you have one)"
        isRequired={false}
      />
      <br></br>
      <Dropdown
        label="Do you have any long-standing illness, disability or infirmity?"
        first="yes"
        second="no"
      />
      <br></br>
      <GenericInput label="If 'yes' please specify..." isRequired={false} />
      <br></br>
      <Box className="box">
        <Dropdown
          label="Which region are your applying for?"
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
      <Dropdown
        label="What best describes your current situation?"
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
        label="If employed, what industry do you currently work in?"
        isRequired={false}
      />
      <br></br>
      <GenericInput
        label="If employed, what is your current annual income (£)?"
        isRequired={false}
      />
      <br></br>
      <GenericInput label="What is your current household annual income? (£)" />
      <br></br>
      <GenericInput label="What is your primary language?" />
      <br></br>
      <Dropdown
        label="What is your highest qualification in education?"
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
      <GenericInput label="If 'Other' please specify..." isRequired={false} />
      <br></br>
      <GenericInput
        label="If you have a university degree, what subject is it in?"
        isRequired={false}
      />
      <br></br>
      <Dropdown
        label="What is your martial status?"
        first="Single"
        second="Co-habiting"
        third="Married"
        fourth="Separated/Divorced"
        fifth="Widowed"
      />
      <br></br>
      <Dropdown label="Do you have any children?" first="Yes" second="No" />
      <br></br>
      <GenericInput label="If 'Yes' how many?" isRequired={false} />
      <br></br>
      <Dropdown
        label="Do you practice a religion and if so, which one?"
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
      <GenericInput label="If 'Other' please specify..." isRequired={false} />
      <br></br>
      <Dropdown
        label="What is your current housing status?"
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
      <GenericInput label="If 'Other' please specify..." isRequired={false} />
      <br></br>
      <GenericTextarea
        label="Why do you want to join the School of Code?"
        placeholderText="Type your answer here..."
      />
      <br></br>
      <Dropdown
        label="Where did you hear about School of Code?"
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
      <br></br>
      <RadioGroup onChange={setValue} value={value}>
        <label className="form">
          <Heading as="h2" size="md">
            Please read this Privacy Notice and Q&A, which indicate how data is
            used as part of our process. After reading those documents, please
            indicate that you understand and accept them by selecting "I
            accept"..
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
        <Stack spacing={5} direction="row">
          <Radio value="accept">I accept</Radio>
          <Radio value="decline">I don't accept</Radio>
        </Stack>
      </RadioGroup>

      <br></br>
      <MainButton
        buttonText="Submit"
        onClick={() => document.querySelector(".stage2").click()}
      />
    </div>
  );
}

// mainbutton onclick need to be added
