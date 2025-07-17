"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { addCategories, getBrands } from "@/lib/APIS";
import { toast } from "react-toastify";
import axios from "axios";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const AddCategory = () => {
  const [descriptionInEnglish, setDescriptionInEnglish] = useState("");
  const [descriptionInArabic, setDescriptionInArabic] = useState("");
  const [selectedBrands, setselectedBrands] = useState([]);
  const [logo, setLogo] = useState();
  const [image, setImage] = useState();
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

  const handleUploadimg = async (event) => {
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
      setImage(response.data.secure_url); // Store uploaded image URL
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
      style: style,
      description: JSON.stringify({
        ar: descriptionInArabic,
        en: descriptionInEnglish,
      }),
      brands: selectedBrands.map((item) => {
        return item.value;
      }),
      backgroundImgage: logo,
      logo: image,
    };
    await addCategories(data);
    setloading(false);
  };
  return (
    <div className="w-full px-5 mx-auto flex flex-col items-center justify-center py-12">
      <p className="font-bold uppercase text-black text-4xl">ADD category</p>
      <form
        onSubmit={submitHundler}
        className="w-full mx-auto py-12 flex flex-col items-start justify-start"
      >
        <div className="flex flex-col w-full items-start justify-start gap-2">
          <label htmlFor="name" className="text-black font-medium">
            Name of Cateory
          </label>
          <input
            type="text"
            required
            onChange={(e) =>
              setname((prev) => ({ ...prev, en: e.target.value }))
            }
            placeholder="Name of Category in English"
            className="w-1/2 [@media(max-width:1050px)]:w-full h-10 border-black outline-none px-2.5 border-2"
          />
          <input
            type="text"
            placeholder="اسم الفئه باللغه العربيه"
            required
            onChange={(e) => {
              setname((prev) => ({ ...prev, ar: e.target.value }));
            }}
            className="w-1/2 h-10 [@media(max-width:1050px)]:w-full border-black text-right placeholder:text-right outline-none px-2.5 border-2"
          />
        </div>
        <div className="flex flex-col w-full items-start my-10 justify-start gap-2">
          <label htmlFor="name" className="text-black font-medium">
            Descrebtion of Cateory
          </label>
          <div className="w-1/2 [@media(max-width:1050px)]:w-full mb-10 h-[200px]">
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
        <label
          htmlFor="logo"
          className="border-dashed mt-5 border-2 border-black bg-gray-200 cursor-pointer p-5 text-black font-bold h-[100px] w-fit px-2 flex items-center uppercase justify-center"
        >
          {image ? (
            <img
              className="w-full h-full object-contain object-center"
              src={image}
              alt="image"
            />
          ) : (
            "Add Logo For Category"
          )}{" "}
        </label>
        <input
          type="file"
          name="image"
          onChange={(e) => {
            if (!e.target.files[0].type.startsWith("image/")) {
              e.target.value = "";
              return toast.warning("Please Upload Image Only!", {
                theme: "colored",
              });
            } else {
              return handleUploadimg(e);
            }
          }}
          className="hidden invisible mb-10"
          id="image"
        />
        <div className="flex flex-col w-full items-start my-10 justify-start gap-2">
          <label htmlFor="name" className="text-black font-medium">
            Brands of Cateory
          </label>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            defaultValue={brands}
            onChange={setselectedBrands}
            options={brands}
            className="w-1/2 h-fit"
          />
        </div>
        <div className="flex flex-col w-full items-start mb-10 justify-start gap-2">
          <label htmlFor="name" className="text-black font-medium">
            Style of Cateory
          </label>
          <select
            required
            onChange={(e) => setStyle(e.target.value)}
            defaultValue=""
            className="w-1/2 [@media(max-width:1050px)]:w-full h-10 border-black outline-none px-2.5 border-2"
          >
            <option disabled value="">
              Select Style
            </option>
            <option value="none">Normal</option>
            <option value="Tall">Tall</option>
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

export default AddCategory;
