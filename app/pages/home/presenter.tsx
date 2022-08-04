import {
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { UnityApp } from "~/modules/unity";

import { UnityAppCard } from "~/components/unity";

type Props = {
  unityApps: Array<UnityApp>;
};

export const Home: React.FC<Props> = ({ unityApps }) => {
  return (
    <Box>
      <Tabs>
        <TabList>
          <Tab>ゲーム一覧</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box p="10">
              {unityApps.map((app: UnityApp) => {
                return (
                  <Box key={app.slug}>
                    <UnityAppCard unityApp={app} />
                  </Box>
                );
              })}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
