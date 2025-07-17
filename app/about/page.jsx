import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "About Us | Leading Commercial Kitchen Equipment Supplier in AE",
};

const page = () => {
  return (
    <div className="text-gray-500 ">
      <div
        className={`bg-[url('/page_header.jpg')]  bg-contain bg-no-repeat bg-center bg-bluecolor flex w-full  items-center justify-center gap-4 flex-col h-[21dvh]`}
      >
        <p className="text-white font-bold text-5xl">About us</p>
        <div className=" text-white font-semibold text-xs tracking-wider uppercase">
          <Link href="/">Home /</Link> About Us
        </div>
      </div>
      <div className="w-full">
        <p className="text-redcolor border-b-[3px] w-fit mx-auto border-redcolor uppercase text-3xl font-medium mt-16 pb-4">
          WELCOME TO YOUR KITCHEN CENTER
        </p>
        <hr className="w-full text-graycolor mb-6 -translate-y-[300%] " />
        <div className="px-[11%] w-full text-center flex items-center justify-center">
          <p className="mx-auto w-full mb-5 text-sm text-center">
            yourkitchencenter.com is your one-stop online shop for all your
            professional kitchen equipment needs. Based in Dubai, UAE we provide
            solutions for your kitchen straight to your door wherever you are
            across the emirates and the GCC region. Our strength is highlighted
            by the many strong alliances and preferred distributorship
            agreements with our partners in addition to the many projects
            fulfilled and returning satisfied customers. We strive to translate
            this advantage to all our customers alike with the best value and
            service.
          </p>
        </div>
        <div className="max-w-[1200px] mx-auto flex [@media(max-width:1050px)]:flex-col [@media(max-width:1050px)]:px-3  items-end justify-center gap-5">
          <div className="w-full">
            <p className="text-xl text-redcolor font-bold">
              {" "}
              yourkitchencenter.com
            </p>
            <p className="font-bold text-3xl text-black pb-3 w-fit border-b-[3px] border-redcolor">
              Reasons to choose us:
            </p>
            <hr className="w-full text-graycolor mb-16 -translate-y-[300%]" />
            <p className="font-bold text-base">
              1) Strong alliance with top quality brands
            </p>
            <p className="">
              Wide variety of kitchen equipment from the best brands across the
              world to cater to your different kitchen needs.
            </p>
            <p className="font-bold text-base">2) Detailed specs</p>
            <p className="">
              We provide you with all the necessary product information for you
              to make the best purchase choice.
            </p>
            <p className="font-bold text-base">3) We’re there for you</p>
            <p className="">
              Our team of specialists is at your service to assist you on all
              your inquiries.
            </p>
            <p className="font-bold text-base">4) Stock availability</p>
            <p className="">
              Your kitchen can be ready within a matter of days
            </p>
            <p className="font-bold text-base">5) You can trust us</p>
            <p className="">
              Speed of delivery, after-sales support, and being next to you
              throughout your culinary journey.
            </p>
          </div>
          <div className="flex items-end justify-end w-full h-full">
            <Image
              src="/about.jpg"
              alt="img"
              width={999999}
              height={999999}
              className="w-full h-full object-contain object-bottom"
            />
          </div>
        </div>
        <div className="grid grid-cols-8 [@media(max-width:1050px)]:grid-cols-2 gap-10 max-w-[1400px] mx-auto mb-48 [@media(max-width:1050px)]:mb-12 [@media(max-width:1050px)]:px-5 mt-16">
          <Image
            src="/about1.jpg"
            alt="img"
            width={99999}
            height={99999}
            className="w-full h-full object-contain object-center"
          />
          <Image
            src="/about2.jpg"
            alt="img"
            width={99999}
            height={99999}
            className="w-full h-full object-contain object-center"
          />
          <Image
            src="/about3.jpg"
            alt="img"
            width={99999}
            height={99999}
            className="w-full h-full object-contain object-center"
          />
          <Image
            src="/about4.png"
            alt="img"
            width={99999}
            height={99999}
            className="w-full h-full object-contain object-center"
          />
          <Image
            src="/about5.jpg"
            alt="img"
            width={99999}
            height={99999}
            className="w-full h-full object-contain object-center"
          />
          <Image
            src="/about6.jpg"
            alt="img"
            width={99999}
            height={99999}
            className="w-full h-full object-contain object-center"
          />
          <Image
            src="/about7.jpg"
            alt="img"
            width={99999}
            height={99999}
            className="w-full h-full object-contain object-center"
          />
          <Image
            src="/about8.jpg"
            alt="img"
            width={99999}
            height={99999}
            className="w-full h-full object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
};
[];
export default page;
