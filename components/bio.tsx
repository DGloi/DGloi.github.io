import { Flex, Text, Heading, Img } from "@chakra-ui/react";
import { BioContent } from "../types";

export const Bio = (content: BioContent) => (
    <Flex direction="row" gap="100" py="5">
      <Flex direction="column">
        <Heading>{content.name}</Heading>
        <Text fontSize="lg">{content.title}</Text>
        <Text paddingTop="5">{content.tagline}</Text>
      </Flex>
      <Img
        src="bio.png"
        borderRadius='full'
        boxSize="250px"
        filter="grayscale(30%)"
        _hover={{
          filter: "grayscale(20%)",
        }}
      />
    </Flex>
)

export default Bio;
