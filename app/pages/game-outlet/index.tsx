import { GameOutlet } from "./presenter";
import { getUnityApps } from "~/modules/unity";

const Container = () => {
  const unityApps = getUnityApps();
  return (
    <>
      <GameOutlet />
    </>
  );
};

export default Container;
