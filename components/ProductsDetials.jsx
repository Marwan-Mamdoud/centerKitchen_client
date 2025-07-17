"use client";
import Image from "next/image";
import Link from "next/link";
import { getProduct, getProductById } from "@/lib/APIS";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegTimesCircle, FaRegCheckCircle } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { PlusIcon } from "@heroicons/react/24/outline";
import { MinusIcon } from "@heroicons/react/24/solid";
import { RiHeartLine, RiSearchLine, RiShuffleFill } from "react-icons/ri";
import RelatedProducts from "./RelatedProducts";
import ModelProduct from "./ModelProduct";
import setProductsToCart from "@/store/setProductsToCart";
import { toast } from "react-toastify";
import SetProductsToWishlist from "@/store/setProductsToWishlist";
import { AiOutlineCheck } from "react-icons/ai";
import setProductsCompare from "@/store/SetProductsCompare";
import SetId from "@/store/SetId";
import Loading from "./Loading";

let lastPrice;
const ProductsDetials = () => {
  let totalGrand; // إنشاء كائن URL
  const router = useRouter();
  const [loading, setloading] = useState(true);
  const [open, setOpen] = useState(false);
  const [numProduct, setNumProduct] = useState(1);
  const [options, setOptions] = useState(0);
  const [product, setProduct] = useState();
  const [infoProd, setInfoProd] = useState(1);
  const { cart, addProductToCart, setCart } = setProductsToCart();
  const { addProductCompare, productsCompare } = setProductsCompare();
  const { addProduct, products } = SetProductsToWishlist();

  if (product?.sale > 0) {
    lastPrice = Math.floor((product?.price * (100 - product?.sale)) / 100);
  } else {
    lastPrice = product?.price;
  }
  totalGrand = lastPrice * numProduct + options;

  const { id } = SetId();
  useEffect(() => {
    const getProd = async () => {
      // const params = new URLSearchParams(window.location.search);
      // setId(Id);
      setloading(true);
      if (id) {
        const data = await getProductById(id);
        await setProduct(data);
        setloading(false);
      }
    };
    getProd();
  }, [id]);

  const HundleAddToCart = async (e) => {
    e.preventDefault();
    const existProd = cart.find((item) => item.code == product.code);
    if (existProd) {
      console.log(existProd);

      const data = cart.map((item) =>
        item.code == product.code
          ? { ...item, numProduct: item.numProduct + numProduct }
          : item
      );
      setCart(data);
    } else {
      const Prod = { ...product, numProduct, totalGrand, lastPrice, options };
      addProductToCart(Prod);
    }
    return toast.info("Done Add Product to Cart");
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="w-[100%] px-3">
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[{ src: product?.image }]}
        />
        <div className="max-w-[1200px] mx-auto flex [@media(max-width:1050px)]:flex-col  items-start justify-start gap-10 mt-10">
          <div className="w-1/2 [@media(max-width:1050px)]:w-full relative h-[100dvh] flex items-center justify-center">
            <img
              onClick={() => setOpen(true)}
              src={product?.image}
              alt="prod_img"
              className="w-full cursor-zoom-in object-cover h-full"
            />
            {product?.stock <= 0 ? (
              <span className="w-12 h-12 absolute flex items-center justify-center top-2 left-2   text-center rounded-full bg-redcolor text-white font-extrabold">
                <p className="leading-4 text-xs uppercase">Sold Out</p>
              </span>
            ) : (
              <span className="w-12 h-12 absolute flex items-center justify-center top-2 left-2  text-center rounded-full bg-bluecolor text-white font-semibold text-sm">
                <p className="">-{product?.sale}%</p>
              </span>
            )}
          </div>
          <div className="w-1/2 [@media(max-width:1050px)]:w-full flex flex-col items-start justify-start gap-3">
            <div className="flex items-center justify-start pt-3">
              <Link href="/" className="text-sm text-graycolor mr-3">
                Home /
              </Link>
              {product?.sale && (
                <Link href="/sale" className="text-sm text-graycolor">
                  Years End Sale /
                </Link>
              )}
            </div>
            <div className="flex items-start justify-center flex-col gap-0 mt-1">
              <Link
                target="_blank"
                href="https://falconkitchen.com/"
                className="uppercase hover:text-redcolor [@media(max-width:1050px)]:text-xs text-sm tracking-wide"
              >
                Sold by Falcon Professional Kitchen
              </Link>
              <p className="uppercase font-semibold text-black [@media(max-width:1050px)]:text-2xl leading-[45px] text-4xl">
                {product?.name?.en}
              </p>
            </div>
            <div className="flex items-start justify-center flex-col gap-0 mt-3 text-bluecolor">
              {product?.sale > 0 ? (
                <>
                  <p className="line-through [@media(max-width:1050px)]:text-lg text-xl">
                    {product?.price.toLocaleString()} AED
                  </p>
                  <p className="font-semibold [@media(max-width:1050px)]:text-xl text-2xl">
                    {lastPrice.toLocaleString()} AED
                  </p>
                </>
              ) : (
                <p className="font-semibold [@media(max-width:1050px)]:text-xl text-2xl">
                  {lastPrice.toLocaleString()} AED
                </p>
              )}
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: product?.description?.en,
              }}
              className="description"
            />
            {product?.stock > 0 ? (
              <div className="flex items-center justify-start gap-2 font-bold text-greencolor ">
                <FaRegCheckCircle className=" w-8 h-8" />{" "}
                <p className="">In Stock</p>
              </div>
            ) : (
              <div className="flex items-center justify-start gap-2 font-bold text-redcolor ">
                <FaRegTimesCircle className=" w-8 h-8" />
                <p className="">Out of Stock</p>
              </div>
            )}
            {product?.stock > 0 && (
              <div className="flex flex-col items-start justify-start mt-3 text-black mb-8 gap-3">
                <p className="text-sm">
                  Installation Charges <span className="text-redcolor">*</span>
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-6 h-6 border-2 border-redcolor rounded-full flex items-center justify-center !cursor-pointer">
                    <input
                      type="radio"
                      className="appearance-none  w-3 h-3 border-0 cursor-pointer !inline-block checked:!bg-redcolor border-redcolor rounded-full"
                      name="one"
                      onClick={() => setOptions(0)}
                      value="one"
                    />
                  </div>
                  <label htmlFor="one" className=" text-sm ">
                    No Thanks
                  </label>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-6 h-6 border-2 border-redcolor rounded-full flex items-center justify-center !cursor-pointer">
                    <input
                      onClick={() => setOptions(450)}
                      type="radio"
                      className="appearance-none  w-3 h-3 border-0 cursor-pointer !inline-block checked:!bg-redcolor border-redcolor rounded-full"
                      name="one"
                    />
                  </div>
                  <label htmlFor="two" className=" text-sm ">
                    Installation Charge{" "}
                    <span className="text-graycolor">(+450 AED)</span>
                  </label>
                </div>
              </div>
            )}
            {product?.stock > 0 && (
              <div className="flex flex-col items-start justify-start gap-3">
                <div className="flex items-start justify-start gap-3">
                  <p className="text-gray-500 font-bold text-sm">
                    Product total
                  </p>
                  <p className="text-redcolor font-bold">
                    {(lastPrice * numProduct).toLocaleString()} AED
                  </p>
                </div>
                <div className="flex items-start text-gray-500 font-b justify-start gap-3">
                  <p className="text-gray-500 font-bold text-sm">
                    Options total
                  </p>
                  <p className="text-redcolor font-bold option">
                    {options} AED
                  </p>{" "}
                </div>
                <div className="options flex items-start justify-start gap-3">
                  <p className="text-gray-500 font-bold text-sm">Grand total</p>
                  <p className="text-redcolor font-bold">
                    {totalGrand.toLocaleString()} AED
                  </p>
                </div>
              </div>
            )}
            <div className="flex flex-col justify-start items-start gap-3 mt-3">
              {product?.stock > 0 && (
                <div className="flex items-center h-[45px] justify-center">
                  <button
                    onClick={() => setNumProduct((prev) => ++prev)}
                    className="border-2 px-1 h-full border-gray-300"
                  >
                    <PlusIcon className="text-gray-500 w-4 h-4 " />
                  </button>
                  <p className=" border-y-2 px-3 border-gray-300 text-gray-500 text-center flex items-center justify-center h-full">
                    {numProduct}
                  </p>
                  <button
                    onClick={() => {
                      numProduct <= 1
                        ? setNumProduct(1)
                        : setNumProduct((prev) => --prev);
                    }}
                    className="border-2 border-gray-300 px-1 h-full"
                  >
                    <MinusIcon className="text-gray-500  w-4 h-4" />
                  </button>
                  <button
                    onClick={HundleAddToCart}
                    className="px-7 ml-4 h-[45px] bg-redcolor text-white font-bold text-sm uppercase hover:bg-bluecolor duration-200 ease-linear"
                  >
                    add to cart
                  </button>
                </div>
              )}
              <div className="flex items-center gap-1 w-full  justify-between text-bluecolor mt-2 text-sm font-bold">
                <div className="hover:text-redcolor flex items-center gap-1  justify-start">
                  {productsCompare.some(
                    (item) => item.product._id === product._id
                  ) ? (
                    <AiOutlineCheck
                      onClick={(e) => {
                        e.preventDefault();
                        router.push("/compare");
                      }}
                      className=" w-6 h-6 cursor-pointer text-redcolor "
                    />
                  ) : (
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        addProductCompare({
                          product: {
                            link: `/category_products/product_item?id=${product._id}`,
                            ...product,
                          },
                        });
                      }}
                      className="flex items-center gap-1 hover:text-redcolor  justify-start"
                    >
                      <RiShuffleFill className=" cursor-pointer peer" />
                      <p className="  cursor-pointer">Compare</p>
                    </div>
                  )}
                </div>
                {products.some((item) => item.product._id === product._id) ? (
                  <AiOutlineCheck
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/wishlist");
                    }}
                    className=" w-6 h-6 cursor-pointer text-redcolor "
                  />
                ) : (
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      addProduct({
                        product: {
                          link: `/category_products/product_item?id=${product._id}`,
                          ...product,
                        },
                      });
                    }}
                    className="flex items-center gap-1 hover:text-redcolor  justify-start"
                  >
                    <RiHeartLine className=" cursor-pointer" />
                    <p className=" cursor-pointer">Add to wishlist</p>
                  </div>
                )}
              </div>
            </div>
            <hr className="text-gray-500 h-1 my-1 w-full" />
            <div className="flex flex-col justify-start  text-sm  items-start gap-3 text-black font-bold mb-28">
              <p className="">
                Product Code:{"\n "}
                <span className="text-graycolor font-normal">
                  {product?.code}
                </span>
              </p>
              <p className="">
                Categories:{" "}
                <Link href="#" className="text-graycolor font-normal">
                  {" "}
                  {product?.category.name.en} ,{" "}
                </Link>
                {product?.sale > 0 && (
                  <Link href="#" className="text-graycolor  font-normal">
                    Year End Sale
                  </Link>
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <hr className="text-graycolor my-4  mx-auto translate-y-4 [@media(max-width:1050px)]:hidden" />
          <div className="flex items-start justify-start gap-10 max-w-[1200px] mx-auto [@media(max-width:1050px)]:hidden">
            <button
              onClick={() => setInfoProd(1)}
              className={`"uppercase font-bold text-graycolor pt-6 border-t-4 border-transparent hover:text-black " ${
                infoProd == 1 && "borderStyle"
              }`}
            >
              ABOUT THE BRAND
            </button>
            {/* <button
              onClick={() => setInfoProd(2)}
              className={`"uppercase font-bold text-graycolor pt-6 border-t-4 border-transparent hover:text-black " ${
                infoProd == 2 && "borderStyle"
              }`}
            >
              SPEC SHEET
            </button> */}
            <button
              onClick={() => setInfoProd(3)}
              className={`"uppercase font-bold text-graycolor pt-6 border-t-4 border-transparent hover:text-black " ${
                infoProd == 3 && "borderStyle"
              }`}
            >
              ADDITIONAL INFORMATION
            </button>
          </div>
          <div className="mb-32 mt-10 max-w-[1200px] mx-auto [@media(max-width:1050px)]:hidden ">
            {infoProd == 1 && (
              <p
                dangerouslySetInnerHTML={{
                  __html: product?.brand?.description?.en,
                }}
                className="description"
              />
            )}
            {infoProd == 2 && (
              <button className="py-3 px-12 bg-redcolor font-bold tracking-wide text-white duration-500 border-4 border-redcolor hover:bg-white hover:text-redcolor ">
                Download Product Details
              </button>
            )}
            {infoProd == 3 && product.weight > 0 && (
              <>
                <p className="w-full border-b-[1px] text-sm border-gray-200 pb-4 flex items-center justify-between">
                  <span className=" font-bold text-black">weight</span>
                  <span className="  text-gray-500 ">{product?.weight} kg</span>
                </p>
                {product.dimensions.length <= 0 &&
                product.dimensions.width <= 0 &&
                product.dimensions.height <= 0 ? (
                  ""
                ) : (
                  <p className="w-full border-b-[1px] text-sm border-gray-200 py-4  flex items-center justify-between">
                    <span className=" font-bold text-black">Dimensions</span>
                    <span className="  text-gray-500 ">
                      {product?.dimensions.length} × {product?.dimensions.width}{" "}
                      × {product?.dimensions.height} cm
                    </span>
                  </p>
                )}
              </>
            )}
          </div>
          <RelatedProducts idCategory={product?.category?._id} />{" "}
        </div>
      </div>
      <ModelProduct />
    </>
  );
};

export default ProductsDetials;
