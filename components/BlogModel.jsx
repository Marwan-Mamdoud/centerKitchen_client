"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";

const BlogModel = () => {
  return (
    <div
      onMouseEnter={() => {
        document.querySelector(".one").classList.remove("leaveOne");
        document.querySelector(".two").classList.remove("leaveTwo");
        document.querySelector(".three").classList.remove("leaveThree");

        document.querySelector(".one").classList.add("enterOne");
        document.querySelector(".two").classList.add("enterTwo");
        document.querySelector(".three").classList.add("enterThree");
      }}
      onMouseLeave={() => {
        document.querySelector(".one").classList.add("leaveOne");
        document.querySelector(".two").classList.add("leaveTwo");
        document.querySelector(".three").classList.add("leaveThree");
      }}
      className="w-full min-h-[79dvh] flex flex-col border-2 border-gray-200 shadow-md items-center justify-start  text-black hover:shadow-xl duration-300 group"
    >
      <Link href="/blog/blog_item" className=" relative w-full group h-[225px]">
        <div className="deloy w-full absolute  overflow-hidden  duration-500 h-full group-hover:opacity-100">
          {" "}
          <div className="bg-white w-2.5 h-2.5 rounded-full duration-500 absolute opacity-0 group-hover:opacity-100 top-1/2 right-[75%] mx-5 one"></div>
          <div className="bg-white w-2.5 h-2.5 rounded-full duration-500 absolute opacity-0 group-hover:opacity-100 top-1/2 right-[80%] mx-5 two"></div>
          <div className="bg-white w-2.5 h-2.5 rounded-full duration-500 absolute opacity-0 group-hover:opacity-100 top-1/2 right-[85%] mx-5 three"></div>
        </div>
        <div className=" absolute  -z-10 w-full h-full overflow-hidden">
          <Image
            width={999999}
            height={9999}
            alt="img"
            src="/blog_img.png"
            className="w-full h-full -z-10 group-hover:scale-110 duration-300 object-cover"
          />
        </div>
        <div className="absolute bg-redcolor z-20 bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 ">
          <p className="text-white font-bold px-2.5 py-1 uppercase text-sm">
            Blog
          </p>
        </div>
        <div className="bg-white py-1 absolute z-20 w-[55px] h-fit flex flex-col items-center justify-center top-3 left-3">
          <p className=" font-normal uppercase text-2xl">11</p>
          <p className=" font-bold tracking-wide uppercase text-xs">nov</p>
        </div>
      </Link>
      <Link
        href="#"
        className="mt-5 font-bold text-center text-2xl hover:text-redcolor duration-200"
      >
        Navigating Dubai’s Kitchen Equipment Sales: A Savvy Shopper’s Guide
      </Link>
      <div className="flex items-center justify-center gap-2 my-2 text-graycolor">
        <p className="">By</p>
        <IoPersonCircleSharp className="w-[25px] h-[25px]" />
        <Link href="#" className="hover:text-gray-500">
          {" "}
          DBXBRANDS
        </Link>
        <IoShareSocialOutline className="w-[25px] h-[25px]" />
      </div>
      <p className="text-center text-sm px-6 text-gray-500">
        When it comes to kitchen equipment in Dubai, savvy shopping is the key
        to snagging the best deals without compromising quality. Whether...
      </p>
      <Link
        href="#"
        className="text-redcolor uppercase font-extrabold text-sm my-5"
      >
        continue reading
      </Link>
    </div>
  );
};

export default BlogModel;
