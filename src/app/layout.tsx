import "@/assets/scss/main.scss";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Footer, Header } from "@/components";

export const metadata: Metadata = {
  title: "E-commerce web site",
  description: "Created by",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
