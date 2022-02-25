import Unity, { UnityContext } from "react-unity-webgl";
import { Box } from "@chakra-ui/react";

export const UnityComponent = ({
  unityContext,
}: {
  unityContext: UnityContext;
}) => {
  return (
    <Box>
      <Unity
        unityContext={unityContext}
        className="unity-component-full"
        tabIndex={1}
      />
    </Box>
  );
};
