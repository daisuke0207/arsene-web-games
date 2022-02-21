import Unity, { UnityContext } from "react-unity-webgl";
import { Box, Heading } from "@chakra-ui/react";
import type { LoaderFunction, MetaFunction } from "remix";

import type { JsonLd } from "~/types";
import { websiteMeta } from "~/utils/meta";

const unityContext = new UnityContext({
  loaderUrl: "/unity/typing-focus/build/TypingFocus.loader.js",
  dataUrl: "/unity/typing-focus/build/TypingFocus.data",
  frameworkUrl: "/unity/typing-focus/build/TypingFocus.framework.js",
  codeUrl: "/unity/typing-focus/build/TypingFocus.wasm",
});

export const meta: MetaFunction = (props) => {
  const meta = websiteMeta({
    pathname: props.location.pathname,
    title: "タイピングをプレイ",
    description:
      "エンドレスでタイピング練習をしよう。表示されるカタカナをタイピングしていくゲームです。",
    keywords: ["タイピング", "typing", "タイピング練習"],
  });

  return {
    ...meta,
  };
};

export const loader: LoaderFunction = async () => {
  const jsonLdData: JsonLd = {
    pathname: "/games/typing",
    description:
      "エンドレスでタイピング練習をしよう。表示されるカタカナをタイピングしていくゲームです。",
    keywords: ["タイピング", "typing", "タイピング練習"],
  };

  return { jsonLd: jsonLdData };
};

export default function Typing() {
  return (
    <Box mt="20px">
      <Box mb="6">
        <Heading size="md">タイピング</Heading>
      </Box>
      <Box boxShadow="0 1px 7px #4299E1">
        <Unity unityContext={unityContext} className="unity-component" />
      </Box>
    </Box>
  );
}
