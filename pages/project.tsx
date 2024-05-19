import { Box, Flex } from "@chakra-ui/react";
import ProjectElem from "../components/project";
import projects from "../data/project.json";

const ProjectPage = () => (
  <Box>
    <Flex direction="column" gap="3">
      {projects.map(ProjectElem)}
    </Flex>
  </Box>
);

export default ProjectPage;