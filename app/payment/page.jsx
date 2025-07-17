import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import Image from "next/image";

export const metadata = {
  title: "Payment - YKC",
};

const page = () => {
  return (
    <div className="">
      <div
        className={`bg-[url('/page_header.jpg')]  bg-contain bg-no-repeat bg-center bg-bluecolor flex w-full  items-center justify-center gap-4 flex-col h-[21dvh]`}
      >
        <p className="text-white font-bold text-5xl">Payment</p>
        <div className=" text-white font-semibold text-xs tracking-wider uppercase">
          <Link href="/">Home /</Link> Payment
        </div>
      </div>
      <div className="flex flex-col items-start justify-start px-48 py-20 [@media(max-width:1050px)]:pr-5 [@media(max-width:1050px)]:pl-10 text-graycolor">
        <p className="text-redcolor font-bold text-xl">Payment Options</p>
        <div className="flex items-start mb-1 mt-4 text-gray-500 font-bold  justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3 text-gray-400 mr-3" />
          <p className="flex flex-col">
            <span> Cash on Delivery Only for UAE &nbsp;</span>{" "}
            <span className="font-normal">
              (No extra charge for this option)
            </span>
          </p>
        </div>
        <div className="flex items-start my-1 text-gray-500 font-bold  justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3 text-gray-400 mr-3" />
          <p className="flex flex-col">
            <span> Wire transfer &nbsp;</span>{" "}
            <span className="font-normal">(Our bank account details)</span>
          </p>
        </div>
        <div className="flex items-start my-1 text-gray-500 font-bold  justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3 text-gray-400 mr-3" />
          <p className="flex flex-col">
            <span> Card payment Visa/Mastercard &nbsp;</span>{" "}
            <span className="font-normal">(Merchant charges apply)</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 [@media(max-width:1050px)]:grid-cols-1 mb-44 max-w-[1200px] mx-auto gap-12">
        <div className="font-bold mt-12  w-full flex items-start justify-start gap-5">
          <div className="w-28 h-24 border-[2px] p-4 rounded-full ">
            <Image
              src="/bank_icon.png"
              width={999999}
              height={999999}
              alt="icon"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col w-full items-start justify-start gap-0 text-sm">
            <p className="uppercase font-bold text-black/70 text-xl">
              BANKWIRE
            </p>
            <hr className="text-graycolor h-1 my-2 w-full" />
            <p className="text-[#777777] font-normal">
              Account Name:{" "}
              <span className="font-bold">
                FALCON PROFESSIONAL GENERAL TRADING LLC
              </span>
            </p>
            <p className="text-[#777777] font-normal">
              Account Number:
              <span className="font-bold">013-06-278867</span>
            </p>
            <p className="text-[#777777] font-normal">
              Bank Name:
              <span className="font-bold">Bank of Sharjah</span>
            </p>
            <p className="text-[#777777] font-normal">
              Branch:
              <span className="font-bold">
                {" "}
                Al Garhoud, Dubai, United Arab Emirates
              </span>
            </p>
            <p className="text-[#777777] font-normal">
              Swift Code:
              <span className="font-bold"> SHARAEAS</span>
            </p>
            <p className="text-[#777777] font-normal">
              IBAN:
              <span className="font-bold"> AE57 0120 0000 0130 6278 867</span>
            </p>
            <p className="text-[#777777] font-normal">
              Currency:
              <span className="font-bold"> AED</span>
            </p>
          </div>
        </div>
        <div className="font-bold mt-12 w-full flex items-start justify-start gap-5">
          <div className="w-28 h-24 border-[2px] p-3 rounded-full ">
            <Image
              src="/credit-card.png"
              width={999999}
              height={999999}
              alt="icon"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col w-full items-start justify-start gap- text-sm">
            <p className="font-bold text-black/70 text-xl">
              Credit Cards Visa & MasterCard
            </p>
            <hr className="text-graycolor h-1 my-2 w-full" />
            <p className="text-[#777777] font-normal pr-7">
              You can pay by using your credit card through a{" "}
              <span className="font-bold">
                100% safe secure online transaction
              </span>{" "}
              We at falcon kitchen ensure that every credit card transaction
              will be an impenetrable fortress
            </p>
            <Image
              src="/payment-options.jpeg"
              alt="icon"
              width={99999}
              height={9999}
              className="w-full h-[50px] object-contain object-left mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
