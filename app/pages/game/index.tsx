import { Game } from "./presenter";
import { UnityApp, getUnityContext } from "~/modules/unity";
import { useConst } from "@chakra-ui/react";

const Container = ({ unityApp }: { unityApp: UnityApp }) => {
  const unityContext = useConst(() => getUnityContext(unityApp));
  if (!unityContext) throw new Error("Not Found");
  return (
    <>
      <Game unityContext={unityContext} />
    </>
  );
};

export default Container;
