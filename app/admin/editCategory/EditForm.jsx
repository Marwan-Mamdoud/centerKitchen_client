"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { editCategory, getBrands } from "@/lib/APIS";
import { toast } from "react-toastify";
import axios from "axios";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const EditForm = ({ category }) => {
  const [descriptionInEnglish, setDescriptionInEnglish] = useState("");
  const [descriptionInArabic, setDescriptionInArabic] = useState("");
  const [selectedBrands, setselectedBrands] = useState([]);
  const [logo, setLogo] = useState();
  const [style, setStyle] = useState();
  const [_, setrender] = useState();
  const [loading, setloading] = useState(false);
  const [brands, setBrands] = useState();
  const [name, setname] = useState({ en: "", ar: "" });
  const animatedComponents = makeAnimated();

  useEffect(() => {
    const getbrands = async () => {
      let brands = await getBrands();
      brands = brands.map((item) => {
        return { value: item._id, label: item.name.en };
      });
      setBrands(brands);
    };

    const selectedbrands = category.brands.map((item) => {
      return { value: item._id, label: item.name.en };
    });
    setselectedBrands(selectedbrands);
    setname(category.name);
    setDescriptionInArabic(category.description.ar);
    setDescriptionInEnglish(category.description.en);
    getbrands();
  }, []);

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
    const data = {
      name: JSON.stringify(name),
      description: JSON.stringify({
        ar: descriptionInArabic,
        en: descriptionInEnglish,
      }),
      brands: selectedBrands.map((item) => {
        return item.value;
      }),
      logo: logo,
      style: style,
    };
    console.log(data);

    await editCategory({ data, id: category._id });
    setloading(false);
  };
  return (
    <form
      onSubmit={submitHundler}
      className="w-full px-5 mx-auto py-12 flex flex-col items-start justify-start"
    >
      <div className="flex flex-col w-full items-start justify-start gap-2">
        <label htmlFor="name" className="text-black font-medium">
          Name of Cateory
        </label>
        <input
          type="text"
          required
          defaultValue={category.name.en}
          onChange={(e) => setname((prev) => ({ ...prev, en: e.target.value }))}
          placeholder="Name of Category in English"
          className="w-1/2 [@media(max-width:1050px)]:w-full h-10 border-black/30 outline-none px-2.5 border-2"
        />
        <input
          type="text"
          placeholder="اسم الفئه باللغه العربيه"
          required
          defaultValue={category.name.ar}
          onChange={(e) => {
            setname((prev) => ({ ...prev, ar: e.target.value }));
          }}
          className="w-1/2 [@media(max-width:1050px)]:w-full h-10 border-black/30 text-right placeholder:text-right outline-none px-2.5 border-2"
        />
      </div>
      <div className="flex flex-col w-full items-start my-10 justify-start gap-2">
        <label htmlFor="name" className="text-black font-medium">
          Descrebtion of Cateory
        </label>
        <div className="w-1/2 [@media(max-width:1050px)]:w-full  mb-10 h-[200px]">
          <ReactQuill
            theme="snow"
            placeholder="Description Of Category in English"
            value={descriptionInEnglish}
            onChange={setDescriptionInEnglish}
            className="w-full h-full"
          />
        </div>
        <div className="w-1/2 [@media(max-width:1050px)]:w-full mb-5 h-[200px]">
          <ReactQuill
            theme="snow"
            placeholder="وصف الفئه باللغه العربيه"
            value={descriptionInArabic}
            onChange={setDescriptionInArabic}
            className="w-full placeholder:text-5xl h-full"
          />
        </div>
      </div>
      <label
        htmlFor="logo"
        className="border-dashed border-2 border-black bg-gray-200 cursor-pointer p-5 text-black font-bold h-[100px] w-fit px-2 flex items-center uppercase justify-center"
      >
        {logo ? (
          <img
            className="w-full h-full object-contain object-center"
            src={logo}
            alt="logo"
          />
        ) : category?.logo ? (
          <img
            className="w-full h-full object-contain object-center"
            src={category?.logo}
            alt="logo"
          />
        ) : (
          "Add Back Ground Image for Category"
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
      <div className="flex flex-col w-full items-start my-10 justify-start gap-2">
        <label htmlFor="name" className="text-black font-medium">
          Brands of Cateory
        </label>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          value={selectedBrands}
          onChange={setselectedBrands}
          options={brands}
          className="w-1/2 [@media(max-width:1050px)]:w-full h-fit"
        />
      </div>
      <div className="flex flex-col w-full items-start mb-10 justify-start gap-2">
        <label htmlFor="name" className="text-black font-medium">
          Style of Cateory
        </label>
        <select
          required
          onChange={(e) => setStyle(e.target.value)}
          defaultValue={category.style}
          className="w-1/2 [@media(max-width:1050px)]:w-full h-10 border-black/30 outline-none px-2.5 border-2"
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
  );
};

export default EditForm;
