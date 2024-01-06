import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://leonardoparisi.site",
      priority: 1,
    },
  ];
}
