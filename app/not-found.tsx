import React from "react";
import styles from "./not-found.module.css";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <p>sorry, there is nothing here.</p>
      <Link href="/">Go to Home</Link>
    </div>
  );
};

export default NotFound;
