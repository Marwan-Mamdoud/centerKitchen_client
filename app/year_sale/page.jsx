"use client";
import CustomCategoryPage from "@/components/CustomCategoryPage";
import { getProductsInSale } from "@/lib/APIS";
import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const Page = () => {
  const [mainProducts, setMainProducts] = useState();
  const [loading, setLoading] = useState(true);
  const getProducts = async () => {
    setLoading(true);
    const data = await getProductsInSale();
    setMainProducts(data);
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="w-[full] flex flex-col items-center justify-center">
        <div
          className={`h-[21dvh] bg-cover p-10 bg-center w-full text-white flex flex-col items-center justify-center gap-2 font-semibold text-5xl `}
          style={{ backgroundImage: `url(/Page_Header.jpg)` }}
        >
          <div className="flex items-center justify-start mr-8 gap-2">
            <HiOutlineArrowNarrowLeft
              className="text-4xl font-thin cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.history.back();
              }}
            />
            <p className="[@media(max-width:1050px)]:text-2xl text-center">
              Year End Sale
            </p>
          </div>
          <p className="font-normal text-sm">.... Products</p>
        </div>
      </div>
    );
  }

  return (
    <CustomCategoryPage mainProducts={mainProducts} name="Year End Sale" />
  );
};

export default Page;
Page;
