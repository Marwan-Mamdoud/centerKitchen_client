"use client";
import { addInnovation } from "@/lib/APIS";
import React, { useState } from "react";

const Page = () => {
  const [link, setLink] = useState();
  const [loading, setloading] = useState(false);
  const submitHundler = async (e) => {
    e.preventDefault();
    setloading(true);
    const data = { link };
    await addInnovation(data);
    setloading(false);
  };
  return (
    <div className="w-full px-5 mx-auto flex flex-col items-center justify-center py-12">
      <p className="font-bold uppercase text-black text-4xl">ADD Innovation</p>
      <form
        onSubmit={submitHundler}
        className="w-full mx-auto py-12 flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-start justify-start w-1/2 mx-auto">
          <label htmlFor="name" className="text-black font-medium">
            Link of Innovation
          </label>
          <input
            type="text"
            onChange={(e) => setLink(e.target.value)}
            required
            placeholder="Link of Innovation"
            className="w-full h-10 border-black/30 outline-none px-2.5 border-2"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-12 py-3 bg-redcolor hover:bg-bluecolor duration-300 rounded-lg font-bold text-white text-xl my-5 uppercase"
        >
          {loading ? "Loading..." : "submit"}
        </button>
      </form>
    </div>
  );
};

export default Page;
