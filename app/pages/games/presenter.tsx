import { Box } from "@chakra-ui/react";
import { UnityApp } from "~/modules/unity";
import { UnityAppCard } from "~/components/unity";

type Props = {
  unityApps: Array<UnityApp>;
};

export const Games: React.FC<Props> = ({ unityApps }) => {
  return (
    <Box>
      {unityApps.map((app: UnityApp) => {
        return (
          <Box key={app.slug}>
            <UnityAppCard unityApp={app} />
          </Box>
        );
      })}
    </Box>
  );
};
