import { Outlet, Link } from "@remix-run/react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";

import type { JsonLd } from "~/types";
import { websiteMeta } from "~/utils/meta";
import { GameOutlet } from "~/pages/game-outlet/presenter";

export const meta: MetaFunction = (props) => {
  const meta = websiteMeta({
    pathname: props.location.pathname,
    title: "ゲーム一覧",
    description: "一覧からゲームを探す/試す",
    keywords: ["ゲーム一覧", "Webゲーム"],
  });

  return {
    ...meta,
  };
};

export const loader: LoaderFunction = async () => {
  const curJsonLd: JsonLd = {
    pathname: "/games",
    description: "ゲームを探す/試す",
    keywords: ["ゲーム一覧", "Webゲーム"],
  };

  return { jsonLd: curJsonLd };
};

export default function Game() {
  return (
    <GameOutlet>
      <Outlet />
    </GameOutlet>
  );
}

export const handle = {
  breadcrumb: () => <Link to="/games">Game</Link>,
};
