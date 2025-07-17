"use client";
import { getCategories } from "@/lib/APIS";
import SetCategory from "@/store/SetCategory";
import SetId from "@/store/SetId";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiChevronRight } from "react-icons/hi2";
import Loading from "./Loading";

const CategoriesList = () => {
  const [categories, setCategories] = useState();
  const [category, setCategor] = useState();
  const [brands, setBrands] = useState();
  const { setCategory } = SetCategory();
  const [loading, setLoading] = useState(true);
  const getCagtegoriess = async () => {
    setLoading(true);
    const data = await getCategories();
    setCategories(data);
    setLoading(false);
  };
  useEffect(() => {
    getCagtegoriess();
  }, []);
  return (
    <div
      id="categories_list"
      className="opacity-0 relative hover:visible hover:opacity-100 hover:translate-y-0 invisible  h-fit text-sm font-bold text-black  duration-300 translate-x-12   translate-y-[21px] w-[280px]  bg-white border-[1px] border-t-0  border-gray-200"
    >
      <div
        onMouseEnter={() => {
          setBrands(categories.find((item) => item.name.en == "Ovens").brands);
          setCategor(categories.find((item) => item.name.en == "Ovens"));
        }}
        onClick={() => setCategory("Ovens")}
        className="peer w-full hover:bg-gray-100 cursor-pointer flex items-center px-5 py-3  border-b-[1px] border-gray-200 justify-between "
      >
        <Link
          className="w-full text-start"
          href={`/category_products?category=Ovens`}
        >
          <span>Ovens</span>
        </Link>
        <HiChevronRight className="text-graycolor w-3 h-3" />
      </div>
      <div
        onMouseEnter={() => {
          setBrands(
            categories.find((item) => item.name.en == "Cooking Line").brands
          );
          setCategor(categories.find((item) => item.name.en == "Cooking Line"));
        }}
        onClick={() => setCategory("Cooking Line")}
        className="peer w-full hover:bg-gray-100 cursor-pointer flex items-center px-5 py-3  border-b-[1px] border-gray-200 justify-between "
      >
        <Link
          className="w-full text-start"
          href={`/category_products?category=Cooking Line`}
        >
          <span>Cooking Line</span>
        </Link>
        <HiChevronRight className="text-graycolor w-3 h-3" />
      </div>
      <div
        onMouseEnter={() => {
          setBrands(
            categories.find((item) => item.name.en == "Coffee Machines").brands
          );
          setCategor(
            categories.find((item) => item.name.en == "Coffee Machines")
          );
        }}
        onClick={() => setCategory("Coffee Machines")}
        className="peer w-full hover:bg-gray-100 cursor-pointer flex items-center px-5 py-3  border-b-[1px] border-gray-200 justify-between "
      >
        <Link
          className="w-full text-start"
          href={`/category_products?category=Coffee Machines`}
        >
          <span>Coffee Machines</span>
        </Link>
        <HiChevronRight className="text-graycolor w-3 h-3" />
      </div>
      <div
        onMouseEnter={() => {
          setBrands(
            categories.find((item) => item.name.en == "Ice Maker").brands
          );
          setCategor(categories.find((item) => item.name.en == "Ice Maker"));
        }}
        onClick={() => setCategory("Ice Maker")}
        className="peer w-full hover:bg-gray-100 cursor-pointer flex items-center px-5 py-3  border-b-[1px] border-gray-200 justify-between "
      >
        <Link
          className="w-full text-start"
          href={`/category_products?category=Ice Maker`}
        >
          <span>Ice Maker</span>
        </Link>
        <HiChevronRight className="text-graycolor w-3 h-3" />
      </div>
      <div
        onMouseEnter={() => {
          setBrands(
            categories.find((item) => item.name.en == "Cleaning Agents").brands
          );
          setCategor(
            categories.find((item) => item.name.en == "Cleaning Agents")
          );
        }}
        onClick={() => setCategory("Cleaning Agents")}
        className="peer w-full hover:bg-gray-100 cursor-pointer flex items-center px-5 py-3  border-b-[1px] border-gray-200 justify-between "
      >
        <Link className="w-full text-start" href={`/CleaningAgents`}>
          <span>Cleaning Agents</span>
        </Link>
        <HiChevronRight className="text-graycolor w-3 h-3" />
      </div>
      {/* //====== */}
      <div
        onMouseEnter={() => {
          setBrands(
            categories.find((item) => item.name.en == "Accessories").brands
          );
          setCategor(categories.find((item) => item.name.en == "Accessories"));
        }}
        onClick={() => setCategory("Accessories")}
        className="peer w-full hover:bg-gray-100 cursor-pointer flex items-center px-5 py-3  border-b-[1px] border-gray-200 justify-between "
      >
        <Link className="w-full text-start" href={`/accessories`}>
          <span>Accessories</span>
        </Link>
        <HiChevronRight className="text-graycolor w-3 h-3" />
      </div>

      <div className="overflow-y-auto overflow-x-hidden no-scrollbar h-[400px] p-8 opacity-0 invisible top-0 absolute left-[279px] shadow-lg  bg-white border-[1px]  duration-300 w-[1000px] peer-hover:opacity-100 peer-hover:visible peer-hover:translate-x-0 hover:visible hover:opacity-100 hover:translate-x-0 translate-x-3">
        <div className="overflow-y-auto overflow-x-hidden w-full h-fit grid grid-cols-5 gap-1 no-scrollbar">
          {brands?.map((item, index) => {
            return (
              <Link
                key={index}
                href={`/category_products?category=${category.name.en}&brand=${item.name.en}`}
              >
                <img
                  src={item.image}
                  alt="brand"
                  className="w-full h-[60px] border-2 border-black/20 object-fill"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
