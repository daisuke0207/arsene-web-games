import { useUnityContext } from "react-unity-webgl";
import type { IUnityConfig } from "react-unity-webgl";

type device = "pc" | "mobile";

export type UnityApp = {
  title: string;
  description: string;
  slug: string;
  build: IUnityConfig;
  supportDevice: Array<device>;
  image?: string;
  tags?: Array<string>;
};

export const UnityAppNames = {
  Typing: "Typing",
};

const UnityApps: Array<UnityApp> = [
  {
    title: "タイピング",
    description:
      "表示される文字をタイピングしていきます。エンドレスモードで暇つぶしのタイピング練習をしよう",
    slug: "typing",
    supportDevice: ["pc"],
    image: "",
    tags: [],
    build: {
      loaderUrl: "/unity/typing/build/Typing.loader.js",
      dataUrl: "/unity/typing/build/Typing.data",
      frameworkUrl: "/unity/typing/build/Typing.framework.js",
      codeUrl: "/unity/typing/build/Typing.wasm",
      productName: "Typing",
      productVersion: "1.0.0",
      companyName: "Arsene",
    },
  },
];

export const getUnityApps = () => {
  const unityApps = UnityApps;
  return unityApps;
};

export const getUnityApp = (slug: string) => {
  const app = UnityApps.find((app) => app.slug === slug);
  if (!app) return;

  return app;
};

export const getUnityProvider = (unityApp: UnityApp) => {
  const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
      ...unityApp.build,
      webglContextAttributes: {
        preserveDrawingBuffer: true,
      },
    });
  if (!unityProvider) return;

  return unityProvider;
};
