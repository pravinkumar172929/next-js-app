import React from "react";

export const metadata = {
  title: "Dj Events",
  description: "Welcome to Dj Events",
  keywords: ["dj", "events", "music"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
