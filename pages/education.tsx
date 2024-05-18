import { Box, Flex } from "@chakra-ui/react";
import EducationElem from "../components/education";
import educations from "../data/education.json";

const EducationPage = () => (
  <Box>
    <Flex direction="column" gap="8">
      {educations.map(EducationElem)}
    </Flex>
  </Box>
);

export default EducationElem;
