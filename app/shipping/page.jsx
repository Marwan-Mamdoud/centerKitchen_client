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
        <p className="text-white font-bold text-5xl">Shipping</p>
        <div className=" text-white font-semibold text-xs tracking-wider uppercase">
          <Link href="/">Home /</Link> shipping
        </div>
      </div>
      <div className="flex flex-col items-start justify-start px-48 [@media(max-width:1050px)]:px-3 py-20 text-graycolor">
        <p className="text-redcolor font-semibold text-xl">
          Shipping and Delivery
        </p>
        <p className="flex items-start mt-4 mb-2  justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3 text-gray-400 mr-3" />
          We deliver to all 7 emirates within a period of 3-5 days for available
          stock.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3 text-gray-400 mr-3" />
          Once you receive the delivered item please make sure to check all
          content of the delivered item for any missing or defective part.
          Should that be the case please make sure to return the item on the
          spot or within a maximum period of 7 days. Yourkitchencenter.com will
          not be accountable for any returns after 7 days.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 mr-3" />
          Items will only be returned in their original packaging and brand new
          condition.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 mr-3" />
          Delivery during the holiday period: Order made 2 days before any
          public holiday will be delivered 1 to 2 days after the end of the
          holiday.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 mr-3" />
          Any Order over AED1,000 will be shipped for free. Otherwise, shipping
          charges of 100 DHS apply.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 mr-3" />
          If you wish to cancel your order before delivery, please call any of
          our customer service representatives as soon as possible. In case the
          order has already been processed you will need to return the item on
          spot with the driver and our agents will advise on the next actions
          regarding refunds.
        </p>
        <div className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 mr-3" />
          <div className="">
            For all follow-ups for shipping and delivery please contact
            <Link
              href="milto:wecare@yourkitchencenter.com"
              className="text-black/70 hover:text-redcolor"
            >
              &nbsp; wecare@yourkitchencenter.com{" "}
            </Link>
            &nbsp; or 04-284-3322
          </div>
        </div>
        <p className="text-redcolor font-bold text-lg mb-2 mt-24">
          Installation, Commissioning & Service requests
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 mr-3" />
          For any installation please click on tab next to selected product.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <div className="w-3 h-3 mr-3">
            <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 " />
          </div>
          Small appliance Installation charge or service request: 300 DHS
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <div className="w-3 h-3 mr-3">
            <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 " />
          </div>
          Large appliance installation charge or service request: 450 DHS
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <div className="w-3 h-3 mr-3">
            <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 " />
          </div>
          Free Plug in play: 0 installation cost
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <div className="w-3 h-3 mr-3">
            <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 " />
          </div>
          We do not undertake any MEP (Mechanical, Electric, and Plumbing) work.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <div className="w-3 h-3 mr-3">
            <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 " />
          </div>
          Site should be ready by corresponding fit out contractor for any
          machine installation and route for precise delivery location.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <div className="w-3 h-3 mr-3">
            <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 " />
          </div>
          Any unit requiring technical assistance should be done from our side
          for warranty to be applicable.
        </p>
        <p className="text-redcolor font-bold text-lg mb-4 mt-12">
          Shipping and Delivery to Oman, Qatar and Bahrain.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 mr-3" />
          We deliver all over UAE and from Dubai to Oman, Qatar and Bahrain.
        </p>
        <p className="flex items-start mb-2 justify-center">
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
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <div className="w-3 h-3 mr-3">
            <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 " />
          </div>
          Shipping cost varies depending on product and shipping country.
          Shipping cost will show upon checking out on the website.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <div className="w-3 h-3 mr-3">
            <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 " />
          </div>
          Items will only be returned in their original packaging and brand-new
          condition.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <div className="w-3 h-3 mr-3">
            <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 " />
          </div>
          Minimum Order Value: 1,500 DHS
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <div className="w-3 h-3 mr-3">
            <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 " />
          </div>
          If you wish to cancel your order before delivery, please call any of
          our customer service representatives as soon as possible. In case the
          order has already been processed you will need to return the item on
          spot with the driver and our agents will advise on the next actions
          regarding refunds.
        </p>
        <div className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 mr-3" />
          <span className="">
            For all follow-ups for shipping and delivery please contact
            <Link
              href="milto:wecare@yourkitchencenter.com"
              className="text-black/70 hover:text-redcolor"
            >
              &nbsp; wecare@yourkitchencenter.com{" "}
            </Link>
            &nbsp; or 009714&nbsp; 205&nbsp; 3403
          </span>
        </div>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 mr-3" />
          Customer to pay Aramex for any custom duty related fees based on rules
          and regulations of country of shipping upon collection of shipped
          item.
        </p>
        <p className="text-redcolor font-bold text-lg mb-4 mt-12">
          Installation and Commissioning in Oman, Qatar and Bahrain.
        </p>
        <p className="flex items-start mb-64 justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 mr-3" />
          We do not provide any installation and commissioning for orders
          shipped to Oman/Qatar/Bahrain
        </p>
      </div>
    </div>
  );
};

export default page;
