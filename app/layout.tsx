import React from "react";
import Header from "./header/page";
import Footer from "./footer/page";
import Showcase from "./showcase/page";

export const metadata = {
  title: "Dj Events",
  description: "Welcome to Dj Events",
  keywords: ["dj", "events", "music"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <body>
          <Header />
          {children}
          <Showcase />
          <Footer />
        </body>
      </html>
    </>
  );
}
