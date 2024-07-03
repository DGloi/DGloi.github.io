import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "dark.800" : "light.800",
        color: props.colorMode === "dark" ? "dark.900" : "light.900",
      },
      button: {
        shadow: "base",
        rounded: "md",
      },
    }),
  },
  colors: {
    light: {
      50: "#e5f2e9",
      100: "#cce6d4",
      200: "#b2d9be",
      300: "#99ccaa",
      400: "#80bf95",
      500: "#9fc9af",
      600: "#339966",
      700: "#26734d",
      800: "#b3adf7",
      900: "#000000",
    },
    dark: {
      50: "#e6f2ed",
      100: "#cce6db",
      200: "#b3d9c8",
      300: "#99ccba",
      400: "#80bf95",
      500: "#66b377",
      600: "#4da663",
      700: "#33994e",
      800: "#390260", 
      900: "#ffffff",
    },
  },
  components: {
    Button: {
      baseStyle: (props) => ({
        bg: props.colorMode === "dark" ? "dark.900" : "light.900",
        color: props.colorMode === "dark" ? "dark.900" : "light.900",
        _hover: {
          bg: props.colorMode === "dark" ? "dark.400" : "light.700",
        },
      }),
    },
    Box: {
      variants: {
        dot: (props) => ({

          bg: props.colorMode === "dark" ? "dark.900" : "light.900",
        }),
      },
    },
  },
});

export default theme;
