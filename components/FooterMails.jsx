"use client";

import Link from "next/link";
import React from "react";
import {
  AiOutlineQuestionCircle,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";

const FooterMails = () => {
  return (
    <div className="bg-redcolor py-10 text-white/80 w-[100%] ">
      <div className="max-w-[1300px] mx-auto flex [@media(max-width:1050px)]:flex-col  [@media(max-width:1050px)]:justify-start  [@media(max-width:1050px)]:items-start  [@media(max-width:1050px)]:px-4  items-center justify-center">
        <div className="flex flex-col text-white items-start gap-5 w-fit justify-center  [@media(max-width:1050px)]:w-full  ">
          <p className="font-bold">We’re Always Here To Help</p>
          <p className="font-normal w-[550px] [@media(max-width:1050px)]:w-full ">
            Reach out to us through any of these support channels
          </p>
        </div>
        <div className="grid grid-cols-3 grid-rows-1  [@media(max-width:1050px)]:flex  [@media(max-width:1050px)]:flex-col  [@media(max-width:1050px)]:items-start  [@media(max-width:1050px)]:justify-start  [@media(max-width:1050px)]:gap-10  [@media(max-width:1050px)]:py-10 gap-28">
          <div className="flex items-center justify-center gap-4 text-sm ">
            <div className="flex items-center bg-white rounded-full justify-center p-1">
              <AiOutlineQuestionCircle className=" h-6 w-6 text-redcolor" />
            </div>
            <p className="">
              HELP CENTER{" "}
              <Link
                className="text-white my-1"
                href="mailto:wecare@yourkitchencenter.com"
              >
                wecare@yourkitchencenter.com
              </Link>
              <br />
              or +971 4 205 3403 <br /> Monday - Saturday
              <br /> 9.00 AM - 6.00 PM
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center bg-white rounded-full justify-center p-1">
              <AiOutlineMail className="h-6 w-6 text-redcolor" />
            </div>
            <p className="">
              SERVICE SUPPORT
              <br />
              <Link
                className="text-white my-1"
                href="mailto:service@yourkitchencenter.com "
              >
                service@yourkitchencenter.com
              </Link>
              <br />
              or +971 4 205 3452 <br /> Monday - Saturday <br />
              9.00 AM - 6.00 PM
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center bg-white rounded-full justify-center p-1">
              <AiOutlinePhone className=" h-6 w-6 text-redcolor" />
            </div>
            <p className="">
              WARRANTY CLAIMS
              <br />
              <Link
                className="text-white my-1"
                href="mailto:warranty@yourkitchencenter.com"
              >
                warranty@yourkitchencenter.com
              </Link>
              <br />
              or +971 4 205 3452
              <br /> Monday - Saturday <br />
              9.00 AM - 6.00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMails;
