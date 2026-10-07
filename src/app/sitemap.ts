import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://keigokudo.vercel.app";

  return [
    "/",
    "/about",
    "/work",
    "/work/phrase-recall",
    "/work/react-ui",
    "/work/ottobock-expert-search",
    "/work/local-transcriber",
    "/work/url-transcriber",
  ].map((path) => ({ url: `${origin}${path}` }));
}
