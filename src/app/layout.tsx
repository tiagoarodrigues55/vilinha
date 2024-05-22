import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {WhatsappButton} from "./components/WhatsappButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Villinha Bar",
  description: "Sua praia no coração de São Paulo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <title>Villinha</title>
        <meta name="description" content="Villinha" />
      </head>
      <body className={inter.className}           style={{ fontFamily: 'Daydream' }}>{children}</body>
      <WhatsappButton/>
    </html>
  );
}
