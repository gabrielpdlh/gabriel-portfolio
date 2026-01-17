import type { Metadata } from "next";
import "./globals.css";
import { asgardFont, poppins } from "./ui/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Gabriel Padilha - Full Stack Developer",
  description:
    "Building scalable full-stack applications with a strong focus on performance, architecture, and user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${asgardFont.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
