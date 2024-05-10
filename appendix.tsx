import { Link, useColorModeValue, useHighlight } from "@chakra-ui/react";

const Appendix = (text: string, appendix: Record<string, string>) => {
  const chunks = useHighlight({ text, query: Object.keys(appendix) });
  const color = useColorModeValue("gray.100", "gray.700");
  return chunks.map(({ match, text }) => {
    if (!match) return text;
    return (
      <Link
        rounded="sm"
        padding="0.1rem"
        background={color}
        key={text}
        href={appendix[text]}
        isExternal
      >
        {text}
      </Link>
    );
  });
};

export default Appendix;
