import Blogs from "@/components/Blogs";
import React from "react";

export const metadata = {
  title: "Blog - YKC",
};

const page = async () => {
  return (
    <div className="w-full h-full">
      <Blogs />
    </div>
  );
};

export default page;
