"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { FaPlus, FaAngleDown } from "react-icons/fa6";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { CgBorderStyleSolid, CgMenu } from "react-icons/cg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Products from "@/components/Products";
import { getBrands, getProductsInSale } from "@/lib/APIS";
import setCategoryMenu from "@/store/SetCategoryNav";
import { GoX } from "react-icons/go";
import Loading from "./Loading";

const CustomCategoryPage = ({ mainProducts, name }) => {
  const { show, hide, status } = setCategoryMenu();
  const [perpage, setPerPage] = useState(9);
  const [active, setactive] = useState(0);
  const [range, setRange] = useState([0, 0]);
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState();
  const [min, setmin] = useState(0);
  const [max, setMax] = useState(0);
  const [filterBrand, setFilterBrand] = useState(0);
  const [rangeFilter, setRangeFilter] = useState([0, 0]);
  const [showFilters, setShowFilters] = useState(false);
  const [pricesFilter, setPricesFilter] = useState([]);
  const [inStock, setInStock] = useState(false);
  const [activeSort, setActiveSort] = useState(0);
  const [loading, setLoading] = useState(true);

  // ============================================================================
  const getProducts = async () => {
    setLoading(true);
    localStorage.setItem("mainProducts", JSON.stringify(mainProducts));
    localStorage.setItem("filteredProducts", JSON.stringify(mainProducts));
    const brands = await getBrands();
    setBrands(brands);
    const min = await mainProducts?.reduce(
      (min, item) => (item.price < min ? item.price : min),
      mainProducts[0]?.price
    );
    const max = await mainProducts?.reduce(
      (max, item) => (item.price > max ? item.price : max),
      mainProducts[0]?.price
    );
    setmin(min);
    setMax(max);
    setRange([0, max]);
    setProducts(mainProducts);
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);

  const filterProducts = () => {
    let data = JSON.parse(localStorage.getItem("mainProducts"));
    let filteredProducts = data?.filter(
      (item) =>
        (rangeFilter[0] == 0 || item.price >= rangeFilter[0]) &&
        (rangeFilter[1] == 0 || item.price <= rangeFilter[1]) &&
        (filterBrand === 0 || filterBrand._id == item.brand)
    );
    filteredProducts = inStock
      ? filteredProducts.filter((item) => item.stock > 0)
      : filteredProducts;
    localStorage.setItem("filteredProducts", JSON.stringify(filteredProducts));
    setProducts(filteredProducts);
  };

  useEffect(() => {
    filterProducts();
  }, [filterBrand, inStock, rangeFilter[0], rangeFilter[1]]);

  // ============================================================================
  useEffect(() => {
    setPricesFilter([]);
    for (let i = 0; i < max; i++) {
      const item = {
        min: Math.floor(i),
        max: Math.floor(i + max / 5),
      };
      i += Math.floor(max / 5);
      setPricesFilter((prev) => [...prev, item]);
    }
  }, [max]);

  // ============================================================================

  const SortByTime = () => {
    let filtedProds = JSON.parse(localStorage.getItem("filteredProducts"));
    filtedProds = filtedProds.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
    localStorage.setItem("filteredProducts", JSON.stringify(filtedProds));
    setProducts(filtedProds);
  };

  // ============================================================================
  // ============================================================================

  const SortByPriceLow = () => {
    let filtedProds = JSON.parse(localStorage.getItem("filteredProducts"));
    filtedProds = filtedProds.sort((a, b) => a.price - b.price);
    localStorage.setItem("filteredProducts", JSON.stringify(filtedProds));
    setProducts(filtedProds);
  };
  // ============================================================================

  const SortByPriceHigh = () => {
    let filtedProds = JSON.parse(localStorage.getItem("filteredProducts"));
    filtedProds = filtedProds.sort((a, b) => b.price - a.price);
    localStorage.setItem("filteredProducts", JSON.stringify(filtedProds));
    setProducts(filtedProds);
  };

  // ============================================================================
  // ============================================================================

  const SortBySale = () => {
    let filtedProds = JSON.parse(localStorage.getItem("filteredProducts"));
    filtedProds = filtedProds.sort((a, b) => a.sale - b.sale);
    localStorage.setItem("filteredProducts", JSON.stringify(filtedProds));
    setProducts(filtedProds);
  };

  // ============================================================================
  // ============================================================================

  const SortByStock = () => {
    let filtedProds = JSON.parse(localStorage.getItem("filteredProducts"));
    filtedProds = filtedProds.sort((a, b) => a.stock - b.stock);
    localStorage.setItem("filteredProducts", JSON.stringify(filtedProds));
    setProducts(filtedProds);
  };

  // ============================================================================
  // ============================================================================

  const SortById = () => {
    let filtedProds = JSON.parse(localStorage.getItem("filteredProducts"));
    filtedProds = filtedProds.sort((a, b) => a._id.localeCompare(b._id));
    localStorage.setItem("filteredProducts", JSON.stringify(filtedProds));
    setProducts(filtedProds);
  };

  // ============================================================================
  // ============================================================================

  return (
    <div className="w-[full] flex flex-col items-center justify-center">
      <div
        className={` h-[21dvh]   bg-cover p-10 bg-center w-full  text-white flex flex-col items-center justify-center gap-2 font-semibold text-5xl `}
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
            {name}
          </p>
        </div>
        <p className="font-normal text-sm">{products?.length} Products</p>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="max-w-[1200px] mx-auto flex items-center justify-center [@media(max-width:1050px)]:py-5 py-12">
            <div className="grid grid-cols-4  [@media(max-width:1050px)]:flex [@media(max-width:1050px)]:justify-center items-start justify-items-start gap-5 w-full">
              <div className="flex flex-col items-start [@media(max-width:1050px)]:hidden justify-center gap-12">
                <div className="flex flex-col w-full items-start justify-center gap-5">
                  <p className="font-bold text-black uppercase">
                    filter by price
                  </p>
                  <Slider
                    range // خاصية تفعيل النطاق
                    min={min}
                    max={max}
                    defaultValue={range}
                    value={range}
                    className="!cursor-pointer"
                    onChange={(range) => {
                      setRange([range[0], range[1]]);
                      // document.querySelector(".min_number").textContent =
                      //   range[0].toLocaleString();
                      // document.querySelector(".max_number").textContent =
                      //   range[1].toLocaleString();
                    }}
                  />
                  <div className="flex flex-wrap items-center justify-start gap-2  w-full">
                    <p className="text-graycolor text-sm">Price:</p>
                    <span className="min_number text-black font-bold">
                      {range[0]?.toLocaleString() || 0}
                    </span>
                    <span className="font-bold text-black uppercase text-sm">
                      aed
                    </span>
                    <CgBorderStyleSolid />
                    <span className="max_number text-black font-bold ">
                      {range[1]?.toLocaleString() || 0}
                    </span>
                    <span className="font-bold text-black uppercase text-sm">
                      aed
                    </span>
                    <button
                      onClick={() => setRangeFilter([range[0], range[1]])}
                      className="px-4 py-2 bg-bluecolor  right-0 font-semibold text-white text-sm uppercase hover:bg-gray-300 duration-150"
                    >
                      filter
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-start justify-center">
                  <p className="font-bold text-black mb-3 uppercase">
                    fliter by brand
                  </p>
                  <div className="grid grid-cols-2 gap-2 pr-5 pt-2 w-full h-[250px] overflow-y-scroll  brandingscrolling">
                    {/* <div className=" w-full h-full "> */}

                    {brands?.map((item, index) => {
                      return (
                        <button
                          onClick={() =>
                            setFilterBrand(
                              item._id == filterBrand._id ? 0 : item
                            )
                          }
                          key={index}
                          onDoubleClick={() => setFilterBrand(0)}
                        >
                          <img
                            alt="img"
                            src={item.image}
                            className={` hover:opacity-60 duration-100 object-contain w-full h-full ${
                              filterBrand._id == item._id
                                ? "border-4 border-redcolor"
                                : "border-2 border-graycolor"
                            } `}
                          />
                        </button>
                      );
                    })}
                    {/* </div> */}
                  </div>
                </div>
              </div>
              <div className="col-span-3 w-full">
                <div className="w-full flex items-center justify-between [@media(max-width:1050px)]:justify-center [@media(max-width:1050px)]:flex-col">
                  <Link href="/" className="text-graycolor text-sm">
                    Home / {name} /
                  </Link>
                  <hr className="[@media(max-width:1050px)]:h-[5px] [@media(max-width:1050px)]:mt-5 [@media(max-width:1050px)]:mb-2 [@media(max-width:1050px)]:text-redcolor [@media(max-width:1050px)]:w-full  w-0 text-white h-0" />
                  <div className="flex items-center justify-center gap-2 [@media(max-width:1050px)]:hidden text-graycolor text-sm">
                    <p className="text-black font-bold">Show:</p>
                    <button
                      className={`${active == 1 ? "text-black font-bold" : ""}`}
                      onClick={() => {
                        setPerPage(9);
                        setactive(1);
                      }}
                    >
                      9
                    </button>
                    /
                    <button
                      className={`${active == 2 ? "text-black font-bold" : ""}`}
                      onClick={() => {
                        setPerPage(24);
                        setactive(2);
                      }}
                    >
                      24
                    </button>
                    /
                    <button
                      className={`${active == 3 ? "text-black font-bold" : ""}`}
                      onClick={() => {
                        setPerPage(36);
                        setactive(3);
                      }}
                    >
                      36
                    </button>
                  </div>
                  <div className="flex items-center justify-between [@media(max-width:1050px)] px-5 [@media(max-width:1050px)]:w-full ">
                    <button
                      onClick={() => show()}
                      className="font-bold uppercase text-black flex items-center justify-center  gap-1 text-sm opacity-0 invisible [@media(max-width:1050px)]:opacity-100 [@media(max-width:1050px)]:visible"
                    >
                      <CgMenu className="w-5 h-5 text-black" />
                      Show sidebar
                    </button>
                    <button
                      onClick={() => setShowFilters((prev) => !prev)}
                      className="text-black font-bold flex items-center group justify-center gap-1 uppercase"
                    >
                      filters
                      <FaPlus className="group-hover:hidden block" />{" "}
                      <FaAngleDown className="hidden group-hover:block" />
                    </button>
                  </div>
                </div>
                <div
                  className={`flex [@media(max-width:1050px)]:flex-col gap-5 items-start  w-full justify-between border-[1px] border-x-white mt-5 border-graycolor px-10 py-5 ${
                    showFilters ? "" : "hidden"
                  } duration-500 `}
                >
                  <div className="flex flex-col items-start justify-start text-sm font-light text-gray-400 gap-3">
                    <p className="font-semibold text-black uppercase text-lg mb-3">
                      Sort by
                    </p>
                    <button
                      onClick={() => {
                        SortById();
                        setActiveSort(0);
                      }}
                      className={`font-semibold text-gray-600 `}
                    >
                      Clear Sorted
                    </button>
                    <button
                      onClick={() => {
                        SortByStock();
                        setActiveSort(1);
                      }}
                      className={`hover:text-gray-700 ${
                        activeSort == 1 ? "font-bold" : ""
                      }`}
                    >
                      Popularity
                    </button>
                    <button
                      onClick={() => {
                        SortBySale();
                        setActiveSort(2);
                      }}
                      className={`${
                        activeSort == 2 ? "font-bold" : ""
                      } hover:text-gray-700`}
                    >
                      Average rating
                    </button>
                    <button
                      onClick={() => {
                        SortByTime();
                        setActiveSort(3);
                      }}
                      className={`${
                        activeSort == 3 ? "font-bold" : ""
                      } hover:text-gray-700`}
                    >
                      Newness
                    </button>
                    <button
                      onClick={() => {
                        SortByPriceLow();
                        setActiveSort(4);
                      }}
                      className={`${
                        activeSort == 4 ? "font-bold" : ""
                      } hover:text-gray-700`}
                    >
                      Price: low to high
                    </button>
                    <button
                      onClick={() => {
                        SortByPriceHigh();
                        setActiveSort(5);
                      }}
                      className={`${
                        activeSort == 5 ? "font-bold" : ""
                      } hover:text-gray-700`}
                    >
                      Price: high to low
                    </button>
                  </div>
                  <div className="flex flex-col items-start justify-start text-sm font-light text-bluecolor gap-3">
                    <p className="font-semibold text-black uppercase text-lg mb-3">
                      Price filter
                    </p>
                    <button
                      onClick={() => setRangeFilter([0, 0])}
                      className="text-black"
                    >
                      All
                    </button>
                    {/* =================================== */}
                    {pricesFilter?.map((item, index) => {
                      return (
                        <button
                          key={index}
                          onClick={
                            () => {
                              setRangeFilter([+item.min, +item.max]);
                            }

                            // setRange([item.min, item.max]);
                          }
                          className={`${
                            rangeFilter[0] == item.min &&
                            rangeFilter[1] == item.max
                              ? "font-bold"
                              : ""
                          } hover:text-bluecolor`}
                        >
                          {item.min} AED - {item.max} AED
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex flex-col items-start justify-start text-sm py-5 font-light text-gray-400 gap-3">
                    <p className="font-semibold text-black uppercase text-lg mb-3">
                      stock status
                    </p>
                    <div className="flex font-semibold items-center justify-start gap-2 uppercase ml-2">
                      <input
                        checked={inStock}
                        onChange={(e) => {
                          setInStock(e.target.checked);
                        }}
                        type="checkbox"
                        className="hover:border-redcolor cursor-pointer accent-redcolor w-5 h-5"
                      />
                      in Stock
                    </div>
                  </div>
                </div>
                {rangeFilter[0] == 0 &&
                rangeFilter[1] == 0 &&
                filterBrand == 0 ? (
                  ""
                ) : (
                  <div className="flex [@media(max-width:1050px)]:flex-col [@media(max-width:1050px)]:px-5 items-start ml-5 mt-5 uppercase text-bluecolor justify-start gap-12">
                    <button
                      className="font-semibold flex items-center justify-center uppercase text-base"
                      onClick={() => {
                        setFilterBrand(0);
                        setRangeFilter([0, 0]);
                        setInStock(false);
                      }}
                    >
                      <AiOutlineCloseCircle className="hover:rotate-180 hover:text-redcolor duration-200 w-7 h-7 text-bluecolor ml-0" />{" "}
                      clear Filters
                    </button>
                    <button
                      className={`font-medium flex items-center justify-center uppercase text-base ${
                        filterBrand == 0 ? "hidden" : ""
                      } `}
                      onClick={() => {
                        setFilterBrand(0);
                      }}
                    >
                      <AiOutlineCloseCircle className="hover:rotate-180 hover:text-redcolor duration-200 w-7 h-7 text-bluecolor ml-0" />
                      Brand:
                      <span
                        onClick={() => {
                          setFilterBrand(0);
                        }}
                        className="text-redcolor uppercase text-sm"
                      >
                        {filterBrand?.name?.en}
                      </span>
                    </button>
                    <button
                      className={`font-medium flex items-center justify-center uppercase text-base ${
                        rangeFilter[1] == 0 ? "hidden" : ""
                      }`}
                      onClick={() => {
                        setRangeFilter((prev) => [...prev, (prev[1] = 0)]);
                      }}
                    >
                      {" "}
                      <AiOutlineCloseCircle className="hover:rotate-180 hover:text-redcolor duration-200 w-7 h-7 text-bluecolor ml-0" />
                      max price:{" "}
                      <span
                        onClick={() => {
                          setRangeFilter((prev) => [...prev, (prev[1] = 0)]);
                        }}
                        className="text-redcolor text-sm"
                      >
                        {rangeFilter[1].toLocaleString()}
                      </span>
                    </button>
                    <button
                      className={`font-medium flex items-center justify-center uppercase text-base ${
                        rangeFilter[0] == 0 ? "hidden" : ""
                      }`}
                      onClick={() => {
                        setRangeFilter((prev) => [...prev, (prev[0] = 0)]);
                      }}
                    >
                      <AiOutlineCloseCircle className="hover:rotate-180 hover:text-redcolor duration-200 w-7 h-7 text-bluecolor ml-0" />
                      min price:{" "}
                      <span
                        onClick={() => {
                          setRangeFilter((prev) => [...prev, (prev[0] = 0)]);
                        }}
                        className="text-redcolor text-sm"
                      >
                        {rangeFilter[0].toLocaleString()}
                      </span>
                    </button>
                  </div>
                )}
                <Products
                  perpage={perpage}
                  products={products}
                  description={{ en: "" }}
                />
              </div>
            </div>
          </div>
          <div
            onClick={() => hide()}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            className={`${
              status
                ? "fixed w-full h-[100%] z-50 inset-0 top-0 left-0 !opacity-100"
                : ""
            }`}
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={`fixed  top-0 left-0 bg-white h-[100dvh] duration-300  flex flex-col items-start justify-start z-50 py-5 px-5 ${
                status ? "w-[300px]" : "w-0 opacity-0 invisible"
              }`}
            >
              <button
                onClick={() => hide()}
                className="flex items-center group justify-center gap-1 text-black font-semibold"
              >
                Close{" "}
                <GoX className="w-5 h-5 group-hover:rotate-180 duration-300 hover:rotate-180" />
              </button>
              <div className="flex flex-col w-full py-10 items-start justify-center gap-5">
                <p className="font-bold text-black uppercase">
                  filter by price
                </p>
                <Slider
                  range // خاصية تفعيل النطاق
                  min={min}
                  max={max}
                  defaultValue={range}
                  className="!cursor-pointer"
                  onChange={(range) => {
                    setRange([range[0], range[1]]);
                    // document.querySelector(".min_number").textContent =
                    //   range[0].toLocaleString();
                    // document.querySelector(".max_number").textContent =
                    //   range[1].toLocaleString();
                  }}
                />
                <div className="flex flex-wrap items-center justify-start gap-2 w-full">
                  <p className="text-graycolor text-sm">Price:</p>
                  <span className="min_number text-black font-bold">
                    {range[0]?.toLocaleString() || 0}
                  </span>
                  <span className="font-bold text-black uppercase text-sm">
                    aed
                  </span>
                  <CgBorderStyleSolid />
                  <span className="max_number text-black font-bold ">
                    {range[1]?.toLocaleString() || 0}
                  </span>
                  <span className="font-bold text-black uppercase text-sm">
                    aed
                  </span>
                  <button
                    onClick={() => setRangeFilter([range[0], range[1]])}
                    className="px-4 py-2 bg-bluecolor  right-0 font-semibold text-white text-sm uppercase hover:bg-gray-300 duration-150"
                  >
                    filter
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start justify-center">
                <p className="font-bold text-black mb-3 uppercase">
                  fliter by brand
                </p>
                <div className="grid grid-cols-2 gap-2 pr-5 pt-2 w-full h-[250px] overflow-y-scroll  brandingscrolling">
                  {/* <div className=" w-full h-full "> */}

                  {brands?.map((item, index) => {
                    return (
                      <button
                        onClick={() =>
                          setFilterBrand(item._id == filterBrand._id ? 0 : item)
                        }
                        key={index}
                        onDoubleClick={() => setFilterBrand(0)}
                      >
                        <img
                          alt="img"
                          src={item.image}
                          className={` hover:opacity-60 duration-100 object-contain w-full h-full ${
                            filterBrand._id == item._id
                              ? "border-4 border-redcolor"
                              : "border-2 border-graycolor"
                          } `}
                        />
                      </button>
                    );
                  })}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CustomCategoryPage;
