// app/components/SessionProviderWrapper.tsx
"use client"; // Mark this as a client-side component

import { SessionProvider } from "next-auth/react";
import React from "react";

const SessionProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionProviderWrapper;
