import Header from "@/components/Header/Header";
import "@/styles/global.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import AnimatedCursor from "react-animated-cursor";
const url = new URL("https://leonardoparisi.site");
const title = "Leonardo Parisi - Portfolio";
const author = "Leonardo Parisi <parisii.leonardo@gmail.com>";
const today = new Date();
const birthDate = new Date("2007-02-15");
const age =
  today.getFullYear() -
  birthDate.getFullYear() -
  (today.getMonth() < birthDate.getMonth() ||
  (today.getMonth() === birthDate.getMonth() &&
    today.getDate() < birthDate.getDate())
    ? 1
    : 0);
const ageDescription = `I'm Leonardo Parisi. A ${age}-year-old junior frontend developer.`;

export const metadata: Metadata = {
  title,
  description: ageDescription,
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
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    title,
    description: ageDescription,
    siteName: "leonardo Parisi portfolio",
    url,
  },
  twitter: {
    title,
    description: ageDescription,
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
        <div className="py-6 sm:py-20 mt-32 w-full">
          <AnimatedCursor
            innerSize={36}
            innerStyle={{
              border: "2px solid #6b6253",
              background: "transparent",
            }}
            outerStyle={{ background: "#6b625320" }}
            outerSize={26}
            color="255, 255, 255"
            outerAlpha={1}
            innerScale={0.05}
            outerScale={2}
          />
          {children}
        </div>

        <Footer />
        <Toaster position="bottom-left" />
      </body>
    </html>
  );
}
