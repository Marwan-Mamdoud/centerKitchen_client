"use client";
import Link from "next/link";
import React, { useState } from "react";
import { SiApple } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { GoogleLogin } from "@react-oauth/google";
import { API } from "@/lib/CreateApi";
import {
  LoginWithEmailandPassword,
  loginWithGoogle,
  Rigester,
} from "@/lib/APIS";
import setUserInfo from "@/store/UserInfo";
import AccountInfo from "./AccountInfo";

const Login = () => {
  const { user } = setUserInfo();
  const [status, setStatus] = useState(true);
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const { setUser } = setUserInfo();
  const HundleLogin = async (e) => {
    e.preventDefault();
    const data = await LoginWithEmailandPassword({ email, password });
    setUser(data);
  };

  const HundleRegister = async (e) => {
    e.preventDefault();
    const data = await Rigester({ name, email, password });
    setUser(data);
  };

  const handleLoginSuccess = async (res) => {
    const { credential } = res;
    const data = await loginWithGoogle({ token: credential });
    setUser(data);
  };

  const handleLoginFailure = (res) => {
    console.log(res, "error");
  };

  if (user) {
    return <AccountInfo />;
  }

  return (
    <div>
      <div
        className={`bg-[url('/page_header.jpg')]  bg-contain bg-no-repeat bg-center bg-bluecolor flex w-full  items-center justify-center mb-20 gap-4 flex-col h-[21dvh]`}
      >
        <p className="text-white font-bold text-5xl">My Account</p>
        <div className=" text-white font-semibold text-xs tracking-wider uppercase">
          <Link href="/">Home /</Link> My Account
        </div>
      </div>
      <div className="grid grid-cols-2  [@media(max-width:1050px)]:grid-cols-1 min-h-[77dvh] mb-28 max-w-[1100px] mx-auto items-start justify-start">
        {status ? (
          <div className="w-full h-fit pt-12 pb-5 duration-150 transition-all ease-in-out px-10 flex flex-col items-center justify-center mx-auto border-r-2 border-gray-200">
            <div className="w-[100%] overflow-hidden flex items-center mb-3 justify-between">
              <p className=" font-bold uppercase text-2xl ">Login</p>
              <Link
                href="#"
                className="text-redcolor opacity-0 text-sm hover:underline"
              ></Link>
            </div>
            <div className="w-full h-fit mb-10">
              <GoogleLogin
                className="w-full py-2.5 h-10 "
                onSuccess={handleLoginSuccess} // دالة لتعامل مع الاستجابة الناجحة
                onError={handleLoginFailure} // دالة لتعامل مع الأخطاء
              />
            </div>
            {/* <button
              onClick={handleLogin}
              className="w-7/12 mx-auto [@media(max-width:1050px)]:w-full cursor-pointer border-[1px] mt-12 mb-2 flex items-center justify-center gap-0 border-black rounded-lg pr-5  py-2.5 "
            >
              <div className="w-fit h-full mx-auto flex items-center justify-center">
                <FcGoogle className="w-6 mx-auto h-6 " />
              </div>
              <p className="w-fit mx-auto text-lg ">
                Continue With <span className="font-medium">Google</span>{" "}
              </p>
            </button> */}
            {/* <div className="w-7/12 mx-auto [@media(max-width:1050px)]:w-full cursor-pointer border-[1px]  mb-8 flex items-center justify-center gap-0 border-black rounded-lg pr-5  py-2.5 ">
              <div className="w-fit h-full mx-auto flex items-center justify-center">
                <SiApple className="w-6 mx-auto h-6 " />
              </div>
              <p className="w-fit mx-auto text-lg ">
                Continue With <span className="font-medium">Apple</span>{" "}
              </p>
            </div> */}
            <form className="w-full h-fit  flex flex-col items-center justify-center gap-5">
              <div className="flex flex-col  w-full h-fit text-sm items-start justify-start gap-1">
                <label htmlFor="name" className="text-black">
                  Email <span className="text-redcolor">*</span>
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 outline-none px-3 border-2 border-black/30"
                />
              </div>
              <div className="flex flex-col  w-full h-fit text-sm items-start justify-start gap-1">
                <label htmlFor="name" className="text-black">
                  Password <span className="text-redcolor">*</span>
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="w-full h-12 outline-none px-3 border-2 border-black/30"
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
        ) : (
          <div className="w-full h-fit pt-12 pb-5 duration-150 transition-all ease-in-out  px-10 flex flex-col items-center justify-center mx-auto border-r-2 border-gray-200">
            <div className="w-[100%] overflow-hidden flex items-center mb-3 justify-between">
              <p className=" font-bold uppercase text-2xl "> Register</p>
              <Link
                href="#"
                className="text-redcolor opacity-0 text-sm hover:underline"
              ></Link>
            </div>
            <div className="w-full h-fit my-10">
              <GoogleLogin
                className="w-full py-2.5 h-10 "
                onSuccess={handleLoginSuccess} // دالة لتعامل مع الاستجابة الناجحة
                onError={handleLoginFailure} // دالة لتعامل مع الأخطاء
              />
            </div>
            <form className="w-full h-fit  flex flex-col items-center justify-center gap-5">
              <div className="flex flex-col  w-full h-fit text-sm items-start justify-start gap-1">
                <label htmlFor="name" className="text-black">
                  Username <span className="text-redcolor">*</span>
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="name"
                  value={name}
                  className="w-full h-12 outline-none px-3 border-2 border-black/30"
                />
                <label htmlFor="email" className="text-black">
                  Email Address <span className="text-redcolor">*</span>
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full h-12 outline-none px-3 border-2 border-black/30"
                />
              </div>
              <div className="flex flex-col  w-full h-fit text-sm items-start justify-start gap-1">
                <label htmlFor="name" className="text-black">
                  Password <span className="text-redcolor">*</span>
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="w-full h-12 outline-none px-3 border-2 border-black/30"
                />
              </div>
              <p className="text-start text-sm text-gray-600">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <Link className="font-bold hover:text-redcolor" href="/policy">
                  privacy policy.
                </Link>
              </p>
              <button
                onClick={HundleRegister}
                type="submit"
                className="text-white bg-redcolor w-full py-3 hover:bg-bluecolor duration-300 text-sm uppercase font-bold"
              >
                Register
              </button>
            </form>

            {/* <div
              onClick={handleLogin}
              className="w-7/12  [@media(max-width:1050px)]:w-full mx-auto cursor-pointer border-[1px] mt-12 mb-2 flex items-center justify-center gap-0 border-black rounded-lg pr-5  py-2.5 "
            >
              <div className="w-fit h-full mx-auto flex items-center justify-center">
                <FcGoogle className="w-6 mx-auto h-6 " />
              </div>
              <p className="w-fit mx-auto text-lg ">
                Continue With <span className="font-medium">Google</span>{" "}
              </p>
            </div>
            <div className="w-7/12 mx-auto [@media(max-width:1050px)]:w-full cursor-pointer border-[1px]  mb-3 flex items-center justify-center gap-0 border-black rounded-lg pr-5  py-2.5 ">
              <div className="w-fit h-full mx-auto flex items-center justify-center">
                <SiApple className="w-6 mx-auto h-6 " />
              </div>
              <p className="w-fit mx-auto text-lg ">
                Continue With <span className="font-medium">Apple</span>{" "}
              </p>
            </div> */}
          </div>
        )}
        <div className="pt-20 px-4 flex flex-col items-center justify-start mx-auto w-fit">
          <p className="font-bold text-3xl w-fit mb-5 text-black uppercase">
            REGISTER
          </p>
          <p className="text-gray-500 px-7 text-sm text-center">
            Registering for this site allows you to access your order status and
            history. Just fill in the fields below, and we will get a new
            account set up for you in no time. We will only ask you for
            information necessary to make the purchase process faster and
            easier.
          </p>
          <button
            onClick={() => {
              setStatus((prev) => !prev);
              setName("");
              setEmail("");
              setPassword("");
            }}
            className="px-5 py-3 uppercase bg-redcolor text-white font-bold text-sm mt-6"
          >
            {status ? "Register" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
