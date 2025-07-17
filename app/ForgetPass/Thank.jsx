import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const Thank = () => {
  return (
    <div className="">
      <div
        className={`bg-[url('/page_header.jpg')]  bg-contain bg-no-repeat bg-center bg-bluecolor flex w-full  items-center justify-center gap-4 flex-col h-[21dvh]`}
      >
        <p className="text-white font-bold text-5xl [@media(max-width:1050px)]:text-3xl">
          My Account
        </p>
        <div className=" text-white font-semibold text-xs tracking-wider uppercase">
          <Link href="/">Home /</Link>My Account
        </div>
      </div>
      <div className="max-w-[600px] py-20 mx-auto flex flex-col items-center justify-center gap-10s">
        <AiOutlineMail className="text-gray-200 w-full h-[200px]" />
        <p className="text-gray-500 text-center w-2/3">
          A password reset email has been sent to the email address on file for
          your account, but may take several minutes to show up in your inbox.
          Please wait at least 10 minutes before attempting another reset.
        </p>
      </div>
    </div>
  );
};

export default Thank;
