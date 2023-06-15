import {
  Heading,
  HStack,
  Image,
  Text,
  useDisclosure,
  Button,
  VStack,
  Collapse,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  const { isOpen, onToggle } = useDisclosure();

  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <>
      <VStack>
        <Button w="500px" onClick={onToggle}>
          Click Me
        </Button>
        <Collapse in={isOpen} animateOpacity>
          <VStack borderRadius={"lg"} bg="white" w="500px" h={470}>
            <Image
              boxSize={"lg"}
              src={imageSrc}
              alt={description}
              borderRadius={"lg"}
            />
            <VStack py={2} px={4} alignItems={"flex-start"}>
              <Heading as="h6" size="sm" color="black">
                {title}
              </Heading>
              <Text color="blackAlpha.700">{description}</Text>
              <HStack>
                <Text fontSize="md" color="black">
                  See more
                </Text>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="1x"
                  color="black"
                  bounce
                />
              </HStack>
            </VStack>
          </VStack>
        </Collapse>
      </VStack>
    </>
  );
};

export default Card;
