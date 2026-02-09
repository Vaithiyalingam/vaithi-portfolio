import type { Metadata } from "next";
import { Sora, Playfair_Display } from "next/font/google";
import "../../styles/globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "Vaithiyalingam | Frontend Developer",
  description: "Frontend Developer based in India. Specializing in React, Next.js, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sora.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
