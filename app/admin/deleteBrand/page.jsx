"use client";
import { deleteBrand } from "@/lib/APIS";
import { useState } from "react";

const Page = () => {
  const [name, setname] = useState();
  const [loading, setloading] = useState(false);

  const submitHundler = async (e) => {
    setloading(true);
    e.preventDefault();
    await deleteBrand(name);
    setloading(false);
  };
  return (
    <div className="w-full px-5 mx-auto flex flex-col items-center justify-center py-12">
      <p className="font-bold uppercase text-black text-4xl">Delete Brand</p>

      <p className="font-bold uppercase mt-20 text-black text-2xl">
        Add Name Of Brand By English
      </p>
      <form
        onSubmit={submitHundler}
        className="w-full mx-auto py-12 flex flex-col items-center justify-center"
      >
        <div className="flex flex-col w-1/2 mx-auto items-start justify-start gap-2">
          <label htmlFor="name" className="text-black font-medium">
            Name of Brand
          </label>
          <input
            type="text"
            required
            onChange={(e) => setname(e.target.value)}
            placeholder="Name of Brand in English"
            className="w-full h-10 border-black/30 outline-none px-2.5 border-2"
          />
        </div>

        <button
          type="submit"
          className="px-12 py-3 bg-redcolor hover:bg-bluecolor duration-300 rounded-lg font-bold text-white text-xl my-5 uppercase"
        >
          {loading ? "Loading..." : "submit"}
        </button>
      </form>
    </div>
  );
};

export default Page;
