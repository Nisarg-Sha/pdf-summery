import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Summary - AI Powered PDF Summarizer",
  description: "Save time and effort by summarizing your PDF documents with AI. Get a summary of your PDF document in just a few seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`fontSans ${fontSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
