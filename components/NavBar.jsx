"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SlReload } from "react-icons/sl";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import CategoriesList from "./CategoriesList";
import LoginPopPap from "./LoginPopPap";
import SetProductsToWishlist from "@/store/setProductsToWishlist";
import setUserInfo from "@/store/UserInfo";
import DashUserPopPap from "./DashUserPopPap";
import setProductsToCart from "@/store/setProductsToCart";
import { getProductsBySearch } from "@/lib/APIS";
import SetProductSearch from "@/store/SearchProducts";
import SetCategory from "@/store/SetCategory";
import SetId from "@/store/SetId";
const NavBar = () => {
  const [search, setSearch] = useState();
  const { setId } = SetId();
  const { setCategory } = SetCategory();
  const [filterProducts, setFilterProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(true);
  const { products } = SetProductsToWishlist();
  const { cart } = setProductsToCart();
  const { user } = setUserInfo();
  const { setProductsSearch } = SetProductSearch();

  useEffect(() => {
    const getProductsBysearch = async (e) => {
      setLoading(true);
      const data = await getProductsBySearch(search);
      setFilterProducts(data);
      setLoading(false);
    };
    getProductsBysearch();
  }, [search]);

  return (
    <div className="fixed h-[21dvh] w-[100dvw] left-0 top-0 z-50 bg-white">
      <div className="flex flex-row justify-between items-center px-14 py-2 border-b-[0.5px] border-gray-300 ">
        <Link className="h-fit w-fit" href="/">
          <Image
            src="/logo.png"
            height={99999}
            width={999999}
            alt="logo"
            className="h-[80px] w-fit  object-cover"
          />
        </Link>
        <div className="flex relative w-[640px] mx-auto flex-row items-center justify-center gap-0 flex-1">
          <input
            onChange={(e) => setSearch(e.target.value)}
            onClick={() => setHide((prev) => !prev)}
            placeholder="Search for products"
            className="w-[590px] h-[46px] outline-none text-graycolor border-[2px] border-r-0 px-5"
          />
          <div className="bg-redcolor cursor-pointer h-[46px] p-2 w-[50px] flex items-center justify-center">
            {loading ? (
              <SlReload className="w-9/12 text-white rotate-180" />
            ) : (
              <Link className="" href="/search">
                <MagnifyingGlassIcon
                  onClick={() => {
                    setProductsSearch(filterProducts);
                    localStorage.setItem(
                      "searchName",
                      `Search Results for: ${search}`
                    );
                  }}
                  className="w-9/12 text-white"
                />
              </Link>
            )}
          </div>
          <div className="">
            {filterProducts.length > 0 && search.trim() != "" && !hide && (
              <div className=" absolute w-[640px] top-0 z-50  bg-white right-1/2 translate-x-1/2 translate-y-[46px] max-h-[400px] overflow-x-hidden overflow-y-scroll grid grid-cols-2">
                {filterProducts.slice(0, 10).map((item, index) => {
                  return (
                    <Link
                      key={index}
                      onClick={() => setId(item._id)}
                      href={`/category_products/${item._id}`}
                      className="flex flex-col h-[133px] items-start justify-start w-full gap-2  py-3 px-2 border-[1px] border-black/30"
                    >
                      <div className="grid grid-cols-4 h-[80px] items-start justify-start gap-5">
                        <div className="col-span-1">
                          <img
                            src={item.image}
                            alt="img"
                            className="w-full h-[80px] object-cover object-top"
                          />
                        </div>
                        <div className="col-span-3 flex flex-col items-start justify-start gap-1">
                          <p className="text-black text-start text-sm font-semibold">
                            {item.name.en}
                          </p>
                          <p className="text-gray-400 text-sm">
                            SKU: {item.code}
                          </p>
                        </div>
                      </div>
                      <p className="flex flex-wrap items-center justify-center gap-2">
                        <span
                          className={`text-bluecolor ${
                            item?.sale
                              ? " line-through  font-light"
                              : "font-semibold"
                          }`}
                        >
                          {item?.price.toLocaleString()} AED
                        </span>
                        {item?.sale && (
                          <span className="font-semibold text-bluecolor">
                            {Math.floor(
                              (item.price * (100 - item.sale)) / 100
                            ).toLocaleString()}{" "}
                            AED
                          </span>
                        )}
                      </p>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-fit gap-5">
          <div className=" relative">
            <Link href="/cart">
              <span className="top-0 right-0 translate-x-1/2 -translate-y-1 absolute text-background bg-redcolor rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {cart.length}
              </span>
              <ShoppingCartIcon className="w-6 h-6 text-black" />
            </Link>
          </div>
          <button className=" border-[1px] rounded-md border-blackcolor w-fit  flex items-center justify-center gap-2 flex-row h-[46px] p-3 ">
            <p className="">UAE</p>{" "}
            <Image
              src="/uae.svg"
              width={9999999}
              height={9999999}
              className="object-cover w-full h-full"
              alt="logo"
            />
          </button>
          <div className=" relative">
            <Link href="/wishlist">
              <HeartIcon className="w-6 h-6 text-black" />
            </Link>
            <span className="top-0 right-0 translate-x-1/2 -translate-y-1 absolute  text-background bg-redcolor rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {products?.length}
            </span>
          </div>
        </div>
      </div>
      <div className="flex cursor-default items-center justify-between px-16 py-3 ">
        <div className="flex items-center gap-5 justify-between">
          <div
            onMouseEnter={() => {
              document
                .getElementById("categories_list")
                .classList.add("categoreis_list_trans");
            }}
            onMouseLeave={() => {
              document
                .getElementById("categories_list")
                .classList.remove("categoreis_list_trans");
            }}
            className="flex  relative items-center justify-between w-fit gap-2 group"
          >
            <Bars3Icon className="h-8 w-8" />
            <p className="font-bold text-sm uppercase mr-10">
              Browse Categories
            </p>
            <ChevronDownIcon
              id="arrow_Down"
              className="h-4 w-4 font-extrabold duration-200 group-hover:rotate-180"
            />
          </div>
          <Link
            href="/"
            className="ml-3 cursor-pointer uppercase text-sm font-bold hover:text-redcolor"
          >
            Home
          </Link>
          <Link
            href="/#brands"
            className="cursor-pointer uppercase text-sm font-bold hover:text-redcolor"
          >
            BRANDS
          </Link>
          <Link
            href="/innovations"
            className="cursor-pointer uppercase text-sm font-bold hover:text-redcolor"
          >
            Innovations
          </Link>
          <div className="" onClick={() => setCategory("CleaningAgents")}>
            <Link
              href="/CleaningAgents"
              className="cursor-pointer uppercase text-sm font-bold hover:text-redcolor"
            >
              Cleaning Agents
            </Link>
          </div>
          <div className="" onClick={() => setCategory("Accessories")}>
            <Link
              href="/accessories"
              className="cursor-pointer uppercase text-sm font-bold hover:text-redcolor"
            >
              Accessories
            </Link>
          </div>
          <Link
            href="/year_sale"
            className="relative menu-label cursor-pointer uppercase text-sm font-bold hover:text-redcolor after:content-['New'] after:absolute after:top-0 after:right-0 after:translate-x-1/2 after:-translate-y-[150%] after:bg-redcolor after:py-[.1px] after:text-background after:text-xs after:px-1"
          >
            Year end sale
          </Link>
          {user.role == "Admin" && (
            <Link
              href="/admin"
              className="cursor-pointer uppercase text-sm font-bold hover:text-redcolor"
            >
              admin
            </Link>
          )}
        </div>
        <div
          onMouseEnter={() => {
            document
              .getElementById("login_pop")
              .classList.add("login_pop_trans");
          }}
          onMouseLeave={() => {
            document
              .getElementById("login_pop")
              .classList.remove("login_pop_trans");
          }}
          className="flex items-center gap-5 justify-between"
        >
          <Link
            href="/my_account"
            className="hover:text-redcolor font-semibold text-sm uppercase"
          >
            {user ? `Hello.${user.name}` : " login / register"}
          </Link>
          {/* 
          <button className="text-redcolor font-semibold text-sm">EN</button>
          <button className="text-redcolor font-semibold text-sm">AR</button> */}
        </div>
      </div>
      <CategoriesList />
      {user ? <DashUserPopPap /> : <LoginPopPap />}
    </div>
  );
};

export default NavBar;
