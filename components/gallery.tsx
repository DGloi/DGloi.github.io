import { Box, Flex, SimpleGrid, Text, Image } from "@chakra-ui/react";
import GalleryDetail from "./gallerydetails";
import galleryData from "../data/gallery.json";

const GalleryElem = () => {
  return (
    <Box maxW="container.xl" mx="auto" px={4}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
        {galleryData.map((image, index) => (
          <Flex key={index} direction="column" alignItems="center">
            <Image src={image.src} legend={image.legend} borderRadius="md" />
            <Text mt={2}>{image.legend}</Text>
          </Flex>
        ))}
      </SimpleGrid>
      <GalleryDetail />
    </Box>
  );
};

export default GalleryElem;
