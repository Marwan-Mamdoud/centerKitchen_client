"use client";
import { deleteInnovation, getInnovations } from "@/lib/APIS";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [Innovations, setInnovations] = useState([]);
  const [id, setId] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const getInnovationss = async () => {
      const result = await getInnovations();
      setInnovations(result);
    };
    getInnovationss();
  }, []);
  const hundleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    await deleteInnovation(id);
    setLoading(false);
    setOpen(false);
  };
  return (
    <div className="w-full px-5 my-12 mx-auto">
      <div className="grid grid-cols-2 [@media(max-width:1050px)]:flex [@media(max-width:1050px)]:flex-col justify-center gap-5 items-center justify-items-center">
        {Innovations.length == 0
          ? "No Innovations"
          : Innovations?.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setOpen(true);
                    setId(item._id);
                  }}
                  className={`w-full cursor-pointer h-full`}
                >
                  <iframe
                    onClick={() => {
                      setOpen(true);
                      setId(item._id);
                    }}
                    disabled={true}
                    src={item.link}
                    className="w-full h-full pointer-events-none -z-10"
                    frameborder="0"
                  ></iframe>
                </div>
              );
            })}
      </div>
      <dialog
        className={`${
          open ? "" : "hidden"
        } w-full h-[100dvh] fixed top-0 right-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm`}
      >
        <div className="flex flex-col gap items-center justify-center gap-12 w-[600px] h-[400px] border-2 border-bluecolor bg-redcolor px-5 text-4xl font-bold text-white">
          <p className="text-center px-5">
            Are You Sure You Want to Delete This Video
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
