"use client";
import { getProduct } from "@/lib/APIS";
import React, { useState } from "react";
import AddFrom from "./AddFrom";

const Page = () => {
  const [code, setCode] = useState();
  const [loading, setloading] = useState(false);
  const [form, setForm] = useState(false);
  const [product, setProduct] = useState();
  const hundleSubmit = async (e) => {
    setloading(true);
    e.preventDefault();
    const data = await getProduct(code);
    setForm(data?.status);
    setProduct(data?.product);
    setloading(false);
  };
  return (
    <div className="w-full px-5 mx-auto flex flex-col items-center justify-center py-12">
      <p className="font-bold uppercase text-black text-4xl">Edit product</p>
      {form ? (
        <AddFrom product={product} />
      ) : (
        <form onSubmit={hundleSubmit} className="">
          <div className="my-14 flex flex-col items-center justify-center gap-5">
            <p className="font-bold uppercase text-bold text-2xl">
              Please Enter The Code of The product First.
            </p>
            <input
              type="text"
              required
              onChange={(e) => setCode(e.target.value)}
              placeholder="Code of Product"
              className="w-1/2 [@media(max-width:1050px)]:w-full h-10 border-black/30 outline-none px-2.5 border-2"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-12 py-3 bg-redcolor hover:bg-bluecolor duration-300 rounded-lg font-bold text-white text-xl my-5 uppercase"
            >
              {loading ? "Loading..." : "submit"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Page;
