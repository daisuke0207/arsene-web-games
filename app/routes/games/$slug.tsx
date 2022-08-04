import { useLoaderData, Link } from "@remix-run/react";
import type { MetaFunction, LoaderFunction } from "@remix-run/node";

import { websiteMeta } from "~/utils/meta";
import GamePage from "~/pages/game";
import { getUnityApp } from "~/modules/unity";

export const meta: MetaFunction = ({ data, location }) => {
  const keywords = data?.unityApp?.tags ? data?.unityApp?.tags : [];
  if (data?.unityApp?.title) keywords.concat([data.unityApp.title]);
  const meta = websiteMeta({
    pathname: location.pathname,
    title: data?.unityApp?.title || "ゲーム",
    description: data?.unityApp?.description || "",
    keywords: keywords,
  });

  return {
    ...meta,
  };
};

export const loader: LoaderFunction = async ({ params }) => {
  const slug = params.slug || "";
  const unityApp = getUnityApp(slug);
  if (!unityApp) {
    throw new Error("Not Found");
  }

  return { unityApp };
};

export default function Game() {
  const data = useLoaderData();

  return <GamePage unityApp={data.unityApp} />;
}

export const handle = {
  breadcrumb: ({ slug }: { slug: string }) => (
    <Link to={`/games/${slug}`}>{slug}</Link>
  ),
};
