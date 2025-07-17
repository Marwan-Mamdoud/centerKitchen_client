import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

export const metadata = {
  title: "Returns - YKC",
};

const page = () => {
  return (
    <div className="">
      <div
        className={`bg-[url('/page_header.jpg')]  bg-contain bg-no-repeat bg-center bg-bluecolor flex w-full  items-center justify-center gap-4 flex-col h-[21dvh]`}
      >
        <p className="text-white font-bold text-5xl">Returns</p>
        <div className=" text-white font-semibold text-xs tracking-wider uppercase">
          <Link href="/">Home /</Link> Returns
        </div>
      </div>
      <div className="flex flex-col items-start justify-start px-48 [@media(max-width:1050px)]:px-3 py-20 text-graycolor">
        <p className="text-redcolor font-bold text-xl">
          Returns or Replacement
        </p>
        <p className="flex items-start mt-4 mb-2  justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3 text-gray-400 mr-3" />
          All return requests are subject to management approval.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3 text-gray-400 mr-3" />
          In case the product is in its original packaging and has not been
          damaged in any shape or form then customer has a maximum of 7 days to
          return product.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 mr-3" />
          For Credit or Debit card payments any refund will be within 7 to 10
          working days.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 mr-3" />
          For Cash on delivery payment, amount will be refunded via a bank wire
          transfer within 7 working days.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 mr-3" />
          For Bank Wire payment amount will be transferred via a bank wire
          within 7 working days.
        </p>
        <div className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 mr-3" />
          <div className="">
            For all return or replacement follow ups please contact
            <Link
              href="milto:wecare@yourkitchencenter.com"
              className="text-black/70 hover:text-redcolor"
            >
              &nbsp; wecare@yourkitchencenter.com{" "}
            </Link>
            &nbsp; or 04-284-3322
          </div>
        </div>
        <p className="text-redcolor font-bold text-xl my-5">
          Returns or Replacement for Oman, Qatar and Bahrain.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 mr-3" />
          We deliver all over UAE and from Dubai to Oman, Qatar and Bahrain.
        </p>
        <div className="flex items-start mb-2 justify-center">
          {" "}
          <div className="w-3 h-3 mr-3">
            <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 " />
          </div>
          Once you receive the delivered item, please make sure to check all
          content of the delivered item for any missing or defective part.
          Should that be the case please make sure to return the item on the
          spot or within a maximum period of 7 days. Please do not discard the
          original packing. Yourkitchencenter.com will not be accountable for
          any returns after 7 days.
        </div>
        <div className="flex items-start mb-2 justify-center">
          {" "}
          <div className="w-3 h-3 mr-3">
            <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 " />
          </div>
          Shipping cost varies depending on product and shipping country.
          Shipping cost will show upon checking out on the website.
        </div>
        <div className="flex items-start mb-2 justify-center">
          {" "}
          <div className="w-3 h-3 mr-3">
            <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 " />
          </div>
          Items will only be returned in their original packaging and brand-new
          condition.
        </div>
        <div className="flex items-start mb-2 justify-center">
          {" "}
          <div className="w-3 h-3 mr-3">
            <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 " />
          </div>
          Minimum Order Value: 1,500 DHS
        </div>
        <div className="flex items-start mb-2 justify-center">
          {" "}
          <div className="w-3 h-3 mr-3">
            <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 " />
          </div>
          If you wish to cancel your order before delivery, please call any of
          our customer service representatives as soon as possible. In case the
          order has already been processed you will need to return the item on
          spot with the driver and our agents will advise on the next actions
          regarding refunds.
        </div>
        <div className="flex items-start mb-2 justify-center">
          {" "}
          <div className="w-3 h-3 mr-3">
            <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 " />
          </div>
          <div className="">
            For all follow-ups for shipping and delivery please contact
            <Link
              href="milto:wecare@yourkitchencenter.com"
              className="text-black/70 hover:text-redcolor"
            >
              &nbsp; wecare@yourkitchencenter.com{" "}
            </Link>
            &nbsp; or 009714&nbsp;205 &nbsp;3403
          </div>
        </div>
        <div className="flex items-start mb-2 justify-center">
          {" "}
          <div className="w-3 h-3 mr-3">
            <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 " />
          </div>
          Customer to pay Aramex for any custom duty related fees based on rules
          and regulations of country of shipping upon collection of shipped
          item.
        </div>
        <p className="text-redcolor font-bold text-xl mb-2 mt-36">
          Order cancellations
        </p>
        <div className="flex items-start mb-40 justify-center">
          {" "}
          <div className="w-3 h-3 mr-3">
            <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 " />
          </div>
          <div className="">
            For any order cancellation please contact{" "}
            <Link
              href="milto:wecare@yourkitchencenter.com"
              className="text-black/70 hover:text-redcolor"
            >
              &nbsp; wecare@yourkitchencenter.com{" "}
            </Link>
            &nbsp; or 04-284-3322
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
