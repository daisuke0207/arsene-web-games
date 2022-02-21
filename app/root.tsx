import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  // useMatches,
  // useLoaderData,
} from "remix";
import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import { ChakraProvider } from "@chakra-ui/react";
// import { useLocation } from "react-router-dom";

import styles from "~/styles/index.css";
import { theme } from "~/styles/theme";
import { siteConfig } from "~/constants/siteConfig";
import { websiteMeta } from "~/utils/meta"; // jsonLd
import Layout from "~/components/common/layout";

export const meta: MetaFunction = (props) => {
  const meta = websiteMeta({ pathname: props.location.pathname });

  return {
    ...meta,
  };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: siteConfig.icon,
      type: "image/svg+xml",
    },
    { rel: "stylesheet", href: styles },
    {
      rel: "canonical",
      href: siteConfig.url,
    },
  ];
};

export const loader: LoaderFunction = async () => {
  return {
    ENV: {
      TAG_MANAGER_ID: process.env.TAG_MANAGER_ID,
    },
  };
};

export default function App() {
  // const data = useLoaderData();
  // const matches = useMatches();
  // const location = useLocation();

  // const loadJsonLd = matches.reverse().find((match) => match?.data?.jsonLd)
  //   ?.data.jsonLd;
  // const description = loadJsonLd?.description ? loadJsonLd.description : "";
  // const imagePath = loadJsonLd?.image ? loadJsonLd.image : "";
  // const keywords = loadJsonLd?.keywords ? loadJsonLd.keywords : [];

  // const json = jsonLd({
  //   pathname: location.pathname,
  //   description: description,
  //   image: imagePath,
  //   keywords: keywords,
  // });

  return (
    <html lang={siteConfig.lang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {/* <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${data.ENV.TAG_MANAGER_ID}');`,
          }}
        ></script>
        <script suppressHydrationWarning type="application/ld+json">
          {json}
        </script> */}
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Layout>
            <Outlet />
          </Layout>
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
