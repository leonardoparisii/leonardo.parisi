import Header from "@/components/Header";
import "@/styles/global.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const url = new URL("https://leonardoparisi.site");
const title = "Leonardo Parisi - Portfolio";
const author = "Leonardo Parisi <parisileonardo15@gmail.com>";

export const metadata: Metadata = {
  title,
  description:
    "I'm Leonardo Parisi. A 16-year-old junior frontend developer based in Italy.",
  other: {
    image: "https://leonardoparisi.site/images/preview.png",
  },
  authors: [
    {
      name: author,
      url,
    },
  ],
  creator: author,
  publisher: author,
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    title,
    description:
      "I'm Leonardo Parisi. A 16-year-old junior frontend developer based in Italy.",
    siteName: "leonardo Parisi portfolio",
    url,
    images: [
      {
        url: "https://leonardoparisi.site/images/preview.png",
        alt: "Leonardo Parisi",
      },
    ],
  },
  twitter: {
    title,
    description:
      "I'm Leonardo Parisi. A 16-year-old junior frontend developer based in Italy.",
    site: "@_leoparisi",
    creator: "@_leoparisi",
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-[2520px] flex-col h-screen flex items-center justify-between mx-auto relative">
        <Header />
        <div className="py-8 sm:py-20 mt-36 w-full">{children}</div>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
