import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const siteUrl = "https://conflowai.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Conscious Flow AI — Technology for neurodivergent development",
    template: "%s | Conscious Flow AI",
  },
  description:
    "Conscious Flow AI uses technology to support the developmental journey of neurodivergent individuals — from data-driven play therapy metrics to personalized books and tutorials.",
  keywords: [
    "neurodivergent",
    "play therapy",
    "therapy metrics",
    "personalized learning",
    "AI for development",
    "autism",
    "ADHD",
  ],
  openGraph: {
    title: "Conscious Flow AI",
    description:
      "Technology that supports the developmental journey of neurodivergent individuals.",
    url: siteUrl,
    siteName: "Conscious Flow AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-ink">
        {children}
      </body>
    </html>
  );
}
