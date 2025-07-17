"use client";
import setProductsToCart from "@/store/setProductsToCart";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TbShoppingCartOff } from "react-icons/tb";

import { GoX } from "react-icons/go";
import SetShippingAddress from "@/store/SetShippingAddress";
import SetBillingAddress from "@/store/SetBillingAddress";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import setDashInfo from "@/store/UserInfoDash";
import { Checkout } from "@/lib/APIS";

const Page = () => {
  const { cart, setCart, deleteProduct } = setProductsToCart();
  const { addressShipping } = SetShippingAddress();
  const { BillingAddress } = SetBillingAddress();
  const { setStatus } = setDashInfo();

  const router = useRouter();
  const Vat = 3343;
  const [Subtotal, setSubtotal] = useState(0);
  useEffect(() => {
    setSubtotal(0);
    for (let i = 0; i < cart.length; i++) {
      setSubtotal(
        (prev) =>
          prev + (cart[i].lastPrice + cart[i].options) * cart[i].numProduct
      );
    }
  }, [cart]);
  const MinusProductQuntity = (item) => {
    if (item.numProduct == 1) {
      return;
    } else {
      const data = cart.map((i) =>
        i._id == item._id ? { ...item, numProduct: item.numProduct - 1 } : i
      );
      setCart(data);
    }
  };

  const IncreaseProductQuntity = (item) => {
    const data = cart.map((i) =>
      i._id == item._id ? { ...item, numProduct: item.numProduct + 1 } : i
    );
    setCart(data);
  };

  const HundleCheckout = async () => {
    if (!BillingAddress && !addressShipping) {
      setStatus("Addresses");
      router.push("/my_account");
      return toast.warn("Please Set Shipping and Billing Addresses First");
    }
    console.log({ items: cart });

    await Checkout({ items: cart });
    return toast.success("Done Checkout Successfully.");
  };

  return (
    <div>
      <div
        className={`bg-[url('/page_header.jpg')]  bg-contain bg-no-repeat bg-center bg-bluecolor flex w-full  items-center justify-center gap-4 flex-col h-[21dvh]`}
      >
        <p className="text-white font-bold text-5xl">Cart</p>
        <div className=" text-white font-semibold text-xs tracking-wider uppercase">
          <Link href="/">Home /</Link> Cart
        </div>
      </div>
      {cart.length == 0 ? (
        <div className="flex flex-col   items-center justify-center pt-28 pb-16">
          <TbShoppingCartOff className="text-gray-200 w-[200px]  [@media(max-width:1050px)]:w-[100px] mb-10 h-fit" />
          <p className="text-6xl  [@media(max-width:1050px)]:text-2xl font-bold mb-10 text-black">
            Your cart is currently empty.
          </p>
          <p className="text-xl text-center  [@media(max-width:1050px)]:text-base mb-1 text-gray-400">
            Before proceed to checkout you must add some products to your
            shopping cart.
          </p>
          <p className="text-xl text-center  [@media(max-width:1050px)]:text-base text-gray-400">
            You will find a lot of interesting products on our{" "}
            <span className="font-bold text-gray-400">Shop</span> page.
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-start justify-start my-12 gap-10 max-w-[1200px] mx-auto ">
          <div className="w-full  [@media(max-width:1050px)]:hidden">
            <div className="w-full py-5 border-b-[1px] flex items-center justify-center border-b-gray-200">
              <p className="w-5/12 uppercase text-center font-bold text-sm">
                product
              </p>
              <p className="w-2/12 uppercase text-center font-bold text-sm">
                price
              </p>
              <p className="w-2/12 uppercase text-center font-bold text-sm">
                quntity
              </p>
              <p className="w-3/12 uppercase text-center font-bold text-sm">
                Subtotal
              </p>
            </div>
            {cart?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full py-5 border-b-[1px] flex  items-center justify-center border-b-gray-200"
                >
                  <p
                    onClick={() => deleteProduct(item)}
                    className="w-1/12 group"
                  >
                    <GoX className="w-full h-5 group-hover:rotate-180 cursor-pointer" />
                  </p>
                  <p className="w-4/12 uppercase text-center font-bold flex items-center justify-between text-sm">
                    <img
                      src={item.image}
                      alt="img"
                      className="w-16 h-16 object-contain"
                    />
                    <span>{item.name.en}</span>
                  </p>
                  <p className="w-2/12 uppercase text-center text-bluecolor font-semibold text-sm">
                    {item.lastPrice.toLocaleString()}
                  </p>
                  <div className="w-2/12 flex items-center h-[40px] justify-center">
                    <button
                      onClick={() => IncreaseProductQuntity(item)}
                      className="border-2 px-1 h-full border-gray-300"
                    >
                      <PlusIcon className="text-gray-500 w-4 h-4 " />
                    </button>
                    <p className=" border-y-2 px-3 border-gray-300 text-gray-500 text-center flex items-center justify-center h-full">
                      {item.numProduct}
                    </p>
                    <button
                      onClick={() => MinusProductQuntity(item)}
                      className="border-2 border-gray-300 px-1 h-full"
                    >
                      <MinusIcon className="text-gray-500  w-4 h-4" />
                    </button>
                  </div>

                  <p className="w-3/12 uppercase text-center text-bluecolor font-bold text-sm">
                    {(
                      item.lastPrice * item.numProduct +
                      item.options
                    ).toLocaleString()}
                  </p>
                </div>
              );
            })}
          </div>
          <div className=" h-0 opacity-0 invisible  [@media(max-width:1050px)]:opacity-100  [@media(max-width:1050px)]:visible flex flex-col items-center justify-center gap-10 [@media(max-width:1050px)]:h-fit">
            {cart.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-start justify-between pb-4 border-b-2 border-gray-500 w-full gap-4 px-2"
                >
                  <div className="w-1/3 h-full">
                    <img
                      src={item.image}
                      alt="img"
                      className="w-full object-fill h-full"
                    />
                  </div>
                  <div className="w-full flex flex-col mx-auto items-start justify-start gap-2">
                    <div className="flex items-center w-full justify-between">
                      <p className="text-black uppercase text-sm font-semibold">
                        {item.name.en}
                      </p>
                      <GoX className="w-5 h-5 text-black" />
                    </div>
                    <p className="text-gray-300">
                      installation Charges:{" "}
                      {item.options > 0 ? "Required (+450 AED)" : "No Thanks"}
                    </p>
                    <div className="flex items-center w-full justify-between pt-2 ">
                      <p className="text-black uppercase text-sm font-semibold">
                        price
                      </p>
                      <p className="text-bluecolor ">
                        {item.lastPrice.toLocaleString()} AED
                      </p>
                    </div>
                    <div className="flex items-center w-full justify-between py-2 border-y-[1px] border-y-gray-200">
                      <p className="text-black uppercase text-sm font-semibold">
                        quntity
                      </p>
                      <div className="w-fit flex items-center h-[40px] justify-center">
                        <button
                          onClick={() => IncreaseProductQuntity(item)}
                          className="border-2 px-1 h-full border-gray-300"
                        >
                          <PlusIcon className="text-gray-500 w-4 h-4 " />
                        </button>
                        <p className=" border-y-2 px-3 border-gray-300 text-gray-500 text-center flex items-center justify-center h-full">
                          {item.numProduct}
                        </p>
                        <button
                          onClick={() => MinusProductQuntity(item)}
                          className="border-2 border-gray-300 px-1 h-full"
                        >
                          <MinusIcon className="text-gray-500  w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center w-full justify-between pb-2">
                      <p className="text-black uppercase text-sm font-semibold">
                        Subtotal
                      </p>
                      <p className="text-bluecolor ">
                        {" "}
                        {(
                          item.lastPrice * item.numProduct +
                          item.options
                        ).toLocaleString()}
                        AED
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="border-2 border-gray-200 w-[400px] p-5 ml-3 flex flex-col h-fit items-center justify-start">
            <p className="font-bold w-full text-start mb-10 uppercase text-2xl text-black ">
              Cart totals
            </p>
            {/* <div className="flex items-center justify-between w-full py-5 border-b-[1px] border-b-gray-300">
              <p className="text-lg font-bold text-black">Subtotal</p>
              <p className="text-bluecolor">{Subtotal.toLocaleString()} AED</p>
            </div> */}
            {/* <div className="flex items-center justify-between w-full py-5 border-b-[1px] border-b-gray-300">
              <p className="text-lg font-bold text-black">VAT rate </p>
              <p className="text-bluecolor font-semibold">
                {Vat.toLocaleString()} AED
              </p>
            </div> */}
            <div className="flex items-center justify-between w-full py-5">
              <p className="text-2xl font-bold text-black">Total </p>
              <p className="text-bluecolor font-bold text-2xl">
                {Subtotal.toLocaleString()} AED
              </p>
            </div>
            <button
              onClick={HundleCheckout}
              className="py-3 my-3 px-12 text-sm bg-redcolor hover:bg-bluecolor duration-200 text-white uppercase font-bold"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
