import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PropTwin | Digital Twins for Real Estate",
  description:
    "PropTwin transforms apartments, villas and real-estate projects into immersive digital property experiences across web, mobile and VR.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}