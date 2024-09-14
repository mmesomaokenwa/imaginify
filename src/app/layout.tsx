import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Imaginify",
    default: "Imaginify",
  },
  description: "An AI image generation platform",
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_SERVER_URL,
    title: {
      template: "%s | Imaginify",
      default: "Imaginify",
    },
    siteName: "Imaginify",
    description: "An AI image generation platform",
    images: [
      {
        url: "https://mfgadjucjxcfjhuaebjq.supabase.co/storage/v1/object/public/products/public/Macbook-Air-imaginify-ai-prod.vercel.app.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: {
        colorPrimary: "#633CFF",
      },
    }}>
      <html lang="en">
        <body
          className={`${ibmPlexSans.className} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
