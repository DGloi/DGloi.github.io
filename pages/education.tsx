import { Box, Flex } from "@chakra-ui/react";
import EducationElem from "../components/education";
import educations from "../data/education.json";

const EducationPage = () => (
  <Box maxW="container.xl" mx="auto" px={4} >
    <Flex direction="column" gap={8}>
      {educations.map((education) => (
        <EducationElem key={education.name} {...education} />
      ))}
    </Flex>
  </Box>
);

export default EducationPage;
