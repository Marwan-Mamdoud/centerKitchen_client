"use client";
import Link from "next/link";

const HotDeals = () => {
  return (
    <div className=" mx-auto ">
      <div className="w-full max-w-[1200px] mx-auto border-b-0 py-16 cursor-pointer flex-col border-gray-200 flex items-center justify-center">
        <span className="font-semibold text-4xl text-white bg-redcolor  z-10  border-b-redcolor border-b-2 px-24 py-3.5  text-center">
          {" "}
          Hot Deals
        </span>
        <hr className="h-[1px] -translate-y-[160%] -z-10 border-0 w-full bg-gray-200" />
      </div>

      <div className=" h-[800px] w-[100dvw] [@media(max-width:1050px)]:h-fit mx-auto grid grid-cols-4 grid-rows-2 [@media(max-width:1050px)]:flex [@media(max-width:1050px)]:flex-col [@media(max-width:1050px)]:items-center [@media(max-width:1050px)]:justify-center">
        <Link href="#" className={`overflow-hidden w-full row-span-2  `}>
          <img
            src="/Banner-1.jpg"
            className={`hover:scale-110 duration-300 w-full h-full object-cover [@media(max-width:1050px)]:object-fill `}
            alt="banner"
          />
        </Link>
        <Link href="#" className={`overflow-hidden w-full `}>
          <img
            src="/Banner-2.jpg"
            className={`hover:scale-110 duration-300 w-full h-full object-cover [@media(max-width:1050px)]:object-fill `}
            alt="banner"
          />
        </Link>
        <Link href="#" className={`overflow-hidden w-full  col-span-2  `}>
          <img
            src="/banner-3.gif"
            className={`hover:scale-110 duration-300 w-full h-full object-cover [@media(max-width:1050px)]:object-fill `}
            alt="banner"
          />
        </Link>
        <Link href="#" className={`overflow-hidden w-full   `}>
          <img
            src="/banner-4.jpg"
            className={`hover:scale-110 duration-300 w-full h-full object-cover [@media(max-width:1050px)]:object-fill `}
            alt="banner"
          />
        </Link>
        <Link href="#" className={`overflow-hidden w-full   `}>
          <img
            src="/banner-5.jpg"
            className={`hover:scale-110 duration-300 w-full h-full object-cover [@media(max-width:1050px)]:object-fill `}
            alt="banner"
          />
        </Link>
        <Link href="#" className={`overflow-hidden w-full   `}>
          <img
            src="/banner-6.jpg"
            className={`hover:scale-110 duration-300 w-full h-full object-cover [@media(max-width:1050px)]:object-fill `}
            alt="banner"
          />
        </Link>
      </div>
    </div>
  );
};

export default HotDeals;
