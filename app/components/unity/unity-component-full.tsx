import { Unity, IUnityProps } from "react-unity-webgl";
import { Box } from "@chakra-ui/react";

export const UnityComponent = ({
  unityProvider,
}: {
  unityProvider: IUnityProps["unityProvider"];
}) => {
  return (
    <Box>
      <Unity
        unityProvider={unityProvider}
        className="unity-component-full"
        tabIndex={1}
      />
    </Box>
  );
};
