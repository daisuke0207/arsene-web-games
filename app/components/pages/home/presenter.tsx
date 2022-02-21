import { Box, Heading } from "@chakra-ui/react";

import Game from "~/components/pages/game";

export const Home = () => {
  return (
    <Box>
      <Box my="10">
        <Heading as="h2">ゲーム</Heading>
      </Box>
      <Box>
        <Game />
      </Box>
    </Box>
  );
};
