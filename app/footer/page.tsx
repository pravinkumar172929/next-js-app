import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <p>Compright &copy; DJ Events {new Date().getFullYear()}</p>
      <p>
        <Link href="/about">About This Project</Link>
      </p>
    </footer>
  );
};

export default Footer;
