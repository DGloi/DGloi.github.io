import { Flex, Text, Heading, Img } from "@chakra-ui/react";
import { BioContent } from "../types";

export const Bio = (content: BioContent) => (
  <Flex direction="column" alignItems="center" gap={5} py={5}>
    <Img
      src="bio.png"
      borderRadius="full"
      width={{ base: "30%", md: "40%", lg: "50%" }}
      maxWidth="250px"
      filter="grayscale(30%)"
      _hover={{
        filter: "grayscale(20%)",
      }}
    />
    <Flex direction="column" alignItems="center" textAlign="center" mt={5}>
      <Heading>{content.name}</Heading>
      <Text fontSize="lg">{content.title}</Text>
      <Text pt={5}>{content.tagline}</Text>
    </Flex>
  </Flex>
);

export default Bio;

