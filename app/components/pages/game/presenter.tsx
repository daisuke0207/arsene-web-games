import { Box, Heading } from "@chakra-ui/react";
import { Link } from "remix";

type UnityGame = {
  slug: string;
  title: string;
  imagePath: string;
  imageAlt: string;
};

const GameCard = (unityGame: UnityGame) => {
  return (
    <Link to={unityGame.slug}>
      <Box p="5" boxShadow="0 1px 7px #4299E1">
        <Heading as="h4" isTruncated>
          {unityGame.title}
        </Heading>
      </Box>
    </Link>
  );
};

export const Game = () => {
  const typing: UnityGame = {
    slug: "/games/typing",
    title: "タイピング",
    imagePath: "",
    imageAlt: "",
  };

  return (
    <Box>
      <GameCard {...typing} />
    </Box>
  );
};
