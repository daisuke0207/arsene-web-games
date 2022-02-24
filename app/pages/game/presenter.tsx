import { Box, Spacer, Flex } from "@chakra-ui/react";
import { Link } from "remix";
import { UnityComponent } from "~/components/unity/unity-component";
import { IconButton } from "@chakra-ui/react";
import { FullScreen } from "@icon-park/react";
import { UnityContext } from "react-unity-webgl";

export const Game = ({ unityContext }: { unityContext: UnityContext }) => {
  return (
    <Box mt="10" width="100%">
      <UnityComponent unityContext={unityContext} />
      <Flex width="100%" mt="3">
        <Spacer />
        <Link to={`?screen=full`}>
          <IconButton
            aria-label="off full screen"
            variant="ghost"
            isRound
            fontSize="20px"
            isDisabled
            icon={<FullScreen theme="outline" size="30" fill="#ffffff" />}
          />
        </Link>
      </Flex>
    </Box>
  );
};
