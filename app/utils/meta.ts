import { siteConfig } from "~/constants/siteConfig";
import { developerConfig } from "~/constants/developerConfig";
import type { WebsiteMeta, JsonLd } from "~/types";

export const websiteMeta = ({
  pathname,
  title,
  description,
  image,
  keywords,
}: WebsiteMeta) => {
  const canonical = new URL(pathname, siteConfig.url).href;
  title = title ? `${title} | ${siteConfig.metaTitle}` : siteConfig.metaTitle;
  description = description
    ? `${description} | ${siteConfig.metaDescription}`
    : siteConfig.metaDescription;
  let shareImage = image || siteConfig.coverImage;
  shareImage = shareImage ? new URL(shareImage, siteConfig.url).href : "";

  const developerMeta = () => {
    let result: { "twitter:creator"?: string; "twitter:site"?: string } = {};
    if (developerConfig.twitter) {
      result["twitter:creator"] = developerConfig.twitter;
      result[
        "twitter:site"
      ] = `https://twitter.com/${developerConfig.twitter.replace(/^@/, ``)}/`;
    }
    return result;
  };

  return {
    title: title,
    description: description,
    keywords: keywords?.join(",") + "," + siteConfig.metaKeywords.join(","),
    "og:site_name": title || siteConfig.title,
    "og:type": "website",
    "og:title": title,
    "og:description": description,
    "og:url": canonical,
    "og:image": shareImage,
    "og:image:width": siteConfig.shareImageWidth,
    "og:image:height": siteConfig.shareImageHeight,
    "twitter:image": shareImage,
    "twitter:card": "summary_large_image",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:url": canonical,
    ...developerMeta(),
  };
};

export const jsonLd = (props: JsonLd) => {
  const pathname = props.pathname ? props.pathname : "/";
  const canonical = new URL(pathname, siteConfig.url).href;
  const keywords = props.keywords || ["Arsene"];
  const description = props.description
    ? `${props.description} | ${siteConfig.metaDescription}`
    : siteConfig.metaDescription;
  const shareImage = props.image || siteConfig.coverImage;
  const shareImageUrl = shareImage
    ? new URL(shareImage, siteConfig.url).href
    : "";
  const publisherLogo = new URL(
    siteConfig.icon || siteConfig.logo,
    siteConfig.url
  ).href;

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "WebPage",
    url: canonical,
    keywords: keywords.join(`,`),
    image: shareImageUrl
      ? {
          "@type": "ImageObject",
          url: shareImageUrl,
          width: siteConfig.shareImageWidth,
          height: siteConfig.shareImageHeight,
        }
      : "",
    publisher: {
      "@type": "Organization",
      name: siteConfig.title,
      logo: {
        "@type": "ImageObject",
        url: publisherLogo,
        width: 60,
        height: 60,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": siteConfig.url,
    },
    description,
  };

  return JSON.stringify(jsonLd, undefined, 4);
};
