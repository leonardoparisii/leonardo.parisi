import Navbar from "@/components/Navbar";
import "@/styles/global.css";
import type { Metadata } from "next";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hi, I'm Leonardo",
  description:
    "I'm Leonardo Parisi. A 16-year-old junior frontend developer based in Italy.",
  authors: [
    {
      name: "Leonardo Parisi",
      url: "",
    },
  ],
  creator: "Leoanrdo Parisi",
  publisher: "Leonardo Parisi",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  openGraph: {
    siteName: "",
    url: "",
    title: "Hi, I'm Leonardo",
    description:
      "I'm Leonardo Parisi. A 16-year-old junior frontend developer based in Italy.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex-col h-screen flex items-center justify-between mx-auto relative">
        <Navbar />
        <div className="h-full flex flex-col items-center justify-between w-full">
          <div className="flex-col flex items-center relative py-12 md:py-20">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
