import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
  useLoaderData,
  useCatch,
} from "remix";
import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import { ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { Error as ErrorIcon } from "@icon-park/react";

import styles from "~/styles/index.css";
import { theme } from "~/styles/theme";
import { siteConfig } from "~/constants/siteConfig";
import { websiteMeta, jsonLd } from "~/utils/meta";
import Layout from "~/components/common/layout";
import NoneLayout from "~/components/common/none-layout";
import FullLayout from "~/components/common/full-layout";

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

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  return {
    ENV: {
      TAG_MANAGER_ID: process.env.TAG_MANAGER_ID,
    },
    searchParams,
  };
};

export default function App() {
  const data = useLoaderData();
  const matches = useMatches();
  const location = useLocation();

  const layoutType: "none" | "default" | "full" =
    matches.reverse().find((match) => match?.data?.layoutType)?.data
      ?.layoutType || "default";

  let LayoutProvider = Layout;
  if (layoutType === "none") {
    LayoutProvider = NoneLayout;
  } else if (layoutType === "full") {
    LayoutProvider = FullLayout;
  }

  const loadJsonLd = matches.reverse().find((match) => match?.data?.jsonLd)
    ?.data.jsonLd;
  const description = loadJsonLd?.description ? loadJsonLd.description : "";
  const imagePath = loadJsonLd?.image ? loadJsonLd.image : "";
  const keywords = loadJsonLd?.keywords ? loadJsonLd.keywords : [];

  const json = jsonLd({
    pathname: location.pathname,
    description: description,
    image: imagePath,
    keywords: keywords,
  });

  return (
    <Document tagManagerId={data.ENV.TAG_MANAGER_ID}>
      <ChakraProvider theme={theme}>
        <LayoutProvider>
          <Outlet />
        </LayoutProvider>
      </ChakraProvider>
    </Document>
  );
}

const Document = ({
  children,
  tagManagerId,
}: {
  children: React.ReactNode;
  tagManagerId?: string;
}) => {
  return (
    <html lang={siteConfig.lang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {tagManagerId && (
          <script
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${tagManagerId}');`,
            }}
          ></script>
        )}
        {/* <script suppressHydrationWarning type="application/ld+json">
      {json}
    </script> */}
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export function CatchBoundary() {
  const caught = useCatch();

  let message = <></>;
  switch (caught.status) {
    case 400: {
      message = <p>What you're trying to do is not allowed.</p>;
    }
    case 404: {
      message = <p>Not found page</p>;
    }
    case 401: {
      message = <p>This page is not available.</p>;
    }
  }

  return (
    <Document>
      <ChakraProvider theme={theme}>
        <Layout>
          <Flex align="center" gap="3">
            <ErrorIcon theme="outline" size="30" fill="#ff0404" />
            <Heading as="h1">
              {caught.status}: {caught.statusText}
            </Heading>
          </Flex>
          {message}
        </Layout>
      </ChakraProvider>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <Layout>
          <Flex align="center" gap="3">
            <ErrorIcon theme="outline" size="30" fill="#ff0404" />
            <Heading as="h1">{error.message}</Heading>
          </Flex>
        </Layout>
      </ChakraProvider>
    </Document>
  );
}
