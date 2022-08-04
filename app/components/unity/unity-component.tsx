import { Unity, IUnityProps } from "react-unity-webgl";
import { Box, Progress } from "@chakra-ui/react";
import { useState } from "react";
// import { UnityAppNames } from "~/modules/unity";

export const UnityComponent = ({
  unityProvider,
  width,
  height,
}: {
  unityProvider: IUnityProps["unityProvider"];
  width?: string;
  height?: string;
}) => {
  const [progression, setProgression] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   unityContext.on("progress", function (progression) {
  //     setProgression(progression);
  //   });
  //   unityContext.on("loaded", function () {
  //     setIsLoaded(true);
  //   });
  // }, []);

  // useEffect(() => {
  //   if (unityProvider.unityConfig.productName == UnityAppNames.Typing) {
  // const onlyTextView = () => {
  // unityProvider.send("TypingManager", "SetOnlyTextView");
  // };
  // onlyTextView();
  // }
  // }, [isLoaded]);

  return (
    <Box>
      {!isLoaded && <Progress my="3" size="md" value={progression * 100} />}
      <Box w={width} height={height} boxShadow="0 1px 7px #4299E1">
        <Unity
          unityProvider={unityProvider}
          className="unity-component"
          tabIndex={1}
        />
      </Box>
    </Box>
  );
};
