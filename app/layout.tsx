import React from "react";
import Header from "./header/page";

export const metadata = {
  title: "Dj Events",
  description: "Welcome to Dj Events",
  keywords: ["dj", "events", "music"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}
