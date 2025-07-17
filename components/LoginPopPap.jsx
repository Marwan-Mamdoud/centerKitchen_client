"use client";

import Link from "next/link";
import React, { useState } from "react";
import { SiApple } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { LoginWithEmailandPassword, loginWithGoogle } from "@/lib/APIS";
import { GoogleLogin } from "@react-oauth/google";
import setUserInfo from "@/store/UserInfo";

const LoginPopPap = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setUser } = setUserInfo();

  const handleLoginSuccess = async (res) => {
    const { credential } = res;
    const data = await loginWithGoogle({ token: credential });
    setUser(data);
  };

  const HundleLogin = async (e) => {
    e.preventDefault();
    const data = await LoginWithEmailandPassword({ email, password });
    setUser(data);
  };

  const handleLoginFailure = (res) => {
    console.log(res, "error");
  };
  return (
    <div
      id="login_pop"
      className=" absolute bottom-0 right-[380px] w-[350px] border-t-0 hover:opacity-100 hover:visible hover:translate-y-[100%] duration-500 h-fit translate-x-full translate-y-[110%] opacity-0 invisible z-50 py-6 px-6 bg-white border-[1px] border-black/10 flex flex-col items-center justify-center shadow-lg overflow-hidden"
    >
      <div className="w-[100%] overflow-hidden flex items-center mb-3 justify-between">
        <p className=" font-bold uppercase ">Sign in</p>
        <Link href="#" className="text-redcolor text-sm hover:underline">
          Create an Account
        </Link>
      </div>
      <hr className=" bg-slate-200 w-full" />
      {/* <div
        onClick={handleLogin}
        className="w-11/12 mx-auto cursor-pointer border-[1px] mt-12 mb-2 flex items-center justify-center gap-0 border-black rounded-lg pr-5  py-2.5 "
      >
        <div className="w-fit h-full mx-auto flex items-center justify-center">
          <FcGoogle className="w-6 mx-auto h-6 " />
        </div>
        <p className="w-fit mx-auto text-lg ">
          Continue With <span className="font-medium">Google</span>{" "}
        </p>
      </div>
      <div className="w-11/12 mx-auto cursor-pointer border-[1px]  mb-5 flex items-center justify-center gap-0 border-black rounded-lg pr-5  py-2.5 ">
        <div className="w-fit h-full mx-auto flex items-center justify-center">
          <SiApple className="w-6 mx-auto h-6 " />
        </div>
        <p className="w-fit mx-auto text-lg ">
          Continue With <span className="font-medium">Apple</span>{" "}
        </p>
      </div> */}
      <div className="w-full h-fit mb-10">
        <GoogleLogin
          className="w-full py-2.5 h-10 "
          onSuccess={handleLoginSuccess} // دالة لتعامل مع الاستجابة الناجحة
          onError={handleLoginFailure} // دالة لتعامل مع الأخطاء
        />
      </div>
      <form className="w-full h-full  flex flex-col items-center justify-center gap-3">
        <div className="flex flex-col  w-full h-fit text-sm items-start justify-start gap-1">
          <label htmlFor="name" className="text-black">
            Username or Email <span className="text-redcolor">*</span>
          </label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-10 outline-none px-3 border-2 border-black/30"
          />
        </div>
        <div className="flex flex-col  w-full h-fit text-sm items-start justify-start gap-1">
          <label htmlFor="name" className="text-black">
            Password <span className="text-redcolor">*</span>
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="w-full h-10 outline-none px-3 border-2 border-black/30"
          />
        </div>
        <button
          type="submit"
          onClick={HundleLogin}
          className="text-white bg-redcolor w-full py-3 hover:bg-bluecolor duration-300 text-sm uppercase font-bold"
        >
          Log In
        </button>
        <div className="w-[100%]  flex items-center mb-3 justify-between">
          {/* <div className="flex items-center justify-center gap-2">
            <input type="checkbox" name="check" id="check" />
            <label htmlFor="check" className=" cursor-pointer text-sm">
              Remember me
            </label>
          </div> */}
          <Link
            href="/ForgetPass"
            className="text-redcolor text-sm hover:underline"
          >
            Lost your Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPopPap;
