import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://leonardoparisi.site",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://acme.com/about",
      lastModified: new Date(),
      priority: 0.6,
    },
  ];
}
