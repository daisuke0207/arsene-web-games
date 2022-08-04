import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Link } from "@remix-run/react";

import type { UnityApp } from "~/modules/unity";

type Props = {
  unityApp: UnityApp;
};

export const UnityAppCard: React.FC<Props> = ({ unityApp }) => {
  return (
    <Box>
      <Link to={`/games/${unityApp.slug}`}>
        <Box p="5" boxShadow="0 1px 7px #4299E1">
          <Heading as="h4" noOfLines={1}>
            {unityApp.title}
          </Heading>
        </Box>
      </Link>
    </Box>
  );
};
