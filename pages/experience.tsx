import { Box, Flex } from "@chakra-ui/react";
import ExperienceElem from "../components/experience";
import experiences from "../data/experience.json";

const ExperiencePage = () => (
  <Box maxW="container.xl" mx="auto" px={4}>
    <Flex direction="column" gap={8}>
      {experiences.map((experience) => (
        <ExperienceElem key={experience.name} {...experience} />
      ))}
    </Flex>
  </Box>
);

export default ExperiencePage;
