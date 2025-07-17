"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import axios from "axios";
import { addProduct, getCategories } from "@/lib/APIS";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const Page = () => {
  const [_, setrender] = useState();
  const [loading, setloading] = useState(false);

  const [descriptionInEnglish, setDescriptionInEnglish] = useState("");
  const [descriptionInArabic, setDescriptionInArabic] = useState("");
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [category, setCategory] = useState();
  const [brand, setBrand] = useState();
  const [sale, setSale] = useState();
  const [code, setCode] = useState();
  const [logo, setLogo] = useState();
  const [weight, setWeight] = useState();
  const [dimensions, setDimensions] = useState({
    width: 0,
    length: 0,
    height: 0,
  });
  const [name, setname] = useState({ en: "", ar: "" });
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();

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
      price,
      stock,
      sale,
      image: logo,
      code,
      brand,
      category,
      weight,
      dimensions: JSON.stringify(dimensions),
      description: JSON.stringify({
        ar: descriptionInArabic,
        en: descriptionInEnglish,
      }),
    };
    await addProduct(data);
    setloading(false);
  };

  useEffect(() => {
    const getAllCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    getAllCategories();
  }, []);

  return (
    <div className="w-full px-5 mx-auto flex flex-col items-center justify-center py-12">
      <p className="font-bold uppercase text-black text-4xl">ADD product</p>
      <form
        onSubmit={submitHundler}
        className="w-full mx-auto py-12 flex flex-col items-start justify-start"
      >
        <div className="flex flex-col w-full items-start justify-start gap-2">
          <label htmlFor="name" className="text-black font-medium">
            Name of Product
          </label>
          <input
            type="text"
            required
            onChange={(e) =>
              setname((prev) => ({ ...prev, en: e.target.value }))
            }
            placeholder="Name of Product in English"
            className="w-1/2 [@media(max-width:1050px)]:w-full h-10 border-black/30 outline-none px-2.5 border-2"
          />
          <input
            type="text"
            placeholder="اسم المنتج باللغه العربيه"
            required
            onChange={(e) => {
              setname((prev) => ({ ...prev, ar: e.target.value }));
            }}
            className="w-1/2 [@media(max-width:1050px)]:w-full h-10 border-black/30 text-right placeholder:text-right outline-none px-2.5 border-2"
          />
        </div>
        <label
          htmlFor="logo"
          className="border-dashed border-2 border-black bg-gray-200 cursor-pointer p-5 text-black font-bold h-fit w-fit px-2 py-2 flex mt-5 items-center uppercase justify-center"
        >
          {logo ? (
            <img
              className="w-full h-full object-contain object-center"
              src={logo}
              alt="logo"
            />
          ) : (
            "Add Image for Product"
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
        <div className="flex flex-col w-full items-start justify-start gap-2 my-5">
          <label htmlFor="name" className="text-black font-medium">
            Price of Product
          </label>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            required
            placeholder="Price of Product"
            className="w-1/2 [@media(max-width:1050px)]:w-full h-10 border-black/30 outline-none px-2.5 border-2"
          />
        </div>
        <div className="flex flex-col w-full items-start justify-start gap-2 my-5">
          <label htmlFor="name" className="text-black font-medium">
            Sale of Product
          </label>
          <input
            type="number"
            onChange={(e) => setSale(e.target.value)}
            placeholder="Sale of Product"
            className="w-1/2 [@media(max-width:1050px)]:w-full h-10 border-black/30 outline-none px-2.5 border-2"
          />
        </div>
        <div className="flex flex-col w-full items-start my-10 justify-start gap-2">
          <label htmlFor="name" className="text-black font-medium">
            Descrebtion of Product
          </label>
          <div className="w-1/2 [@media(max-width:1050px)]:w-full mb-10 h-[200px]">
            <ReactQuill
              theme="snow"
              placeholder="Description Of Product in English"
              value={descriptionInEnglish}
              onChange={setDescriptionInEnglish}
              className="w-full h-full"
            />
          </div>
          <div className="w-1/2 [@media(max-width:1050px)]:w-full mb-5 h-[200px]">
            <ReactQuill
              theme="snow"
              placeholder="وصف المنتج باللغه العربيه"
              value={descriptionInArabic}
              onChange={setDescriptionInArabic}
              className="w-full placeholder:text-right placeholder:text-5xl h-full"
            />
          </div>
        </div>
        <div className="flex flex-col w-full items-start justify-start gap-2 my-5">
          <label htmlFor="name" className="text-black font-medium">
            Stock of Product
          </label>
          <input
            type="number"
            required
            onChange={(e) => setStock(e.target.value)}
            placeholder="Stock of Product"
            className="w-1/2 [@media(max-width:1050px)]:w-full h-10 border-black/30 outline-none px-2.5 border-2"
          />
        </div>
        <div className="flex flex-col w-full items-start justify-start gap-2 my-5">
          <label htmlFor="name" className="text-black font-medium">
            Code of Product
          </label>
          <input
            type="text"
            required
            onChange={(e) => setCode(e.target.value)}
            placeholder="Code of Product"
            className="w-1/2 [@media(max-width:1050px)]:w-full h-10 border-black/30 outline-none px-2.5 border-2"
          />
        </div>
        <div className="flex flex-col w-full items-start justify-start gap-2 my-5">
          <label htmlFor="name" className="text-black font-medium">
            Category of Product
          </label>
          <select
            name=""
            required
            onChange={(e) => {
              setCategory(e.target.value);
              const category = categories.find(
                (item) => item._id == e.target.value
              );
              setBrands(category.brands);
            }}
            className="w-1/2 [@media(max-width:1050px)]:w-full h-10 border-black/30 outline-none px-2.5 border-2"
            id=""
            defaultValue=""
          >
            <option disabled value="">
              Selcet Category
            </option>
            {categories?.map((item) => {
              return (
                <option key={item._id} value={item._id}>
                  {item.name.en}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col w-full items-start justify-start gap-2 my-5">
          <label htmlFor="name" className="text-black font-medium">
            Brand of Product
          </label>
          <select
            name=""
            required
            defaultValue=""
            onChange={(e) => {
              setBrand(e.target.value);
            }}
            className="w-1/2 [@media(max-width:1050px)]:w-full h-10 border-black/30 outline-none px-2.5 border-2"
            id=""
          >
            <option disabled value="">
              Select Brands
            </option>
            {brands?.map((item) => {
              return (
                <option key={item._id} value={item._id}>
                  {item.name.en}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col w-full items-start justify-start gap-2 my-5">
          <label htmlFor="name" className="text-black font-medium">
            Weight of Product
          </label>
          <input
            type="number"
            required
            onChange={(e) => {
              setWeight(e.target.value);
            }}
            placeholder="Weight of Product"
            className="w-1/2 [@media(max-width:1050px)]:w-full h-10 border-black/30 outline-none px-2.5 border-2"
          />
        </div>
        <div className="flex flex-col w-full items-start justify-start gap-2 my-5">
          <label htmlFor="name" className="text-black font-medium">
            Dimensions of Product
          </label>
          <div className="grid grid-cols-3 [@media(max-width:1050px)]:flex [@media(max-width:1050px)]:flex-col items-start gap-5 w-full justify-start">
            <input
              type="number"
              required
              onChange={(e) => {
                setDimensions((prev) => ({ ...prev, length: e.target.value }));
              }}
              placeholder="lenght of Product"
              className="w-full h-10 border-black/30 outline-none px-2.5 border-2"
            />
            <input
              type="number"
              required
              onChange={(e) => {
                setDimensions((prev) => ({ ...prev, width: e.target.value }));
              }}
              placeholder="width of Product"
              className="w-full h-10 border-black/30 outline-none px-2.5 border-2"
            />
            <input
              type="number"
              onChange={(e) => {
                setDimensions((prev) => ({ ...prev, height: e.target.value }));
              }}
              required
              placeholder="height of Product"
              className="w-full h-10 border-black/30 outline-none px-2.5 border-2"
            />
          </div>
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
