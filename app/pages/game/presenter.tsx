import { Box, Spacer, Flex, Tooltip, Image, Text } from "@chakra-ui/react";
import { UnityComponent } from "~/components/unity/unity-component";
import { IconButton } from "@chakra-ui/react";
import { FullScreen, ScreenshotOne } from "@icon-park/react";
import { UnityContext } from "react-unity-webgl";
import { useState } from "react";

export const Game = ({ unityContext }: { unityContext: UnityContext }) => {
  const [screenshot, setScreenshot] = useState("");

  const handleFullscreen = () => {
    unityContext.setFullscreen(true);
  };

  const handleTakeScreenshot = () => {
    const data = unityContext.takeScreenshot("image/jpeg", 1.0);
    if (data) {
      setScreenshot(data);
    }
  };

  return (
    <Box mt="10" width="100%">
      <UnityComponent unityContext={unityContext} />
      <Flex width="100%" mt="3" gap="1">
        <Spacer />
        <Tooltip label="スクリーンショット">
          <IconButton
            aria-label="スクリーンショット"
            variant="ghost"
            isRound
            fontSize="20px"
            icon={<ScreenshotOne theme="outline" size="30" fill="#ffffff" />}
            onClick={handleTakeScreenshot}
          />
        </Tooltip>
        <Tooltip label="フルスクリーン">
          <IconButton
            aria-label="full screen"
            variant="ghost"
            isRound
            fontSize="20px"
            icon={<FullScreen theme="outline" size="30" fill="#ffffff" />}
            onClick={handleFullscreen}
          />
        </Tooltip>
      </Flex>
      {screenshot && (
        <Box my="10">
          <Text fontSize="lg">スクリーンショット画像</Text>
          <Image src={screenshot} alt="ScreenShot" />
        </Box>
      )}
    </Box>
  );
};
