"use client";
import { ForgetPassword } from "@/lib/APIS";
import Link from "next/link";
import React, { useState } from "react";
import Thank from "./Thank";

const Page = () => {
  const [email, setEmail] = useState();
  const [show, setShow] = useState(false);
  const hundleSubmit = async (e) => {
    e.preventDefault();
    const data = await ForgetPassword(email);
    if (data.status) {
      setShow(true);
    }
  };
  return (
    <div className="">
      {show ? (
        <Thank />
      ) : (
        <>
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
          <div className="pt-28 w-[500px] [@media(max-width:1050px)]:w-10/12 mx-auto flex flex-col items-center justify-center">
            <p className="text-start text-gray-300 border-b-[1px] pb-5">
              Lost your password? Please enter your username or email address.
              You will receive a link to create a new password via email.
            </p>
            <form
              onSubmit={hundleSubmit}
              className="w-full mx-auto flex mt-10 flex-col items-center justify-center"
            >
              <div className="flex flex-col w-full items-start justify-start gap-2">
                <label htmlFor="phone" className="text-black">
                  Your Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full h-10 border-black/30 outline-none px-2.5 border-2"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-redcolor hover:bg-bluecolor duration-200 text-white font-bold my-10"
              >
                Reset Password
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
