import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const winkySans = localFont({
  src: [
    {
      path: "./fonts/WinkySans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/WinkySans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/WinkySans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/WinkySans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/WinkySans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/WinkySans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/WinkySans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/WinkySans-Thin.ttf",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-winky-sans",
});


export const metadata: Metadata = {
  title: "Seva 🙏 ",
  description: "stich your dress easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={winkySans.variable}
      >
        {children}
      </body>
    </html>
  );
}
