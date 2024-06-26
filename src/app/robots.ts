import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/api/og/*",
    },
    sitemap: "https://leonardoparisi.site/sitemap.xml",
  };
}
