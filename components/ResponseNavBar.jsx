"use client";
import { getCategories, getProductsBySearch } from "@/lib/APIS";
import SetMenuModel from "@/store/MenuModel";
import SetProductSearch from "@/store/SearchProducts";
import SetCategory from "@/store/SetCategory";
import SetId from "@/store/SetId";
import setProductsToCart from "@/store/setProductsToCart";
import SetProductsToWishlist from "@/store/setProductsToWishlist";
import setUserInfo from "@/store/UserInfo";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import { SlReload } from "react-icons/sl";
import Loading from "./Loading";

const ResponseNavBar = () => {
  const { products } = SetProductsToWishlist();
  const { user } = setUserInfo();
  const [hideSearch, setHideSearch] = useState(true);
  const { setId } = SetId();
  const { setCategory } = SetCategory();
  const { cart } = setProductsToCart();
  const [active, setActive] = useState(1);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { status, show, hide } = SetMenuModel();
  const [search, setSearch] = useState();
  const [filterProducts, setFilterProducts] = useState([]);
  const { setProductsSearch } = SetProductSearch();

  useEffect(() => {
    const getProductsBysearch = async (e) => {
      // e.preventDefault();
      // setLoading(true);
      const data = await getProductsBySearch(search);
      setFilterProducts(data);
      // setLoading(false);
    };
    getProductsBysearch();
  }, [search]);

  useEffect(() => {
    const getCagtegoriess = async () => {
      setLoading(true);
      const data = await getCategories();
      setCategories(data);
      setLoading(false);
    };
    getCagtegoriess();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-full fixed top-0 h-[20dvh] z-50 bg-white">
      <div className="w-full flex items-center bg-gray-200 h-fit justify-between py-2 px-10">
        {/* <div className="flex items-center justify-center h-full  gap-5">
          <button className="text-redcolor font-semibold text-sm">EN</button>
          <button className="text-redcolor font-semibold text-sm">AR</button>
        </div> */}
        <div className="flex items-center h-full justify-center gap-1 mr-5">
          <BsPerson className="h-10 w-10 text-graycolor" />
          <Link
            href="/my_account"
            className="hover:text-redcolor text-black font-semibold text-xs uppercase"
          >
            {user ? `Hello.${user.name}` : " login / register"}
          </Link>
        </div>
        <button className="border-2 h-full border-black rounded-lg flex items-center justify-between py-2 px-5 w-[150px]">
          <p className="text-black font-bold">UAE</p>
          <div className="w-[30px] h-[30px]">
            <Image
              src="/uae.svg"
              width={9999999}
              height={9999999}
              className="object-cover w-full h-full"
              alt="logo"
            />
          </div>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5 overflow-y-hidden bg-white items-center justify-center py-2 mr-10   w-full h-[100px]">
        <CgMenu
          onClick={() => show()}
          className="cursor-pointer mx-auto text-black w-7 h-7"
        />
        <Link href="/" className="w-[80px]  max-h-[100px] mx-auto">
          {" "}
          <img
            src="/logo.png"
            alt="img"
            className="w-full h-full object-center object-contain"
          />
        </Link>
        <div className="grid grid-cols-3 h-[100px] items-center justify-center gap-5 mr-5">
          <div
            onClick={() => show()}
            className="bg-white cursor-pointer w-full h-full -mr-2 flex items-center justify-center"
          >
            <MagnifyingGlassIcon className="w-7 h-7 text-black" />
          </div>
          <div className=" w-7 relative">
            <Link href="/wishlist">
              <HeartIcon className="w-7 h-7 text-black" />
            </Link>
            <span className="top-0 right-0 translate-x-1/2 -translate-y-1 absolute  text-background bg-redcolor rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {products?.length}
            </span>
          </div>
          <div className=" w-7 relative">
            <Link href="/cart">
              <span className="top-0 right-0 translate-x-1/2 -translate-y-1 absolute text-background bg-redcolor rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {cart?.length}
              </span>
              <ShoppingCartIcon className="w-7 h-7 text-black" />
            </Link>
          </div>
        </div>
      </div>
      <div
        onClick={() => hide()}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        className={`${
          status
            ? "absolute w-full h-[100dvh] inset-0 top-0 left-0 !opacity-100"
            : ""
        }`}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`fixed  top-0 left-0 bg-white h-[100dvh] duration-300  flex flex-col items-start justify-start ${
            status ? "w-[300px]" : "w-0 opacity-0 invisible"
          }`}
        >
          <div className="flex items-center justify-center h-[7dvh] w-full bg-white ">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              onClick={() => setHideSearch((prev) => !prev)}
              placeholder="Search for products"
              className="h-full pl-5 w-full"
            />
            {loading ? (
              <SlReload className="text-gray-300 h-[30px] w-[50px] pr-3 bg-white" />
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
                  className="text-gray-300 h-[30px] w-[50px] pr-3 bg-white"
                />
              </Link>
            )}
          </div>
          {filterProducts.length > 0 && search.trim() != "" && !hideSearch && (
            <div className="bg-white overflow-x-hidden overflow-y-scroll w-full max-h-[42dvh]">
              {filterProducts.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full flex flex-col border-b-[1px] border-black/50 px-4 pb-5 mb-1 items-start justify-start gap-1 h-[10dvh]"
                    onClick={() => setId(item._id)}
                  >
                    <Link
                      href={`/category_products/${item._id}`}
                      className="w-full flex flex-col border-b-[1px] border-black/50 px-4 pb-5 mb-1 items-start justify-start gap-1 h-[10dvh]"
                    >
                      <div className="grid grid-cols-3 h-1/2 gap-3 w-full px-2">
                        <div className="col-span-1 h-full">
                          <img
                            src={item.image}
                            alt="img"
                            className="w-fit h-1/2 object-contain"
                          />
                        </div>
                        <p className="text-black col-span-2 font-bold text-sm">
                          {item.name.en}
                        </p>
                      </div>
                      <div className="flex flex-col w-full h-1/3 items-start justify-start">
                        <p className="text-gray-400 w-full text-sm">
                          SKU: {item.code}
                        </p>
                        <p className="flex flex-wrap w-full items-start justify-start gap-2">
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
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
          <div className="flex items-center justify-center shadow-inner  bg-gray-100 w-full h-[9dvh]">
            <button
              onClick={() => setActive(1)}
              className={`font-extrabold text-center w-full  h-full  uppercase ${
                active == 1
                  ? "border-b-redcolor border-b-4 bg-gray-300 text-black"
                  : "text-gray-400"
              }`}
            >
              menu
            </button>
            <button
              onClick={() => setActive(2)}
              className={`font-extrabold text-center w-full h-full  uppercase ${
                active == 2
                  ? "border-b-redcolor border-b-4 bg-gray-300 text-black"
                  : "text-gray-400"
              }`}
            >
              categories
            </button>
          </div>
          <div
            className={`${
              active == 1 ? "" : "hidden"
            } w-full  flex flex-col h-[49dvh] overflow-hidden items-start justify-start`}
          >
            <Link
              onClick={() => hide()}
              href="/"
              className="bg-white w-full text-black text-xs tracking-wide font-bold uppercase py-4 px-5 border-b-[1px] border-b-black/30"
            >
              Home
            </Link>
            <Link
              onClick={() => hide()}
              href="/#brands"
              className="bg-white w-full text-black text-xs tracking-wide font-bold uppercase py-4 px-5 border-b-[1px] border-b-black/30"
            >
              BRANDS
            </Link>
            <Link
              onClick={() => hide()}
              href="/innovations"
              className="bg-white w-full text-black text-xs tracking-wide font-bold uppercase py-4 px-5 border-b-[1px] border-b-black/30"
            >
              Innovations
            </Link>
            <div
              className="bg-white w-full text-black text-xs tracking-wide font-bold uppercase py-4 px-5 border-b-[1px] border-b-black/30"
              onClick={() => {
                hide();
                setCategory("Cleaning Agents");
              }}
            >
              <Link href="/CleaningAgents">Cleaning Agents</Link>
            </div>
            <div
              className="bg-white w-full text-black text-xs tracking-wide font-bold uppercase py-4 px-5 border-b-[1px] border-b-black/30"
              onClick={() => {
                hide();
                setCategory("Accessories");
              }}
            >
              <Link href="/accessories">Accessories</Link>
            </div>
            <Link
              onClick={() => hide()}
              href="/year_sale"
              className="bg-white w-full text-black text-xs tracking-wide font-bold uppercase py-4 px-5 border-b-[1px] border-b-black/30"
            >
              Year end sale
            </Link>
            <Link
              onClick={() => hide()}
              href="/wishlist"
              className="bg-white w-full text-black text-xs tracking-wide font-bold flex items-center justify-start gap-1 uppercase py-4 px-5 border-b-[1px] border-b-black/30"
            >
              <HeartIcon className="text-black h-4 w-4" /> Wishlist
            </Link>
            <Link
              onClick={() => hide()}
              href="/admin"
              className="bg-white w-full text-black text-xs tracking-wide font-bold flex items-center justify-start gap-1 uppercase py-4 px-5 border-b-[1px] border-b-black/30"
            >
              Admin
            </Link>
            <Link
              onClick={() => hide()}
              href="/my_account"
              className="bg-white py-4 w-full text-black text-xs tracking-wide font-semibold uppercase h-[50px] flex items-center gap-1 px-5 just-start border-b-[1px] border-b-black/30"
            >
              <BsPerson className="h-4 w-4 text-black" />
              {user ? `Hello.${user.name}` : " login / register"}
            </Link>
          </div>
          <div
            className={`${
              active == 2 ? "" : "hidden"
            } w-full h-fit flex flex-col items-start justify-start`}
          >
            {categories?.map((item, index) => {
              return (
                <div
                  className="bg-white w-full text-black text-xs tracking-wide font-bold flex items-center justify-start gap-1 uppercase py-5 px-5 border-b-[1px] border-b-black/30"
                  key={index}
                  onClick={() => {
                    hide();
                    setCategory(item.name.en);
                  }}
                >
                  <Link href={`/category_products?category=${item.name.en}`}>
                    <span>{item.name.en}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponseNavBar;
