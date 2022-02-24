import { useMemo } from "react";
import { Game } from "./presenter";
import { UnityApp, getUnityContext } from "~/modules/unity";

const Container = ({ unityApp }: { unityApp: UnityApp }) => {
  const unityContext = useMemo(() => getUnityContext(unityApp), []);
  if (!unityContext) throw new Error("Not Found");
  return (
    <>
      <Game unityContext={unityContext} />
    </>
  );
};

export default Container;
