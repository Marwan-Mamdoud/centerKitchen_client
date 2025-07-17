"use client";
import { Logout } from "@/lib/APIS";
import SetBillingAddress from "@/store/SetBillingAddress";
import SetShippingAddress from "@/store/SetShippingAddress";
import setUserInfo from "@/store/UserInfo";
import setDashInfo from "@/store/UserInfoDash";
import Link from "next/link";

const DashUserPopPap = () => {
  const { status, setStatus } = setDashInfo();
  const { setUser } = setUserInfo();
  const { deleteAddressBilling } = SetBillingAddress();
  const { deleteAddressShipping } = SetShippingAddress();
  const HundleLogout = async () => {
    const result = await Logout();
    if (result) {
      setUser(false);
      deleteAddressBilling();
      deleteAddressShipping();
    }
  };
  return (
    <div
      id="login_pop"
      className=" absolute bottom-0 right-[250px] w-[160px] border-t-0 hover:opacity-100 hover:visible hover:translate-y-[100%] duration-500 h-fit translate-x-full translate-y-[110%] opacity-0 invisible z-50 py-6  bg-white border-[1px] border-black/10 flex flex-col items-center justify-center shadow-lg overflow-hidden"
    >
      <Link
        href="/my_account"
        onClick={() => setStatus("Dash")}
        className={`${
          status == "Dash" ? "bg-gray-300" : ""
        } py-3 hover:bg-gray-50 w-full text-start pl-3 text-sm text-black/90`}
      >
        Dashboard
      </Link>
      <Link
        href="/my_account"
        onClick={() => setStatus("Orders")}
        className={`${
          status == "Orders" ? "bg-gray-300" : ""
        } py-3 hover:bg-gray-50 w-full text-start pl-3 text-sm text-black/90`}
      >
        Orders
      </Link>
      <Link
        href="/my_account"
        onClick={() => setStatus("Addresses")}
        className={`${
          status == "Addresses" ? "bg-gray-300" : ""
        } py-3 hover:bg-gray-50 w-full text-start pl-3 text-sm text-black/90`}
      >
        Addresses
      </Link>
      <Link
        href="/my_account"
        onClick={() => setStatus("Addresses")}
        className={`${
          status == "Account" ? "bg-gray-300" : ""
        } py-3 hover:bg-gray-50 w-full text-start pl-3 text-sm text-black/90`}
      >
        Account Details
      </Link>
      <Link
        href="/my_account"
        onClick={() => setStatus("Wishlist")}
        className={`${
          status == "Wishlist" ? "bg-gray-300" : ""
        } py-3 hover:bg-gray-50 w-full text-start pl-3 text-sm text-black/90`}
      >
        Weshlist
      </Link>
      <Link
        href="/my_account"
        onClick={HundleLogout}
        className="py-3 hover:bg-gray-50 w-full text-start pl-3 text-sm text-black/90"
      >
        logout
      </Link>
    </div>
  );
};

export default DashUserPopPap;
