import { Box, Flex, SimpleGrid, Text, Image, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import GalleryDetail from "./gallerydetails";
import galleryData from "../data/gallery.json";

const GalleryElem = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openCarousel = (index: number) => {
    setCurrentImageIndex(index);
    onOpen();
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryData.length) % galleryData.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryData.length);
  };

  return (
    <Box maxW="container.xl" mx="auto" px={4}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
        {galleryData.map((image, index) => (
          <Flex key={index} direction="column" alignItems="center" onClick={() => openCarousel(index)} cursor="pointer">
            <Image
              src={image.src}
              alt={image.legend}
              borderRadius="md"
              boxSize="200px" // Adjust the size as needed
              objectFit="cover"
            />
            <Text mt={2}>{image.legend}</Text>
          </Flex>
        ))}
      </SimpleGrid>
      <GalleryDetail
        currentImageIndex={currentImageIndex}
        isOpen={isOpen}
        onClose={onClose}
        previousImage={previousImage}
        nextImage={nextImage}
      />
    </Box>
  );
};

export default GalleryElem;
