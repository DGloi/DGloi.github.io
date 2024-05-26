import { Box, Image, Text, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, IconButton, Flex, useColorModeValue, useTheme } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import galleryData from "../data/gallery.json";

interface GalleryDetailProps {
  isOpen: boolean;
  onClose: () => void;
  currentImageIndex: number;
  nextImage: () => void;
  previousImage: () => void;
}

const GalleryDetail = ({ isOpen, onClose, currentImageIndex, nextImage, previousImage }: GalleryDetailProps) => {
  const imageData = galleryData[currentImageIndex];
  const theme = useTheme();
  const bg = useColorModeValue(theme.colors.light[800], theme.colors.dark[800]);
  const iconBg = useColorModeValue("rgba(0, 0, 0, 0.1)", "rgba(255, 255, 255, 0.1)");
  const iconColor = useColorModeValue(theme.colors.gray[800], theme.colors.white);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered>
      <ModalOverlay />
      <ModalContent maxW="100vw" maxH="100vh" bg={bg}>
        <ModalCloseButton zIndex="2" />
        <ModalBody display="flex" justifyContent="center" alignItems="center" position="relative" p={2}>
          <Flex w="100%" h="100%" alignItems="center" justifyContent="center">
            <Flex direction="column" alignItems="center" justifyContent="center" p={2}>
              <IconButton
                aria-label="Previous Image"
                icon={<FaChevronLeft />}
                onClick={previousImage}
                zIndex="1"
                bg={iconBg}
                color={iconColor}
                _hover={{ bg: "rgba(0, 0, 0, 0.3)" }}
                mb={2}
              />
            </Flex>
            <Flex
              direction={{ base: "column", xl: "row" }}
              w="100%"
              h="100%"
              alignItems="center"
              justifyContent="center"
            >
              <Box flex={{ base: "1", xl: "9" }} display="flex" justifyContent="center">
                <Image
                  src={imageData.src}
                  alt={imageData.legend}
                  maxH={{ base: "60vh", lg: "90vh" }}
                  maxW={{ base: "90vw", lg: "90%" }}
                  objectFit="contain"
                />
              </Box>
              <Box
                flex={{ base: "1", lg: "1" }}
                p={2}
                overflowY="auto"
                maxH="90vh"
                minW={{ base: "100%", lg: "300px" }}
                wordBreak="break-word"
              >
                <Text fontSize="small" fontWeight="bold" mb={2}>
                  {imageData.legend}
                </Text>
                <Text fontSize="small">
                  This is a detailed description for the image. You can add more text here to describe the image in detail.
                </Text>
              </Box>
            </Flex>
            <Flex direction="column" alignItems="center" justifyContent="center" p={2}>
              <IconButton
                aria-label="Next Image"
                icon={<FaChevronRight />}
                onClick={nextImage}
                zIndex="1"
                bg={iconBg}
                color={iconColor}
                _hover={{ bg: "rgba(0, 0, 0, 0.3)" }}
                mb={2}
              />
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default GalleryDetail;
