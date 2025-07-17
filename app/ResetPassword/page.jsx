"use client";
import { ResetPassword } from "@/lib/APIS";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const router = useRouter();
  const [token, setToken] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const hundleSubmit = async (e) => {
    e.preventDefault();
    if (password != passwordConfirm) {
      return toast.warn("Password and Password Confirm Doesnt match");
    }
    const data = await ResetPassword({ password, passwordConfirm, token });
    if (data) {
      return router.push("/my_account");
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    setToken(token);
  }, []);
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
      <div className="pt-28 w-[500px] [@media(max-width:1050px)]:w-10/12 mx-auto flex flex-col items-center justify-center">
        <p className="text-start w-full text-gray-300 border-b-[1px] pb-5">
          Enter a new password below.
        </p>
        <form
          onSubmit={hundleSubmit}
          className="w-full mx-auto flex mt-10 flex-col items-center justify-center"
        >
          <div className="flex flex-col w-full items-start justify-start gap-2">
            <label htmlFor="phone" className="text-black">
              New password <span className="text-redcolor"> *</span>
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-full h-10 border-black/30 outline-none px-2.5 border-2"
            />
          </div>
          <div className="flex flex-col mt-7 w-full items-start justify-start gap-2">
            <label htmlFor="phone" className="text-black">
              Re-enter new password <span className="text-redcolor"> *</span>
            </label>
            <input
              onChange={(e) => setPasswordConfirm(e.target.value)}
              type="password"
              className="w-full h-10 border-black/30 outline-none px-2.5 border-2"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-redcolor uppercase hover:bg-bluecolor duration-200 text-white font-bold my-10"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
