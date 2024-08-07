import type { Metadata } from "next";

import "./globals.css";
import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer";
import "animate.css";

export const metadata: Metadata = {
  title: "Yamada Tetsuya Official",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div className=" bg-[url('/images/bg/bg.jpeg')] text-white ">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
