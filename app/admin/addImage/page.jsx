"use client";
import { addImageHeaders } from "@/lib/APIS";
import axios from "axios";
import React, { useState } from "react";

const Page = () => {
  const [loading, setloading] = useState(false);
  const [_, setrender] = useState();
  const [logo, setLogo] = useState();
  const [link, setLink] = useState();

  const handleUpload = async (event) => {
    setloading(true);
    const file = event.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "center_kitchen"); // Replace with your preset

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dk9wy7nq2/image/upload", // استبدل 'your_cloud_name' باسم حسابك في Cloudinary
        data,
        {
          withCredentials: false, // تأكد من تعيين هذا إلى false
        }
      );

      // const result = await response.json();
      setLogo(response.data.secure_url); // Store uploaded image URL
      setrender((prev) => !prev);
      setloading(false);
    } catch (error) {
      setloading(false);
      console.error("Error uploading file:", error);
    }
  };

  const submitHundler = async (e) => {
    setloading(true);
    e.preventDefault();
    const data = { image: logo, link };
    await addImageHeaders(data);
    setloading(false);
  };
  return (
    <div className="w-full px-5 mx-auto flex flex-col items-center justify-center py-12">
      <p className="font-bold uppercase text-black text-4xl">
        ADD Image Header
      </p>
      <form
        onSubmit={submitHundler}
        className="w-full mx-auto py-12 flex flex-col items-center justify-center"
      >
        <label
          htmlFor="logo"
          className="border-dashed border-2 mb-5 border-black bg-gray-200 cursor-pointer p-5 text-black font-bold h-[100px] w-fit px-2 flex items-center uppercase justify-center"
        >
          {logo ? (
            <img
              className="w-full h-full object-contain object-center"
              src={logo}
              alt="logo"
            />
          ) : (
            "Add Back Ground For Image "
          )}{" "}
        </label>
        <input
          type="file"
          name="logo"
          onChange={(e) => {
            if (!e.target.files[0].type.startsWith("image/")) {
              e.target.value = "";
              return toast.warning("Please Upload Image Only!", {
                theme: "colored",
              });
            } else {
              return handleUpload(e);
            }
          }}
          className="hidden invisible mb-10"
          id="logo"
        />
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
