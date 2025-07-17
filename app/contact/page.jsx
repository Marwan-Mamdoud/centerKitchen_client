import Link from "next/link";
import React from "react";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { LiaInstagram, LiaFacebook } from "react-icons/lia";

export const metadata = {
  title: "Contact us - YKC",
};

const page = () => {
  return (
    <div>
      <div
        className={`bg-[url('/page_header.jpg')]  bg-contain bg-no-repeat bg-center bg-bluecolor flex w-full  items-center justify-center gap-4 flex-col h-[21dvh]`}
      >
        <p className="text-white font-bold text-5xl">Conatct us</p>
        <div className=" text-white font-semibold text-xs tracking-wider uppercase">
          <Link href="/">Home /</Link> Conatct us
        </div>
      </div>
      <p className="max-w-[500px] [@media(max-width:1050px)]:px-16 mt-20 font-medium mx-auto text-center">
        We will answer any questions you may have about our online sales, rights
        or partnership service right here.
      </p>
      <div className="h-[77dvh] [@media(max-width:1050px)]:h-fit [@media(max-width:1050px)]:py-5 max-w-[1300px] mx-auto mt-16 grid [@media(max-width:1050px)]:flex [@media(max-width:1050px)]:flex-col items-start justify-start grid-cols-3 gap-10">
        <form className="col-span-2 flex flex-col w-full items-start justify-start mb-12 gap-6 [@media(max-width:1050px)]:px-5">
          <p className="font-bold text-xl">SEND US A MESSAGE</p>
          <div className="flex [@media(max-width:1050px)]:flex-col items-start w-full justify-start gap-10">
            <div className="flex flex-col w-full items-start justify-start gap-2">
              <label htmlFor="name" className="text-graycolor">
                Your Name
              </label>
              <input
                type="text"
                className="w-full h-10 border-black/30 outline-none px-2.5 border-2"
              />
            </div>
            <div className="flex flex-col w-full items-start justify-start gap-2">
              <label htmlFor="email" className="text-graycolor">
                Your Email
              </label>
              <input
                type="email"
                className="w-full h-10 border-black/30 outline-none px-2.5 border-2"
              />
            </div>
          </div>
          <div className="flex [@media(max-width:1050px)]:flex-col items-start w-full justify-start gap-10">
            <div className="flex flex-col w-full items-start justify-start gap-2">
              <label htmlFor="phone" className="text-graycolor">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full h-10 border-black/30 outline-none px-2.5 border-2"
              />
            </div>
            <div className="flex flex-col w-full items-start justify-start gap-2">
              <label htmlFor="company" className="text-graycolor">
                Your Company
              </label>
              <input
                type="text"
                className="w-full h-10 border-black/30 outline-none px-2.5 border-2"
              />
            </div>
          </div>
          <div className="flex flex-col w-full items-start justify-start gap-2">
            <label htmlFor="name" className="text-graycolor">
              Your Message
            </label>
            <textarea
              type="email"
              className="w-full h-[200px] border-black/30 outline-none px-2.5 border-2"
            />
          </div>
          <button className="bg-redcolor rounded-lg font-bold text-white px-5 hover:bg-red-600 duration-150 py-3">
            Ask a question
          </button>
        </form>
        <div className="w-full h-full bg-redcolor text-white/80 text-sm flex flex-col items-start justify-start p-8">
          <p className="font-bold text-xl uppercase text-white">
            CONTACT INFORMATION
          </p>
          <div className="pl-5 my-8 ">
            <p className="">8 St., Umm Ramool</p>
            <p>PO Box 35951,</p>
            <p className="">Dubai, U.A.E</p>
          </div>
          <div className="flex items-start justify-start gap-3">
            <div className="w-5 h-5">
              <BsPhone className="w-full h-full" />
            </div>
            <Link
              href="tel:+971 (4) 205 3403"
              className="hover:text-white duration-150"
            >
              +971 (4) 205 3403
            </Link>
          </div>
          <div className="flex items-start justify-start my-14 gap-3">
            <div className="w-5 h-5">
              <AiOutlineMail className="w-full h-full" />
            </div>
            <Link
              href="mailto: wecare@yourkitchencenter.com"
              className="hover:text-white duration-150"
            >
              wecare@yourkitchencenter.com
            </Link>
          </div>
          <hr className="text-gray-900 h-[.1px] mb-12 w-full" />
          <p>
            Do you have questions about how we can help your company? Send us an
            email and we’ll get in touch shortly.
          </p>
          <div className="flex items-start justify-start mt-4 ml-2 gap-5">
            <Link
              className="hover:text-white duration-150"
              href="https://en-gb.facebook.com/yourkitchencenter"
            >
              <LiaFacebook className="w-7 h-7" />
            </Link>
            <Link
              className="hover:text-white duration-150"
              href="https://www.instagram.com/yourkitchencenter/"
            >
              <LiaInstagram className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full mt-32 [@media(max-width:1050px)]:mb-10 h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8584.131765150856!2d55.35723294012665!3d25.23076680813463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1c2d768736638dc6!2sFalcon%20Professional%20Kitchen!5e0!3m2!1sen!2sae!4v1624341493795!5m2!1sen!2sae"
          loading="lazy"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
