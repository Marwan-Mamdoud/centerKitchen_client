"use client";
import setProductsToCart from "@/store/setProductsToCart";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaGift } from "react-icons/fa6";

const Page = () => {
  const { deleteCart } = setProductsToCart();
  useEffect(() => {
    deleteCart();
  }, []);
  return (
    <div className="w-full h-full flex flex-col mx-auto py-20 items-center gap-10 justify-center max-w-[1200px]">
      <FaGift className="w-40 h-40 text-redcolor" />
      <p className="text-bluecolor font-bold  [@media(max-width:1050px)]:w-10/12 mx-auto  [@media(max-width:1050px)]:text-xl text-center w-1/2 uppercase tracking-wider text-3xl">
        Thank you for choosing us! We are so happy to have you as part of our
        family.
      </p>
      <Link
        href="/"
        className="text-white font-bold bg-redcolor hover:bg-bluecolor py-3 px-10"
      >
        return to home
      </Link>
    </div>
  );
};

export default Page;
