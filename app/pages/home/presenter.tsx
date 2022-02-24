import { Box, Heading } from "@chakra-ui/react";
import { UnityApp } from "~/modules/unity";

import { UnityAppCard } from "~/components/unity";

type Props = {
  unityApps: Array<UnityApp>;
};

export const Home: React.VFC<Props> = ({ unityApps }) => {
  return (
    <Box>
      <Box my="10">
        <Heading as="h2">ゲーム</Heading>
      </Box>
      <Box>
        {unityApps.map((app: UnityApp) => {
          return (
            <Box key={app.slug}>
              <UnityAppCard unityApp={app} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
