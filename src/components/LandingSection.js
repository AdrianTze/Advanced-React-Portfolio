import React from "react";
import { Avatar, AvatarBadge, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Adrian Sim!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const avatar_name = "Adrian";
const avatar_size = "2xl";
const avatar_src =
  "https://media.licdn.com/dms/image/D5603AQHQsDpRKIRpFw/profile-displayphoto-shrink_800_800/0/1682901916730?e=1692230400&v=beta&t=VcxEsm_Qc40MokzQgT8V2f71lAO19Vl9CmNlQwMlaPQ";
const avatar_bg = "green.500";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#C09F80"
  >
    <VStack>
      <Avatar
        bg={avatar_bg}
        name={avatar_name}
        size={avatar_size}
        src={avatar_src}
      >
        {/* <AvatarBadge boxSize="1.25em" bg="green.500" /> */}
      </Avatar>
      <Heading as="h6" size="xs" color={"whiteAlpha.800"}>
        {greeting}
      </Heading>
      <br></br>
      <br></br>
      <Heading as="h1" size="lg" color={"whiteAlpha.800"}>
        {bio1}
      </Heading>
      <Heading as="h1" size="lg" color={"whiteAlpha.800"}>
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
