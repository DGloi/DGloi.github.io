import { Text, Flex, Link } from "@chakra-ui/react";
import { Content } from "../types";

const ProjectElem = (content: Content) => (
  <Flex key={content.title} direction="row">
    <Flex direction="column" width="75%">
      <Link href={content.link} isExternal>
        <Text as="b">{content.title}</Text>
      </Link>
      <Text fontSize="sm">{content.description}</Text>
    </Flex>
    <Flex direction="column" width="25%">
      <Text fontSize="x-small" align="right">{content.date}</Text>
    </Flex>
  </Flex>
);

export default ProjectElem;
