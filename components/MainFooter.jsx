"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsPhone, BsSendFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { getCategories } from "@/lib/APIS";
import SetCategory from "@/store/SetCategory";
import Loading from "./Loading";

const MainFooter = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setCategory } = SetCategory();

  const getCagtegoriess = async () => {
    setLoading(true);
    const data = await getCategories();
    setCategories(data);
    setLoading(false);
  };

  useEffect(() => {
    getCagtegoriess();
  }, []);

  return (
    <div className="h-[79dvh]  [@media(max-width:1050px)]:h-fit  [@media(max-width:1050px)]:py-10  bg-[#f7f7f7] w-[100%] ">
      <div className=" h-fit max-w-[1200px] mx-auto pt-10 pb-5 flex flex-row  [@media(max-width:1050px)]:flex-col  [@media(max-width:1050px)]:justify-start items-start justify-between gap-10  [@media(max-width:1050px)]:px-10">
        <div className="flex flex-col mr-14 items-start justify-start gap-5">
          <Image
            src="/logo.png"
            alt="logo"
            className="w-full h-20 object-left object-contain"
            width={9999}
            height={99999}
          />
          <div className="flex flex-col items-start justify-start gap-3">
            <div className="flex items-start justify-start gap-4">
              <div className="flex items-center justify-center p-1.5 rounded-full bg-redcolor">
                <BsSendFill className="text-white w-4 h-4" />
              </div>
              <p className="text-sm">
                8 St., Umm Ramool PO Box 35951, Dubai, U.A.E
              </p>
            </div>
            <div className="flex items-start justify-start gap-4">
              <div className="flex items-center justify-center p-1.5 rounded-full bg-redcolor">
                <BsPhone className="text-white w-4 h-4" />
              </div>
              <Link
                href="tel: 04 205 3403"
                className="font-medium tracking-wide text-bluecolor"
              >
                +97142053403
              </Link>
            </div>
            <div className="flex items-start justify-start gap-4">
              <div className="flex items-center justify-center p-1.5 rounded-full bg-redcolor">
                <AiOutlineMail className="text-white w-4 h-4" />
              </div>
              <Link
                href="mailto:wecare@yourkitchencenter.com"
                className="text-bluecolor"
              >
                wecare@yourkitchencenter.com
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <p className="text-black font-semibold">Follow Us</p>
            <div className="flex items-center justify-start gap-2">
              <Link
                target="_blank"
                href="https://en-gb.facebook.com/yourkitchencenter"
              >
                <Image
                  src="/facebook-logo.png"
                  alt="facebook logo"
                  width={999}
                  height={999}
                  className="object-cover w-8 h-8"
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/yourkitchencenter/"
              >
                <Image
                  src="/instagram-logo.png"
                  alt="instagram logo"
                  width={999}
                  height={999}
                  className="object-cover w-8 h-8"
                />
              </Link>
            </div>
          </div>
          <div className="flex items-start justify-center gap-2 flex-col">
            <p className="font-semibold text-black">Payment Options</p>
            <Image
              src="/payment.png"
              alt="payment"
              width={999}
              height={999}
              className="object-fill object-bottom w-72 h-10"
            />
          </div>
        </div>
        <div className="flex flex-col h-fit gap-[120px] items-start justify-between">
          <div className="flex flex-col items-start justify-start gap-3">
            <p className="font-bold text-xl mb-2">Customer Service</p>
            <Link href="/shipping" className="text-bluecolor">
              Shipping
            </Link>
            <Link href="/returns" className="text-bluecolor">
              Returns
            </Link>
            <Link href="/payment" className="text-bluecolor">
              Payment
            </Link>
            <Link href="/contact" className="text-bluecolor">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col items-start w-fit justify-start">
            <p className="text-black font-semibold w-full">
              Shipping Partner for GCC
            </p>
            <Image
              src="/talib_shipping.png"
              alt="img"
              width={9999}
              height={99999}
              className="w-full h-[50px] object-contain object-top "
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-3">
          <p className="font-bold text-xl mb-2">Quick Links</p>
          <Link href="/about" className="text-bluecolor">
            About Us
          </Link>
          <Link href="/terms" className="text-bluecolor">
            Terms and Conditions
          </Link>
          <Link href="/policy" className="text-bluecolor">
            Privacy Policy
          </Link>
          <Link href="/blog" className="text-bluecolor">
            Blog
          </Link>
        </div>
        <div className="flex flex-col items-start justify-start gap-3">
          <p className="font-bold text-xl mb-2">Product Categories</p>

          <div onClick={() => setCategory("Ovens")}>
            <Link
              href={`/category_products?category=Ovens`}
              className="text-bluecolor"
            >
              <span>Ovens</span>
            </Link>
          </div>
          <div onClick={() => setCategory("Cooking Line")}>
            <Link
              href={`/category_products?category=Cooking Line`}
              className="text-bluecolor"
            >
              <span>Cooking Line</span>
            </Link>
          </div>
          <div onClick={() => setCategory("Coffee Machines")}>
            <Link
              href={`/category_products?category=Coffee Machines`}
              className="text-bluecolor"
            >
              <span>Coffee Machines</span>
            </Link>
          </div>
          <div onClick={() => setCategory("Ice Maker")}>
            <Link
              href={`/category_products?category=Ice Maker`}
              className="text-bluecolor"
            >
              <span>Ice Maker</span>
            </Link>
          </div>
          <div onClick={() => setCategory("Cleaning Agents")}>
            <Link href={`/CleaningAgents`} className="text-bluecolor">
              <span>Cleaning Agents</span>
            </Link>
          </div>
          <div onClick={() => setCategory("Accessories")}>
            <Link href={`/accessories`} className="text-bluecolor">
              <span>Accessories</span>
            </Link>
          </div>
        </div>
      </div>
      <hr className="h-[2px] bg-gray-300" />
      <div className="max-w-[1200px] mx-auto py-3 text-sm flex items-start  [@media(max-width:1050px)]:items-center  [@media(max-width:1050px)]:justify-center  [@media(max-width:1050px)]:px-3  [@media(max-width:1050px)]:tracking-wider justify-start">
        <p className="text-black pt-3 leading-tight">
          yourkitchencenter.com is your one-stop online shop for all your
          professional kitchen equipment needs. Based in Dubai, UAE, we provide
          solutions for your kitchen straight to your door wherever you are
          across the emirates and the GCC region. Our strength is highlighted by
          the many strong alliances and preferred distributorship agreements
          with our partners in addition to the many projects fulfilled and
          returning satisfied customers. We strive to translate this advantage
          to all our customers alike with the best value and service
          <br />
          <span className=" pt-3 block">
            Copyright 2024 yourkitchencenter.com - All Rights Reserved.
          </span>
        </p>
      </div>
    </div>
  );
};

export default MainFooter;
