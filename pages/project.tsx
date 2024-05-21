import { Box, Flex } from "@chakra-ui/react";
import ProjectElem from "../components/project";
import projects from "../data/project.json";

const ProjectPage = () => (
  <Box maxW="container.xl" mx="auto" px={4}>
    <Flex direction="column" gap="3">
    {projects.map((project) => (
        <ProjectElem key={project.title} {...project} />
      ))}

    </Flex>
  </Box>
);

export default ProjectPage;
