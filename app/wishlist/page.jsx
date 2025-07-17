"use client";
import NewProduct from "@/components/NewProduct";
import SetProductsToWishlist from "@/store/setProductsToWishlist";
import { HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { GoX } from "react-icons/go";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const { products, deleteProduct } = SetProductsToWishlist();
  const router = useRouter();

  return (
    <div className="">
      <div
        className={`bg-[url('/page_header.jpg')]  bg-contain bg-no-repeat bg-center bg-bluecolor flex w-full  items-center justify-center gap-4 flex-col h-[21dvh]`}
      >
        <p className="text-white font-bold text-5xl">wishlist</p>
        <div className=" text-white font-semibold text-xs tracking-wider uppercase">
          <Link href="/">Home /</Link> wishlist
        </div>
      </div>
      {products.length > 0 ? (
        <div className="max-w-[1200px] mx-auto">
          <p className="text-lg text-black uppercase font-bold mt-12 [@media(max-width:1050px)]:ml-5 mb-2">
            Your products wishlist
          </p>
          <hr className="w-full h-1 text-gray-300 " />
          <div className="w-full py-10 grid grid-cols-4 [@media(max-width:1050px)]:flex [@media(max-width:1050px)]:flex-wrap  items-center justify-center gap-10">
            {products?.map((item, index) => {
              return (
                <div
                  className=" flex items-center justify-center flex-col"
                  key={index}
                >
                  <div
                    onClick={() => {
                      deleteProduct(item);
                    }}
                    className="flex items-center group gap-1 mb-5 cursor-pointer justify-center"
                  >
                    <p className="font-extrabold text-xs tracking-wide uppercase">
                      Remove
                    </p>
                    <GoX className="w-5 h-5 font-bold hover:rotate-180  group-hover:rotate-180 duration-200 " />{" "}
                  </div>
                  <NewProduct link={item.product.link} product={item.product} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="h-[84dvh] max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center justify-center gap-8 my-24 h-fit">
            <div className="w-56 h-56 flex items-center justify-center">
              <HeartIcon className="w-full h-full text-gray-200" />
            </div>
            <p className="font-bold text-black text-5xl text-center">
              Wishlist is empty.
            </p>
            <div className="text-gray-400 flex flex-col items-center justify-center">
              <p className="">
                You do not have any products in the wishlist yet.
              </p>
              <p className="">
                You will find a lot of interesting products on our
                &quot;Shop&quot; page.
              </p>
            </div>
            <button
              onClick={() => router.push("/")}
              className="px-8 py-3 bg-redcolor hover:bg-bluecolor duration-300 text-white font-bold uppercase"
            >
              Return to home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
