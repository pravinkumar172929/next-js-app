"use client";

import { useRouter } from "next/navigation";

const PageBlogDetails = () => {
  const router = useRouter();
  console.log("🚀 router:", router);

  return (
    <>
      <div>pageBlogDetails</div>
      <button onClick={() => router.push("/")}>Home</button>
    </>
  );
};

export default PageBlogDetails;
