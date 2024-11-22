import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pharmaplant",
  description: "Sitio web de pharmaplant, catalogo de productos, informacion sobre medicamentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-100 grid min-h-dvh grid-rows-[auto_1fr_auto]`}
      >
        <Nav />
        <main className="max-w-[1200px] mx-auto mt-16 md:mt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
