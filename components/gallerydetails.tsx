import { useState } from 'react';
import { Box, Image, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, IconButton } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import galleryData from "../data/gallery.json";
import { GalleryItem } from "../types";



const GalleryDetail = () => {
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
    <>
      {galleryData.map((image: GalleryItem, index: number) => (
        <Box key={index} onClick={() => openCarousel(index)} cursor="pointer">
          <Image src={image.src} title={image.title} borderRadius="md" />
          <Text mt={2}>{image.legend}</Text>
        </Box>
      ))}

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Box position="relative">
              <IconButton
                aria-label="Previous Image"
                icon={<FaChevronLeft />}
                position="absolute"
                left="0"
                top="50%"
                transform="translateY(-50%)"
                onClick={previousImage}
                zIndex="1"
              />
              <Image src={galleryData[currentImageIndex].src} alt={galleryData[currentImageIndex].legend} borderRadius="md" />
              <IconButton
                aria-label="Next Image"
                icon={<FaChevronRight />}
                position="absolute"
                right="0"
                top="50%"
                transform="translateY(-50%)"
                onClick={nextImage}
                zIndex="1"
              />
            </Box>
            <Text mt={2} textAlign="center">{galleryData[currentImageIndex].legend}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GalleryDetail;
