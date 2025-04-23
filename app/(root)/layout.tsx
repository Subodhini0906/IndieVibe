"use client";

import { ThemeProvider } from "next-themes";
import SessionProviderWrapper from "../components/SessionProviderWrapper";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <SessionProviderWrapper>
        <Navbar />
        {children}
      </SessionProviderWrapper>
    </ThemeProvider>
  );
}
