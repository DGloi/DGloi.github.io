import { Text, Flex, Img, Link } from "@chakra-ui/react";
import { Education, Name } from "../types";

import appendix from "../data/appendix.json";
import Appendix from "./appendix";

const EducationName = (name: Name) => {
  return (
    <Flex key={name.title + name.end} direction="row">
      <Flex direction="column" width="80%">
        <Text fontSize="md" as="b">
          {name.title}
        </Text>
        <Text fontSize="sm">{Appendix(name.description ?? "", appendix)}</Text>
      </Flex>
      <Flex direction="column" width="20%">
        <Text fontSize="x-small" align="right">
          {name.end}
        </Text>
        <Text fontSize="x-small" align="right">
          {name.start}
        </Text>
      </Flex>
    </Flex>
  );
};

const EducationElem = (education: Education) => {
  return (
    <Flex direction="row" gap="5" key={education.name}>
      <Flex direction="column" alignItems="center" maxWidth="20">
        <Link href={education.link} textAlign="center" isExternal>
          <Img
            bg="white"
            padding="3"
            src={`logos/${education.logo}`}
            objectFit="scale-down"
            maxWidth="20"
            minHeight="20"
            rounded="lg"
          />
          <Text as="b">{education.name}</Text>
        </Link>
        <Text marginY="-1" fontSize="x-small">
          {education.location}
        </Text>
      </Flex>
      <Flex direction="column" width="100%" gap="3">
        {education.names.map(EducationName)}
      </Flex>
    </Flex>
  );
};

export default EducationElem;
