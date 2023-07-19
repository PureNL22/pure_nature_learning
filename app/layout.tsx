import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "朴乐自然学习 | Pure Nature Learning",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200;300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        /> */}
      </head>
      <body className="bg-neutral-100">
        <Navbar></Navbar>
        <div className={`${inter.className}`}>{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}

//can add global components here e.g. navbar and footer
