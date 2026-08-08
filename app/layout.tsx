import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  variable: "--font-inter",
  src: [
    {
      path: "../public/fonts/segoeui.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/segoeuib.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

const poppins = localFont({
  variable: "--font-poppins",
  src: [
    {
      path: "../public/fonts/arialbd.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://justgo.example.com"),
  title: "JustGo | Community Management SaaS",
  description:
    "Run member organisations, clubs, communities and events from one modern platform.",
  openGraph: {
    title: "JustGo | Community Management SaaS",
    description:
      "A production-grade landing page for community platforms, built with Next.js 15 and structured content.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JustGo | Community Management SaaS",
    description:
      "Run member organisations, clubs, communities and events from one modern platform.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
