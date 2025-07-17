"use client";
import SetCategory from "@/store/SetCategory";
import Link from "next/link";
import React, { useState } from "react";

const CategorieModel = ({
  link,
  thumbnail,
  style,
  numberProdcuts,
  categorie,
}) => {
  const [hover, setHover] = useState(false);
  const { setCategory } = SetCategory();

  return (
    <div
      onClick={() => setCategory(categorie)}
      className={`flex flex-col items-center   justify-center gap-1 ${
        style == "Tall"
          ? "!row-span-2 !col-span-2 [@media(max-width:1050px)]:!row-span-1  [@media(max-width:1050px)]:!col-span-1"
          : ""
      }`}
    >
      <Link
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        href={link}
        className={`overflow-hidden relative  [@media(max-width:1050px)]:shadow-md bg-gray-100/90${
          style == "Tall"
            ? "!row-span-2 !col-span-2 [@media(max-width:1050px)]:!row-span-1  [@media(max-width:1050px)]:!col-span-1"
            : ""
        }`}
      >
        <p
          className={`text-black font-bold [@media(max-width:1050px)]:hidden ${
            categorie === "ovens" && "text-3xl"
          } mx-auto uppercase text-center  w-full z-10 ${
            hover
              ? style == "Tall"
                ? "top-10"
                : "top-4"
              : style == "Tall"
              ? "top-14"
              : "top-8"
          } duration-300 absolute`}
        >
          {categorie}
        </p>
        <p
          className={`text-black mx-auto text-center [@media(max-width:1050px)]:hidden 
          ${
            hover
              ? style == "Tall"
                ? "top-20 opacity-100"
                : "top-10 opacity-100 "
              : style == "Tall"
              ? "top-28 opacity-0"
              : "top-16 opacity-0"
          }
          w-full duration-300 z-10 absolute`}
        >
          {numberProdcuts} products
        </p>
        <div className="w-full h-full">
          <img
            id="img"
            src={thumbnail}
            alt="img"
            className={`object-cover duration-300 w-full h-full ${
              hover && "scale-110"
            }`}
          />
        </div>
      </Link>
      <p className="uppercase text-black font-bold text-sm tracking-wide mt-3 hidden [@media(max-width:1050px)]:block">
        {categorie}
      </p>
      <p className="uppercase text-black text-xs font-bold mb-3 text-graycolor hidden [@media(max-width:1050px)]:block">
        {numberProdcuts} Products
      </p>
    </div>
  );
};

export default CategorieModel;
