import type { Metadata } from "next";
import { Roboto_Condensed, Inter } from "next/font/google";
import "./globals.css";

/* Load your Figma fonts */
const roboto = Roboto_Condensed({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-heading",
});
const inter = Inter({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Your Landing Page Title",
  description: "Brief description of your landing page for SEO.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${roboto.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
