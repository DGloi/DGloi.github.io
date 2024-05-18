import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";
import { ChakraProvider, Container, Spacer } from "@chakra-ui/react";
import theme from "../theme";
import Navbar from "../components/navbar";
import Edit from "../components/edit";
import Footer from "../components/footer";
import navbar from "../data/navbar.json";
import bio from "../data/bio.json";
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>{`${bio.name} - Developer`}</title>
        <link rel="icon" type="image/svg+xml" href="/home.svg" />
      </Head>
      <Container  maxW="container.md" px={4} marginBottom="10">
        {Navbar(navbar)}
        <Component {...pageProps} />
        {Edit()}
        <Footer /> 
      </Container>
      <Analytics />
    </ChakraProvider>
  );
};

export default App;
