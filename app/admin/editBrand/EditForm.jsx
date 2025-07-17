"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import { addBrands, addProduct, editBrand } from "@/lib/APIS";
import { toast } from "react-toastify";
import axios from "axios";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const EditForm = ({ brand }) => {
  const [descriptionInEnglish, setDescriptionInEnglish] = useState("");
  const [descriptionInArabic, setDescriptionInArabic] = useState("");
  const [logo, setLogo] = useState(false);
  const [loading, setloading] = useState(false);
  const [_, setrender] = useState(false);
  const [name, setname] = useState({ en: "", ar: "" });

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
    const description = { en: descriptionInEnglish, ar: descriptionInArabic };
    const data = {
      name: JSON.stringify(name),
      description: JSON.stringify(description),
      image: logo,
    };
    await editBrand({ data, id: brand._id });
    setloading(false);
  };

  useEffect(() => {
    setname(brand.name);
    setDescriptionInEnglish(brand.description.en);
    setDescriptionInArabic(brand.description.ar);
  }, []);

  return (
    <form
      onSubmit={submitHundler}
      className="w-full px-5 mx-auto py-12 flex flex-col items-start justify-start"
    >
      <div className="flex flex-col w-full items-start justify-start gap-2">
        <label htmlFor="name" className="text-black font-medium">
          Name of Brand
        </label>
        <input
          type="text"
          required
          defaultValue={name.en}
          onChange={(e) => setname((prev) => ({ ...prev, en: e.target.value }))}
          placeholder="Name of Brand in English"
          className="w-1/2 [@media(max-width:1050px)]:w-full h-10 border-black/30 outline-none px-2.5 border-2"
        />
        <input
          type="text"
          placeholder="اسم البراند باللغه العربيه"
          required
          defaultValue={name.ar}
          onChange={(e) => {
            setname((prev) => ({ ...prev, ar: e.target.value }));
          }}
          className="w-1/2 h-10 [@media(max-width:1050px)]:w-full border-black/30 placeholder:text-right text-right outline-none px-2.5 border-2"
        />
      </div>
      <div className="flex flex-col w-full items-start my-10 justify-start gap-2">
        <label htmlFor="name" className="text-black font-medium">
          Descrebtion of Cateory
        </label>
        <div className="w-1/2 [@media(max-width:1050px)]:w-full mb-10 h-[200px]">
          <ReactQuill
            theme="snow"
            placeholder="Description Of Brand in English"
            value={descriptionInEnglish}
            onChange={setDescriptionInEnglish}
            className="w-full h-full"
          />
        </div>
        <div className="w-1/2 [@media(max-width:1050px)]:w-full mb-5 h-[200px]">
          <ReactQuill
            theme="snow"
            placeholder="وصف البراند باللغه العربيه"
            value={descriptionInArabic}
            onChange={setDescriptionInArabic}
            className="w-full placeholder:text-right placeholder:text-5xl h-full"
          />
        </div>
      </div>
      <label
        htmlFor="logo"
        className="border-dashed border-2 border-black bg-gray-200 cursor-pointer p-5 text-black font-bold h-[100px] w-fit px-10 flex items-center uppercase justify-center"
      >
        {logo ? (
          <img
            className="w-full h-full object-contain object-center"
            src={logo}
            alt="logo"
          />
        ) : brand?.image ? (
          <img
            className="w-full h-full object-contain object-center"
            src={brand.image}
            alt="logo"
          />
        ) : (
          "Add logo for brand"
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
      <button
        type="submit"
        className="px-12 py-3 bg-redcolor hover:bg-bluecolor duration-300 rounded-lg font-bold text-white text-xl my-5 uppercase"
      >
        {loading ? "Loading..." : "submit"}
      </button>
    </form>
  );
};

export default EditForm;
