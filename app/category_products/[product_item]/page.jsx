"use client";
import ProductsDetials from "@/components/ProductsDetials";
import SetId from "@/store/SetId";
import React from "react";

const Page = () => {
  // alert({ product_item });
  // console.log(product_item, { product_item });
  const { id } = SetId();
  return <ProductsDetials id={id} />;
};

export default Page;
