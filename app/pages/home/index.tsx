import { Home } from "./presenter";
import { getUnityApps } from "~/modules/unity";

const Container = () => {
  const unityApps = getUnityApps();

  return <Home unityApps={unityApps} />;
};

export default Container;
