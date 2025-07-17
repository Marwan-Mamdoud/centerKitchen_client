"use client";
import { addBanner } from "@/lib/APIS";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [link, setLink] = useState();
  const [Logo, setLogo] = useState();
  const [_, setrender] = useState();
  const [style, setStyle] = useState();
  const [loading, setloading] = useState(false);
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
    const data = { image: Logo, link, style };
    await addBanner(data);
    setloading(false);
  };
  return (
    <div className="w-full px-5 mx-auto flex flex-col items-center justify-center py-12">
      <p className="font-bold uppercase text-black text-4xl">ADD Banner</p>
      <form
        onSubmit={submitHundler}
        className="w-full mx-auto py-12 flex flex-col items-center justify-center"
      >
        <label
          htmlFor="Logo"
          className="border-dashed border-2 mb-5 border-black bg-gray-200 cursor-pointer p-5 text-black font-bold min-h-[100px]  min-w-[400px]  px-2 flex items-center uppercase justify-center"
        >
          {Logo ? (
            <img
              className="w-full h-full object-contain object-center"
              src={Logo}
              alt="Logo"
            />
          ) : (
            ` Add Banner`
          )}{" "}
        </label>
        <input
          type="file"
          name="Logo"
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
          id="Logo"
        />
        <div className=" max-w-[600px] mx-auto flex flex-col gap-2 items-start justify-start">
          <label htmlFor="name" className="text-black w-fit  font-medium">
            Link of Banner <span className="text-redcolor">*</span>
          </label>
          <input
            type="text"
            required
            onChange={(e) => setLink(e.target.value)}
            placeholder="Link for that Banner"
            className="w-full  h-10 border-black/30 mb-3 outline-none px-2.5 border-2"
          />
        </div>
        <div className="flex flex-col  w-[600px] mx-auto mt-2  items-start mb-10 justify-start gap-2">
          <label htmlFor="name" className="text-black font-medium">
            Style of Banner
          </label>
          <select
            required
            defaultValue=""
            onChange={(e) => setStyle(e.target.value)}
            className="w-full h-10 border-black/30 outline-none px-2.5 border-2"
          >
            <option disabled value="">
              Select Style
            </option>
            <option value="none">Normal</option>
            <option value="Tall">Tall</option>
            <option value="Wide">Wide</option>
          </select>
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
