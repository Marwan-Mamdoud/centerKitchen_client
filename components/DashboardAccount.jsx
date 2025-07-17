"use client";
import setUserInfo from "@/store/UserInfo";
import { PiListChecksFill, PiMapPinAreaLight } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { HeartIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Logout } from "@/lib/APIS";
import setDashInfo from "@/store/UserInfoDash";

const DashboardAccount = () => {
  const { user, setUser } = setUserInfo();
  const { setStatus } = setDashInfo();
  const HundleLogout = async () => {
    const result = await Logout();
    if (result) {
      setUser(false);
    }
  };
  return (
    <div className="pt-5 pl-7 flex flex-col w-full items-start justify-start gap-7 mb-36">
      <p className="text-gray-400">
        Hello <span className="text-gray-600">{user.name}</span>
      </p>
      <p className="text-gray-400">
        From your account dashboard you can view your{" "}
        <span
          onClick={() => setStatus("Orders")}
          className="text-gray-600 hover:text-redcolor cursor-pointer"
        >
          recent orders
        </span>
        , manage your{" "}
        <span
          onClick={() => setStatus("Addresses")}
          className="text-gray-600 hover:text-redcolor cursor-pointer"
        >
          shipping and billing addresses
        </span>{" "}
        , and{" "}
        <span
          onClick={() => setStatus("Account")}
          className="text-gray-600 hover:text-redcolor cursor-pointer"
        >
          edit your password
        </span>{" "}
        .
      </p>
      <div className="grid grid-cols-3  [@media(max-width:1050px)]:grid-cols-1  [@media(max-width:1050px)]:pr-5 w-full h-fit gap-5 items-center justify-center">
        <button
          onClick={() => setStatus("Orders")}
          className="h-[150px] w-full shadow-xl border-gray-200 border-2 flex flex-col items-center justify-center group hover:bg-gray-200 duration-200"
        >
          <PiListChecksFill className="pb-2 w-full h-3/6 text-gray-200 group-hover:text-redcolor duration-200" />
          <p className="uppercase text-black font-bold">Orders</p>
        </button>
        <button
          onClick={() => setStatus("Addresses")}
          className="h-[150px] w-full shadow-xl border-gray-200 border-2 flex flex-col items-center justify-center group hover:bg-gray-200 duration-200"
        >
          <PiMapPinAreaLight className="pb-2 w-full h-3/6 text-gray-200 group-hover:text-redcolor duration-200" />
          <p className="uppercase text-black font-bold">Addresses</p>
        </button>
        <button
          onClick={() => setStatus("Account")}
          className="h-[150px] w-full shadow-xl border-gray-200 border-2 flex flex-col items-center justify-center group hover:bg-gray-200 duration-200"
        >
          <VscAccount className="pb-2 w-full h-3/6 text-gray-200 group-hover:text-redcolor duration-200" />
          <p className="uppercase text-black font-bold">Account Details</p>
        </button>
        <button
          onClick={() => setStatus("Wishlist")}
          className="h-[150px] w-full shadow-xl border-gray-200 border-2 flex flex-col items-center justify-center group hover:bg-gray-200 duration-200"
        >
          <HeartIcon className="pb-2 w-full h-3/6 text-gray-200 group-hover:text-redcolor duration-200" />
          <p className="uppercase text-black font-bold">Wish list</p>
        </button>
        <button
          onClick={HundleLogout}
          className="h-[150px] w-full shadow-xl border-gray-200 border-2 flex flex-col items-center justify-center group hover:bg-gray-200 duration-200"
        >
          <RiLogoutBoxRLine className="pb-2 w-full h-3/6 text-gray-200 group-hover:text-redcolor duration-200" />
          <p className="uppercase text-black font-bold">Log out</p>
        </button>
      </div>
    </div>
  );
};

export default DashboardAccount;
