import type { ReactNode } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import Header from "~/components/common/header";
import Footer from "~/components/common/footer";

export const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <Grid
      templateRows="100px 1fr 100px"
      minH="100vh"
      minW="100%"
      bg="bg.primary"
      color="text.primary"
      px="5"
    >
      <GridItem>
        <Header />
      </GridItem>
      <GridItem w="100%" h="100%" maxW="800px" m="0 auto" py="10">
        {children}
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </Grid>
  );
};
