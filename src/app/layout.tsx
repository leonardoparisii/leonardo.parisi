import Navbar from "@/components/Navbar"
import "@/styles/global.css"
import type { Metadata } from "next"
import Container from "@/components/Container"
import "bootstrap-icons/font/bootstrap-icons.css"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Hi, I\"m Leonardo",
  description: "I\"m Leonardo Parisi. A 16-year-old junior frontend developer based in Italy.",
  authors: [{
    name: "Leonardo Parisi",
    url: "",
  }],
  creator: "Leoanrdo Parisi",
  publisher: "Leonardo Parisi",
  viewport: {
    width: "device-width",
    initialScale: 1
    },
    openGraph: {
        siteName: "",
        url: "",
        title: "Hi, I\"m Leonardo",
        description: "I\"m Leonardo Parisi. A 16-year-old junior frontend developer based in Italy.",
        type: "website"
    },
    robots: {
        index: true,
        follow: true
    }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body>
            <Container>
                <Navbar />
                {children}
                <Footer />
            </Container>
        </body>
    </html>
  )
}
