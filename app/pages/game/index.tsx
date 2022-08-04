import { Game } from "./presenter";
import { UnityApp, getUnityProvider } from "~/modules/unity";
import { useConst } from "@chakra-ui/react";

const Container = ({ unityApp }: { unityApp: UnityApp }) => {
  const unityProvider = useConst(() => getUnityProvider(unityApp));
  if (!unityProvider) throw new Error("Not Found");
  return (
    <>
      <Game unityProvider={unityProvider} />
    </>
  );
};

export default Container;
