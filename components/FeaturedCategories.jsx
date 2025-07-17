"use client";
import React, { useEffect, useState } from "react";
import CategorieModel from "./CategoryModel";
import { getAllProducts, getCategories } from "@/lib/APIS";
import Loading from "./Loading";

const FeaturedCategories = () => {
  // const [categorie, setCateogries] = useState();
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getCategoriess = async () => {
      // setLoading(true);
      // const data = await getCategories();
      const result = await getAllProducts();
      // setCateogries(data);
      setProducts(result);
      // setLoading(false);
    };
    getCategoriess();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="w-full border-b-0 border-gray-200 flex items-center justify-center">
        <span className="font-[800] text-4xl text-black z-10 [@media(max-width:1050px)]:text-2xl border-b-redcolor border-b-2 pb-3 text-center">
          {" "}
          Featured Categories
        </span>
      </div>
      <hr className="h-[1px] -translate-y-[160%] -z-10 border-0 w-full bg-gray-200" />
      <div className=" px-5 grid grid-cols-4 [@media(max-width:1050px)]:grid-cols-2 [@media(max-width:1050px)]:gap-4 gap-5 pt-16">
        <CategorieModel
          thumbnail="/oven.jpg"
          categorie="Ovens"
          numberProdcuts={
            products?.filter((i) => i.category == "6763e231bb0cdbd60dec0f40")
              .length
          }
          link={`/category_products?category=Ovens`}
          style="Tall"
        />
        <CategorieModel
          thumbnail="/cooking-line-thumb.jpg"
          categorie="Cooking Line"
          numberProdcuts={
            products?.filter((i) => i.category == "6763e354bb0cdbd60dec0f43s")
              .length
          }
          link={`/category_products?category=Cooking Line`}
          style="none"
        />
        <CategorieModel
          thumbnail="/Coffee-machine--600x600.jpg"
          categorie="Coffee Machines"
          numberProdcuts={
            products?.filter((i) => i.category == "6763e3aabb0cdbd60dec0f45")
              .length
          }
          link={`/category_products?category=Coffee Machines`}
          style="none"
        />
        <CategorieModel
          thumbnail="/iceMaker.jpg"
          categorie="Ice Maker"
          numberProdcuts={
            products?.filter((i) => i.category == "6763e426bb0cdbd60dec0f47")
              .length
          }
          link={`/category_products?category=Ice Maker`}
          style="none"
        />
      </div>
      {/* {loading ? (
        <Loading />
      ) : (
        <div className=" px-5 grid grid-cols-4 [@media(max-width:1050px)]:grid-cols-2 [@media(max-width:1050px)]:gap-4 gap-5 pt-16">
          {categorie
            ?.filter(
              (item) =>
                item.name.en !== "Cleaning Agents" &&
                item.name.en !== "Accessories"
            )
            .map((item, index) => {
              return (
                <CategorieModel
                  key={index}
                  thumbnail={item.backgroundImgage}
                  categorie={item.name.en}
                  numberProdcuts={
                    products.filter((i) => i.category == item._id).length
                  }
                  link={`/category_products?category=${item.name.en}`}
                  style={item.style}
                />
              );
            })}
        </div>
      )} */}
    </div>
  );
};

export default FeaturedCategories;
