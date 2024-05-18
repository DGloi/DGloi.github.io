import { Box, Text, Stack, Center } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={6} mt={10}>
      <Center mb={4}>
        <Stack direction="row" spacing={4}>
          <Box w={2} h={2} bg="white" borderRadius="100%" />
          <Box w={2} h={2} bg="white" borderRadius="100%" />
          <Box w={2} h={2} bg="white" borderRadius="100%" />
        </Stack>
      </Center>
      <Center>
        <Text fontSize="xs"> &reg; {new Date().getFullYear()} Dorian Gloinec</Text>
      </Center>
    </Box>
  );
};

export default Footer;
