import Link from "next/link";

export const metadata = {
  title: "Dj Events",
  description: "Welcome to Dj Events",
};

export default function Page() {
  return (
    <>
      <h1>Hello Next.js!</h1>
      <Link href="/blog">Go to blog</Link>
    </>
  );
}
