import { Games } from "./presenter";
import { getUnityApps } from "~/modules/unity";

const Container = () => {
  const unityApps = getUnityApps();
  return (
    <>
      <Games unityApps={unityApps} />
    </>
  );
};

export default Container;
