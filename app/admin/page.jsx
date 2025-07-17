import Form from "@/components/Form";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "ADIM - YKC",
};
const page = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center gap-5 py-5">
        <p className="text-black text-6xl font-extrabold [@media(max-width:1050px)]:text-3xl uppercase">
          ADD Section
        </p>
        <div className="max-w-[1200px] mx-auto grid grid-cols-4 [@media(max-width:1050px)]:flex [@media(max-width:1050px)]:flex-col gap-5 items-center justify-center py-24">
          <Link
            href="/admin/addCategory"
            className=" bg-redcolor hover:bg-bluecolor duration-300 w-full text-center rounded-xl flex items-center justify-center p-4 h-[200px] m-5 font-bold text-4xl text-white"
          >
            Add Category
          </Link>
          <Link
            href="/admin/addBrand"
            className=" bg-redcolor hover:bg-bluecolor duration-300 w-full text-center rounded-xl flex items-center justify-center p-4 h-[200px] m-5 font-bold text-4xl text-white"
          >
            Add Brand
          </Link>
          <Link
            href="/admin/addProduct"
            className=" bg-redcolor hover:bg-bluecolor duration-300 w-full text-center rounded-xl flex items-center justify-center p-4 h-[200px] m-5 font-bold text-4xl text-white"
          >
            Add Product
          </Link>
          <Link
            href="/admin/addBanner"
            className=" bg-redcolor hover:bg-bluecolor duration-300 w-full text-center rounded-xl flex items-center justify-center p-4 h-[200px] m-5 font-bold text-4xl text-white"
          >
            Add Banner
          </Link>
          <Link
            href="/admin/addInnovation"
            className=" bg-redcolor hover:bg-bluecolor mb-2 duration-300 w-full text-center rounded-xl flex items-center justify-center p-4 h-[200px] m-5 font-bold text-4xl text-white"
          >
            Add Innovation
          </Link>
          <Link
            href="/admin/addImage"
            className=" bg-redcolor hover:bg-bluecolor duration-300 w-full text-center rounded-xl flex items-center justify-center p-4 h-[200px] m-5 font-bold text-4xl text-white"
          >
            Add Head Image
          </Link>
        </div>
        <hr className="w-full bg-redcolor border-t-2 border-redcolor" />
        <p className="text-black text-6xl [@media(max-width:1050px)]:text-3xl font-extrabold uppercase">
          Edit Section
        </p>
        <div className="max-w-[1200px] [@media(max-width:1050px)]:flex [@media(max-width:1050px)]:flex-col justify-center items-center mx-auto grid grid-cols-3 gap-5  py-24">
          <Link
            href="/admin/editCategory"
            className=" bg-redcolor hover:bg-bluecolor duration-300 w-full text-center rounded-xl flex items-center justify-center p-4 h-[200px] m-5 font-bold text-4xl text-white"
          >
            Edit Category
          </Link>
          <Link
            href="/admin/editBrand"
            className=" bg-redcolor hover:bg-bluecolor duration-300 w-full text-center rounded-xl flex items-center justify-center p-4 h-[200px] m-5 font-bold text-4xl text-white"
          >
            Edit Brand
          </Link>
          <Link
            href="/admin/editProduct"
            className=" bg-redcolor hover:bg-bluecolor duration-300 w-full text-center rounded-xl flex items-center justify-center p-4 h-[200px] m-5 font-bold text-4xl text-white"
          >
            Edit Product
          </Link>
        </div>
        <hr className="w-full bg-redcolor border-t-2 border-redcolor" />

        <p className="text-black text-6xl [@media(max-width:1050px)]:text-3xl uppercase font-extrabold">
          delete Section
        </p>
        <div className="max-w-[1200px] [@media(max-width:1050px)]:flex [@media(max-width:1050px)]:flex-col mx-auto grid grid-cols-4 gap-5 items-center justify-center py-24">
          <Link
            href="/admin/deleteCategory"
            className=" bg-redcolor hover:bg-bluecolor duration-300 w-full text-center rounded-xl flex items-center justify-center p-4 h-[200px] m-5 font-bold text-4xl text-white"
          >
            delete Category
          </Link>
          <Link
            href="/admin/deleteBrand"
            className=" bg-redcolor hover:bg-bluecolor duration-300 w-full text-center rounded-xl flex items-center justify-center p-4 h-[200px] m-5 font-bold text-4xl text-white"
          >
            delete Brand
          </Link>
          <Link
            href="/admin/deleteProduct"
            className=" bg-redcolor hover:bg-bluecolor duration-300 w-full text-center rounded-xl flex items-center justify-center p-4 h-[200px] m-5 font-bold text-4xl text-white"
          >
            delete Product
          </Link>
          <Link
            href="/admin/deleteBanner"
            className=" bg-redcolor hover:bg-bluecolor duration-300 w-full text-center rounded-xl flex items-center justify-center p-4 h-[200px] m-5 font-bold text-4xl text-white"
          >
            delete Banner
          </Link>
          <Link
            href="/admin/deleteInnovation"
            className=" bg-redcolor hover:bg-bluecolor duration-300 w-full text-center rounded-xl flex items-center justify-center p-4 h-[200px] m-5 font-bold text-4xl text-white"
          >
            delete Innovation
          </Link>
          <Link
            href="/admin/deleteImageHeader"
            className=" bg-redcolor hover:bg-bluecolor duration-300 w-full text-center rounded-xl flex items-center justify-center p-4 h-[200px] m-5 font-bold text-4xl text-white"
          >
            delete Head Image
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
