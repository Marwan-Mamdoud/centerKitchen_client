"use client";

import Link from "next/link";
import { BsExclamationCircle } from "react-icons/bs";
import React from "react";

const Orders = () => {
  return (
    <div className="w-full pl-5 flex flex-col items-start justify-start">
      <div className="w-full bg-bluecolor py-5 pl-5 flex items-start justify-start text-white text-sm">
        <BsExclamationCircle className="w-5 h-5 font-bold mr-5 text-white" />
        <Link
          className="hover:text-gray-400  font-bold underline underline-offset-8 uppercase"
          href="/"
        >
          Browse Products
        </Link>
        &nbsp;&nbsp;&nbsp; No order has been made yet.
      </div>
    </div>
  );
};

export default Orders;
