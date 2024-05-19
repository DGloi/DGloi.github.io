import NextLink from "next/link";
import { useRouter } from "next/router";
import { HStack, useColorMode, Spacer, Button, Image } from "@chakra-ui/react";
import { NavPage } from "../types";

const NavElem = (navPage: NavPage) => {
  const router = useRouter();
  const isActive = router.pathname === navPage.link;

  return (
    <NextLink href={navPage.link} key={navPage.text} passHref>
      <Button
        shadow={isActive ? "md" : "base"}
        transform={isActive ? "scale(1.1)" : "scale(1)"}
      >
        {navPage.text}
      </Button>
    </NextLink>
  );
};

const ToggleDarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconUrl = colorMode === 'dark' ? '/logos/sun.svg' : '/logos/moon.svg';  // URLs from the public directory

  return (
    <Button onClick={toggleColorMode}>
      <Image src={iconUrl} alt={colorMode === 'dark' ? "Sun Icon" : "Moon Icon"} boxSize="4" />
    </Button>
  );
};

const Navbar = (navPages: NavPage[]) => {
  return (
    <HStack paddingY="5" wrap="wrap" gap="3">
      {navPages.map(NavElem)}
      <Spacer />
      <ToggleDarkModeButton />
    </HStack>
  );
};

export default Navbar;
