import Unity, { UnityContext } from "react-unity-webgl";
import { Box } from "@chakra-ui/react";

export const UnityComponent = ({
  unityContext,
  width,
  height,
}: {
  unityContext: UnityContext;
  width?: string;
  height?: string;
}) => {
  return (
    <Box w={width} height={height} boxShadow="0 1px 7px #4299E1">
      <Unity unityContext={unityContext} className="unity-component" />
    </Box>
  );
};
