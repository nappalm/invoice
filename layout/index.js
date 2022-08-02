import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import BackgroundSVG from "../components/_bgSvg";
import { renderToStaticMarkup } from "react-dom/server";

const Main = ({ children }) => {
  const svgString = encodeURIComponent(renderToStaticMarkup(<BackgroundSVG />));

  return (
    <Box
      backgroundPosition="top"
      backgroundRepeat="no-repeat"
      backgroundSize="100% auto"
      backgroundImage={`url("data:image/svg+xml,${svgString}")`}
      as="main"
      pb={8}
    >
      <Head>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="Invoice" />
        <meta name="description" content="Invoie App" />
        <meta name="author" content="Manuel Morales" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.jpg" />
        <title>Invoice App</title>
      </Head>
      <Container maxW={["100%", "100%", "container.md"]} pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
