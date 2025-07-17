import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

export const metadata = {
  title: "Terms and Conditions - YKC",
};

const page = () => {
  return (
    <div className="">
      <div
        className={`bg-[url('/page_header.jpg')]  bg-contain bg-no-repeat bg-center bg-bluecolor flex w-full  items-center justify-center gap-4 flex-col h-[21dvh]`}
      >
        <p className="text-white font-bold text-5xl [@media(max-width:1050px)]:text-2xl">
          Terms and Conditions
        </p>
        <div className=" text-white font-semibold text-xs tracking-wider uppercase">
          <Link href="/">Home /</Link> Terms and Conditions
        </div>
      </div>
      <div className="flex flex-col items-start justify-start [@media(max-width:1050px)]:text-sm mx-auto [@media(max-width:1050px)]:px-5 max-w-[1200px] py-20 text-graycolor">
        <p className="text-redcolor font-bold text-xl">General Terms</p>
        <p className="flex items-start mt-4 mb-2  justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3 text-gray-400 mr-3" />
          www.yourkitchencenter.com is officially owned and operated by Falcon
          Professional General Trading LLC.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3 text-gray-400 mr-3" />
          By accessing and using the Website, you are accepting terms and
          conditions on this page that are effective as of the date and time you
          use the website.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 mr-3" />
          Please read the terms carefully before accessing or using the
          information and services available on this website.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 mr-3" />
          These terms will be a legal agreement between “you” (the user of this
          website) and “us” Falcon Professional General Trading (
          www.yourkitchencenter.com)
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 mr-3" />
          These terms can be modified from time to time without notice to you
          and you should therefore regularly review these Terms for any such
          modifications.
        </p>
        <p className="flex items-start mb-32 justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 mr-3" />
          If you do not agree to, or cannot comply with, the terms please kindly
          do not proceed to use the website.
        </p>
        <p className="text-redcolor font-bold text-xl ">
          Terms and Conditions for UAE.
        </p>
        <p className="text-redcolor font-bold text-xl my-4">
          A. Shipping and Delivery
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mt-1.5 w-3 h-3  text-gray-400 mr-3" />
          We deliver to all 7 emirates within a period of 3-5 days for available
          stock.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1 w-4 h-4  text-gray-400 " />
          Once you receive the delivered item please make sure to check all
          content of the delivered item for any missing or defective part.
          Should that be the case please make sure to return the item on the
          spot or within a maximum period of 7 days. Please do not discard the
          original packing. Yourkitchencenter.com will not be accountable for
          any returns after 7 days.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Items will only be returned in their original packaging and brand new
          condition.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Delivery during the holiday period: Order made 2 days before any
          public holiday will be delivered 1 to 2 days after the end of the
          holiday.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Any order over AED1,000 will be shipped for free. Otherwise, shipping
          charges of 100 DHS apply.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1 w-3.5 h-3.5  text-gray-400 " />
          If you wish to cancel your order before delivery, please call any of
          our customer service representatives as soon as possible. In case the
          order has already been processed you will need to return the item on
          spot with the driver and our agents will advise on the next actions
          regarding refunds.
        </p>
        <div className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          <p className="">
            For all follow-ups for shipping and delivery please contact
            <Link
              href="milto:wecare@yourkitchencenter.com"
              className="text-black/70 hover:text-redcolor"
            >
              &nbsp; wecare@yourkitchencenter.com{" "}
            </Link>
            &nbsp; or 009714&nbsp;205 &nbsp;3403
          </p>
        </div>
        <p className="text-redcolor font-bold  text-lg [@media(max-width:1050px)]:text-base mb-2 mt-36">
          B. Installation and Commissioning
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          For any installation please click on tab next to selected product.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Small appliance Installation charge or service request: 300 DHS
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Large appliance installation charge or service request: 450 DHS
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Free Plug in play: 0 installation cost
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          We do not undertake any MEP (Mechanical, Electric, and Plumbing) work.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Site should be ready by corresponding fit out contractor for any
          machine installation and route for precise delivery location.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Any unit requiring technical assistance should be done from our side
          for warranty to be applicable.
        </p>
        <p className="text-redcolor font-bold [@media(max-width:1050px)]:text-base text-lg mb-2 mt-36">
          C. Payment Options
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Cash on Delivery ( no extra charge for this option)
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Wire transfer (Our bank account details)
        </p>
        <div className="border-l-2 border-redcolor text-lg py-1 px-10 [@media(max-width:1050px)]:text-base my-2">
          <p className="text-black">
            Account Name:&nbsp;
            <span className="font-bold">
              Falcon Professional General Trading LLC
            </span>
          </p>
          <p className="text-black">
            Account Number:&nbsp;
            <span className="font-bold">013-06-278867</span>
          </p>
          <p className="text-black">
            Bank Name:&nbsp;
            <span className="font-bold">Bank of Sharjah </span>
          </p>
          <p className="text-black">
            Branch:&nbsp;
            <span className="font-bold">
              Al Garhoud, Dubai, United Arab Emirates
            </span>
          </p>
          <p className="text-black">
            Swift Code:&nbsp;
            <span className="font-bold">SHARAEAS</span>
          </p>
          <p className="text-black">
            IBAN:&nbsp;
            <span className="font-bold">AE57 0120 0000 0130 6278 867</span>
          </p>
          <p className="text-black">
            Currency:&nbsp;
            <span className="font-bold">AED</span>
          </p>
        </div>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Card payment Visa/Mastercard ( Merchant charges apply)
        </p>
        <p className="text-redcolor font-bold text-lg mb-2 mt-36">
          D. Warranty
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          The warranty commences on the date of purchase by the customer and is
          valid for 1 year only.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Documentary proof of purchase must be shown to the visiting technician
          before any service work covered by the warranty can be undertaken.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Where an appliance fault or failure is proven, the warranty covers the
          repair or replacement of the appliance.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          In all cases, the manufacturer reserves the right to inspect the
          appliance and to repair where it is feasible and practical to do so.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Any electrical or mechanical part(s) supplied with or as part of the
          appliance other than those excluded below.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Parts that are supplied or replaced at any time, whether in or out of
          the manufacturer’s warranty period, are supplied with a separate 12
          months parts-only warranty.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          All used/demo units have 3 months manufacturer warranty only.
        </p>
        <p className="my-3 font-bold">*EXCLUDED from WARRANTY</p>

        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Any consumable or renewable item that has a limited life, such as
          light bulbs
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Items that can break in the normal course of use and wear, such as
          oven trays and shelves, fridge and freezer drawers, dishwasher
          baskets, gaskets, etc. other than where the fault is due to an obvious
          and visible manufacturing defect.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1 w-5 h-5  text-gray-400 " />
          Parts that are broken or impaired as a result of accidental damage or
          improper use, e.g. oven door glasses that shatter due to scratches
          from tools, rings, abrasive cleaning agents, etc. oven fascias that
          peel or discolor due to grilling with the oven door open (some models)
          stainless steel hobs that discolor due to hotplate/burner operations
          without a pan or utensil (the above are illustrative examples only and
          do not compromise an exhaustive or definitive list).
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Damage caused as a result of incorrect installation.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Costs of service engineer attendance where they report “No appliance
          fault” e.g. no evidence of the alleged or reported fault despite
          adequate and thorough testing.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Damage caused by abuse (e.g. use of the appliances for a purpose other
          than for which it was designed or intended).
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Damage caused by incorrect/inappropriate handling or transportation.
          Damage sustained during transportation and delivery from the
          manufacturer or its agents must be reported within the stipulated
          reporting period – a damaged appliance must not be installed.
        </p>
        <div className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          <p className="">
            For any warranty follow-ups you can contact our service team on{" "}
            <Link
              href="milto: warranty@yourkitchencenter.com"
              className="text-black/70 hover:text-redcolor"
            >
              &nbsp; warranty@yourkitchencenter.com{" "}
            </Link>
            &nbsp; or +971&nbsp;4&nbsp;205 &nbsp;3400
          </p>
        </div>
        <p className="text-redcolor font-bold text-lg [@media(max-width:1050px)]:text-base mb-2 mt-36">
          E. Returns or Replacements
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          All return requests are subject to management approval.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          In case the product is in its original packaging and has not been
          damaged in any shape or form then the customer has a maximum of 7 days
          to return the product.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          25% restocking fee from total invoice value applies for product
          return.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          For Credit or Debit card payments any refund will be within 7 to 10
          working days. Please take note processing fee will be deducted from
          refund.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          For Cash on delivery payment, the amount will be refunded via a bank
          wire transfer within 7 working days.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          For Bank Wire, payment amount will be transferred via a bank wire
          within 7 working days.
        </p>
        <div className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          <p className="">
            For all return or replacement follow ups please contact{" "}
            <Link
              href="milto:wecare@yourkitchencenter.com"
              className="text-black/70 hover:text-redcolor"
            >
              &nbsp; wecare@yourkitchencenter.com{" "}
            </Link>
            &nbsp; or +971&nbsp;4&nbsp;205 &nbsp;3403
          </p>
        </div>
        <p className="text-redcolor font-bold [@media(max-width:1050px)]:text-base text-lg mb-2 mt-36">
          F. Order cancellations
        </p>
        <div className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          <p className="">
            For any order cancellation please contact{" "}
            <Link
              href="milto:wecare@yourkitchencenter.com"
              className="text-black/70 hover:text-redcolor"
            >
              &nbsp; wecare@yourkitchencenter.com{" "}
            </Link>
            &nbsp; or +971&nbsp;4&nbsp;205 &nbsp;3403
          </p>
        </div>
        <p className="text-redcolor font-bold [@media(max-width:1050px)]:text-base text-lg mb-2 mt-36">
          Terms and Condition for Shipping and Delivery to Oman, Qatar and
          Bahrain
        </p>
        <p className="text-redcolor font-bold  [@media(max-width:1050px)]:text-base text-lg mb-2 mt-4">
          A. Shipping and Delivery to Oman, Qatar and Bahrain
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          We deliver all over UAE and from Dubai to Oman, Qatar and Bahrain.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1 w-5 h-5  text-gray-400 " />
          Once you receive the delivered item, please make sure to check all
          content of the delivered item for any missing or defective part.
          Should that be the case please make sure to return the item on the
          spot or within a maximum period of 7 days. Please do not discard the
          original packing. Yourkitchencenter.com will not be accountable for
          any returns after 7 days.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          All prices are inclusive of shipping,customs duty etc…
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Items will only be returned in their original packaging and brand-new
          condition.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Minimum Order Value: 500 US Dollars.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1 w-3.5 h-3.5  text-gray-400 " />
          If you wish to cancel your order before delivery, please call any of
          our customer service representatives as soon as possible. In case the
          order has already been processed you will need to return the item on
          spot with the driver and our agents will advise on the next actions
          regarding refunds.
        </p>
        <div className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          <p className="">
            For all follow-ups for shipping and delivery please contact
            <Link
              href="milto:wecare@yourkitchencenter.com"
              className="text-black/70 hover:text-redcolor"
            >
              &nbsp; wecare@yourkitchencenter.com{" "}
            </Link>
            &nbsp; or 009714&nbsp;205 &nbsp;3403
          </p>
        </div>
        <div className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-[-5px] w-8 h-8  text-gray-400 " />
          For Oman or Bahrain shipments if a certain product needs a specific
          permit the customer will need to provide it to Yourkitchencenter.com
          so we can proceed with shipment, else customer will have to cancel
          order or pick up unit from our warehouse in UAE page price and do his
          own shipment arrangement. Example: Items under HS code for Bahrain
          need the below to be eligible to be shipped there(customer to provide
          permit). &nbsp;HS Code: 84185000
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Requires Chemical PermissionHS Code: 85165000
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Requires permission from Ministry of Interior &nbsp; For Oman items
          with HS code 84185000 needs a permit to be eligible to be shipped to
          Oman( Customer to provide permit).
        </div>
        <p className="text-redcolor font-bold  [@media(max-width:1050px)]:text-base text-lg mb-2 mt-12">
          B. Installation and Commissioning
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          We do not provide any installation and commissioning for orders
          shipped to Oman/Qatar/Bahrain
        </p>
        <p className="text-redcolor font-bold text-lg mb-2 mt-12">
          C. Payment Options
        </p>
        <p className="flex items-start mb-0 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Wire transfer (Our bank account details)
        </p>

        <div className="text-lg  [@media(max-width:1050px)]:text-base py-1 px-10 ">
          <p className="text-gray-500 text-sm">
            Account Name:&nbsp;
            <span className="font-bold">
              Falcon Professional General Trading LLC
            </span>
          </p>
          <p className="text-gray-500 text-sm">
            Account Number:&nbsp;
            <span className="font-bold">013-06-278867</span>
          </p>
          <p className="text-gray-500 text-sm">
            Bank Name:&nbsp;
            <span className="font-bold">Bank of Sharjah </span>
          </p>
          <p className="text-gray-500 text-sm">
            Branch:&nbsp;
            <span className="font-bold">
              Al Garhoud, Dubai, United Arab Emirates
            </span>
          </p>
          <p className="text-gray-500 text-sm">
            Swift Code:&nbsp;
            <span className="font-bold">SHARAEAS</span>
          </p>
          <p className="text-gray-500 text-sm">
            IBAN:&nbsp;
            <span className="font-bold">AE57 0120 0000 0130 6278 867</span>
          </p>
          <p className="text-gray-500 text-sm">
            Currency:&nbsp;
            <span className="font-bold">AED</span>
          </p>
        </div>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Card payment Visa/Mastercard and Apple Pay (Merchant charges apply)
        </p>
        <p className="text-redcolor font-bold text-lg mb-2 mt-16">
          D. Warranty
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          One year manufacturing warranty against defected parts, parts supply
          only.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          No warranty against breakdown or misuse of machine.
        </p>
        <p className="text-redcolor font-bold text-lg mb-2 mt-16">
          E. Returns or Replacements
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          Customer will cover shipping cost for product return.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1 w-3.5 h-3.5  text-gray-400 " />
          In case the product is in its original packaging and has not been
          damaged in any shape or form then the customer has a maximum of 7 days
          to return the product at their own cost via their own shipping
          company.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          25% restocking fee from the total invoice applies for product return.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          For Credit or Debit card payments any refund will be within 7 to 10
          working days. Please take note processing fee will be deducted from
          refund.
        </p>
        <p className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          For Bank Wire, payment amount will be transferred via a bank wire
          within 7 working days.
        </p>
        <div className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          <p className="">
            For all return or replacement follow ups please contact
            <Link
              href="milto:wecare@yourkitchencenter.com"
              className="text-black/70 hover:text-redcolor"
            >
              &nbsp; wecare@yourkitchencenter.com{" "}
            </Link>
            &nbsp; or 009714&nbsp;205 &nbsp;3403
          </p>
        </div>
        <p className="text-redcolor font-bold  [@media(max-width:1050px)]:text-base text-lg mb-2 mt-16">
          F. Order Cancellations
        </p>
        <div className="flex items-start mb-2 justify-center">
          {" "}
          <FaAngleRight className="mr-3 mt-1.5 w-3 h-3  text-gray-400 " />
          <p className="">
            For any order cancellation please contact{" "}
            <Link
              href="milto:wecare@yourkitchencenter.com"
              className="text-black/70 hover:text-redcolor"
            >
              &nbsp; wecare@yourkitchencenter.com{" "}
            </Link>
            &nbsp; or +971&nbsp;4&nbsp;205 &nbsp;3403{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
