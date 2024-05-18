import { Flex } from "@chakra-ui/react";
import ProjectElem from "../components/writing";

import project from "../data/project.json";

const ProjectPage = () => (
    <Flex direction="column" gap="3">
      {project.map(ProjectElem)}
    </Flex>
);

export default ProjectPage;
