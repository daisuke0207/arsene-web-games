import { UnityContext } from "react-unity-webgl";
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
      loaderUrl: "/unity/typing-focus/build/TypingFocus.loader.js",
      dataUrl: "/unity/typing-focus/build/TypingFocus.data",
      frameworkUrl: "/unity/typing-focus/build/TypingFocus.framework.js",
      codeUrl: "/unity/typing-focus/build/TypingFocus.wasm",
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

export const getUnityContext = (unityApp: UnityApp) => {
  const unityContext = new UnityContext(unityApp.build);
  if (!unityContext) return;

  return unityContext;
};
