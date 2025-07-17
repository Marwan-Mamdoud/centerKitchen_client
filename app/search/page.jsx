"use client";
import CustomCategoryPage from "@/components/CustomCategoryPage";
import SetProductSearch from "@/store/SearchProducts";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [name, setName] = useState();
  const { productsSearch } = SetProductSearch();
  const getProducts = async () => {
    setName(localStorage.getItem("searchName"));
  };
  useEffect(() => {
    getProducts();
  }, [name, productsSearch]);

  return <CustomCategoryPage mainProducts={productsSearch} name={name} />;
};

export default Page;
