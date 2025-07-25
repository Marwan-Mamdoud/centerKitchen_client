"use client";
import { deleteBanner, getBanners } from "@/lib/APIS";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [banners, setBanners] = useState([]);
  const [id, setId] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const getBannerss = async () => {
      const result = await getBanners();
      setBanners(result);
    };
    getBannerss();
  }, []);
  const hundleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    await deleteBanner(id);
    setLoading(false);
    setOpen(false);
  };
  return (
    <div className="w-full px-5 my-12 mx-auto">
      <div className="grid grid-cols-5 [@media(max-width:1050px)]:flex [@media(max-width:1050px)]:flex-col justify-center gap-5 items-center justify-items-center">
        {banners.length == 0
          ? "No Bannres"
          : banners?.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setOpen(true);
                    setId(item._id);
                  }}
                  className={`w-full cursor-pointer h-full ${
                    item.style == "Tall"
                      ? "row-span-2"
                      : item.style == "Wide"
                      ? "col-span-2"
                      : ""
                  }`}
                >
                  <img
                    src={item.image}
                    alt="img"
                    className="object-cover w-full h-full"
                  />
                </div>
              );
            })}
      </div>
      <dialog
        className={`${
          open ? "" : "hidden"
        } w-full h-[100dvh] fixed top-0 right-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm`}
      >
        <div className="flex flex-col gap items-center justify-center gap-12 max-w-[600px] h-[400px] border-2 border-bluecolor bg-redcolor px-5 text-4xl font-bold text-white">
          <p className="text-center px-5">
            Are You Sure You Want to Delete This Banner
          </p>
          <div className="flex justify-between items-center w-[550px] mx-auto">
            <button
              disabled={loading}
              onClick={() => setOpen(false)}
              className="bg-bluecolor py-2 px-6 rounded-lg uppercase"
            >
              {loading ? "Loading..." : "No thanks"}
            </button>
            <button
              disabled={loading}
              onClick={hundleSubmit}
              className="bg-red-800 py-2 px-6 rounded-lg uppercase"
            >
              {loading ? "Loading..." : "yes sure"}
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Page;
