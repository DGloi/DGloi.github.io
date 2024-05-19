import { Text, Flex, Img, Link } from "@chakra-ui/react";
import { Education, Detail } from "../types";
import appendix from "../data/appendix.json";
import Appendix from "./appendix";

const EducationDetail = (detail: Detail) => {
  return (
    <Flex key={detail.title + detail.end} direction="row">
      <Flex direction="column" width="80%">
        <Text fontSize="md" as="b">
          {detail.title}
        </Text>
        <Text fontSize="sm">{Appendix(detail.description ?? "", appendix)}</Text>
        <br />
      </Flex>
      <Flex direction="column" width="20%">
        <Text fontSize="small" align="right">
          {detail.end}
        </Text>
        <Text fontSize="small" align="right">
          {detail.start}
        </Text>
      </Flex>
    </Flex>
  );
};

const EducationElem = (education: Education) => {
  return (
    <Flex direction="row" gap="5" key={education.name} alignItems="flex-start">
      <Flex direction="column" alignItems="center" maxWidth="20">
        <Link href={education.link} textAlign="center" isExternal>
          <Img
            bg="white"
            padding="0.5"
            src={`logos/${education.logo}`}
            objectFit="scale-down"
            maxWidth="20"
            minHeight="20"
            rounded="lg"
          />
          <Text as="b" fontSize="medium">{education.name}</Text>
        </Link>
        <Text marginY="" fontSize="small" textAlign="center">
          {education.location}
        </Text>
      </Flex>
      <Flex direction="column" width="100%" gap="4">
        {education.details.map(EducationDetail)}
      </Flex>
    </Flex>
  );
};

export default EducationElem;
