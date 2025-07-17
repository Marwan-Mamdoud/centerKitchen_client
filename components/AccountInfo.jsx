"use client";
import setUserInfo from "@/store/UserInfo";
import Link from "next/link";
import React, { useState } from "react";
import DashboardAccount from "./DashboardAccount";
import Orders from "./Orders";
import Wishlist from "./Wishlist";
import AccountDetails from "./AccountDetails";
import { Logout } from "@/lib/APIS";
import setDashInfo from "@/store/UserInfoDash";
import Addresses from "./Addresses";
import SetBillingAddress from "@/store/SetBillingAddress";
import SetShippingAddress from "@/store/SetShippingAddress";
import setProductsToCart from "@/store/setProductsToCart";

const AccountInfo = () => {
  const { setUser } = setUserInfo();
  const { status, setStatus } = setDashInfo();
  const { deleteAddressBilling } = SetBillingAddress();
  const { deleteAddressShipping } = SetShippingAddress();
  const { deleteCart } = setProductsToCart();
  const HundleLogout = async () => {
    const result = await Logout();
    if (result) {
      setUser(false);
      deleteCart();
      deleteAddressBilling();
      deleteAddressShipping();
    }
  };
  return (
    <div className="">
      <div
        className={`bg-[url('/page_header.jpg')]  bg-contain bg-no-repeat bg-center bg-bluecolor flex w-full mb-20  [@media(max-width:1050px)]:mb-4 items-center justify-center gap-4 flex-col h-[21dvh]`}
      >
        <p className="text-white font-bold text-5xl">My Account</p>
        <div className=" text-white font-semibold text-xs tracking-wider uppercase">
          <Link href="/">Home /</Link> my account
        </div>
      </div>
      <div className="grid grid-cols-4  [@media(max-width:1050px)]:flex  [@media(max-width:1050px)]:flex-col  [@media(max-width:1050px)]:gap-5  [@media(max-width:1050px)]:items-start  [@media(max-width:1050px)]:justify-start gap-2 max-w-[1200px] h-full py-16 mx-auto">
        <div className="flex flex-col  [@media(max-width:1050px)]:w-full  [@media(max-width:1050px)]:pt-1  [@media(max-width:1050px)]:pl-4 items-start justify-start border-r-[1px] border-graycolor pt-5 h-full">
          <p className=" uppercase text-black text-2xl pl-3 mb-4 font-semibold border-b-[2px] pb-2 w-10/12">
            my account
          </p>
          <button
            onClick={() => setStatus("Dash")}
            className={`${
              status == "Dash" ? "bg-gray-300" : ""
            } py-3 hover:bg-gray-50 w-10/12 text-start pl-3 font-semibold text-black`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setStatus("Orders")}
            className={`${
              status == "Orders" ? "bg-gray-300" : ""
            } py-3 hover:bg-gray-50 w-10/12 text-start pl-3 font-semibold text-black`}
          >
            Orders
          </button>
          <button
            onClick={() => setStatus("Addresses")}
            className={`${
              status == "Addresses" ? "bg-gray-300" : ""
            } py-3 hover:bg-gray-50 w-10/12 text-start pl-3 font-semibold text-black`}
          >
            Addresses
          </button>
          <button
            onClick={() => setStatus("Account")}
            className={`${
              status == "Account" ? "bg-gray-300" : ""
            } py-3 hover:bg-gray-50 w-10/12 text-start pl-3 font-semibold text-black`}
          >
            Account Details
          </button>
          <button
            onClick={() => setStatus("Wishlist")}
            className={`${
              status == "Wishlist" ? "bg-gray-300" : ""
            } py-3 hover:bg-gray-50 w-10/12 text-start pl-3 font-semibold text-black`}
          >
            Weshlist
          </button>
          <button
            onClick={HundleLogout}
            className="py-3 hover:bg-gray-50 w-10/12 text-start pl-3 font-semibold text-black"
          >
            logout
          </button>
        </div>
        <div className="col-span-3">
          {(() => {
            switch (status) {
              case "Dash":
                return <DashboardAccount />;
              case "Orders":
                return <Orders />;
              case "Wishlist":
                return <Wishlist />;
              case "Account":
                return <AccountDetails />;
              case "Addresses":
                return <Addresses />;
              default:
                return <DashboardAccount />;
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
