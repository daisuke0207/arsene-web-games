import Unity, { UnityContext } from "react-unity-webgl";
import { Box, Progress } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { UnityAppNames } from "~/modules/unity";

export const UnityComponent = ({
  unityContext,
  width,
  height,
}: {
  unityContext: UnityContext;
  width?: string;
  height?: string;
}) => {
  const [progression, setProgression] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    unityContext.on("progress", function (progression) {
      setProgression(progression);
    });
    unityContext.on("loaded", function () {
      setIsLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (unityContext.unityConfig.productName == UnityAppNames.Typing) {
      const onlyTextView = () => {
        unityContext.send("TypingManager", "SetOnlyTextView");
      };
      onlyTextView();
    }
  }, [isLoaded]);

  return (
    <Box>
      {!isLoaded && <Progress my="3" size="md" value={progression * 100} />}
      <Box w={width} height={height} boxShadow="0 1px 7px #4299E1">
        <Unity
          unityContext={unityContext}
          className="unity-component"
          tabIndex={1}
        />
      </Box>
    </Box>
  );
};
