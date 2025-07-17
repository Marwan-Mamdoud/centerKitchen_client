import axios from "axios";
import { API } from "./CreateApi";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import setProductsToCart from "@/store/setProductsToCart";

//======================================================================================================
//======================================================================================================
//======================================================================================================
//=======PRODUCTS==============================PRODUCTS===============PRODUCTS==========================

export const getAllProducts = async () => {
  try {
    const result = await API.get("products/getProducts");
    if (result.data.status) {
      // toast.success(result.data.message, { theme: "colored" });
      return result.data.products;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const addProduct = async (data) => {
  try {
    const result = await API.post("products/addProduct", data);
    if (result.data.status) {
      toast.success(result.data.message, { theme: "colored" });
      return result.data.product;
    }
    // return;
  } catch (error) {
    if (error.code == "E11000") {
      toast.error("This Code has been Reserved To another product.", {
        theme: "colored",
      });
      return false;
    }
    // console.log(error);

    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const getProduct = async (code) => {
  try {
    const result = await API.get(`/products/getProduct/${code}`);
    if (result.data.status) {
      if (result.data.product == null) {
        toast.warn("There is no product has that code.", {
          theme: "colored",
        });
        // return;
      }
      // toast.success(result.data.message, { theme: "colored" });
      return result.data;
    }
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const getProductById = async (id) => {
  try {
    const result = await API.get(`/products/getProductById/${id}`);
    if (result.data.status) {
      if (result.data.product == null) {
        toast.warn("There is no product has that Id.", {
          theme: "colored",
        });
        // return;
      }
      // toast.success(result.data.message, { theme: "colored" });
      return result.data.product;
    }
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const editProduct = async ({ data, id }) => {
  try {
    const result = await API.put(`/products/editProduct/${id}`, data);
    if (result.data.status) {
      toast.success(result.data.message, { theme: "colored" });
      return result.data.product;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const deleteProduct = async (code) => {
  try {
    const result = await API.delete(`/products/deleteProduct/${code}`);
    if (result.data.status) {
      return toast.success(result.data.message, { theme: "colored" });
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

//======================================FILTER=====================FILTER======================================
//======================================FILTER=====================FILTER=====================================

export const getProductByCategory = async (category) => {
  try {
    const result = await API.get(`/products/getproducts/${category}`);
    if (result.data.status) {
      // toast.success(result.data.message, { theme: "colored" });
      return result.data.products;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const getNewProducts = async () => {
  try {
    const result = await API.get("products/getNewProducts");
    if (result.data.status) {
      // toast.success(result.data.message, { theme: "colored" });
      return result.data.products;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const getRelatedProducts = async (id) => {
  try {
    const result = await API.get(`products/getRelatedProduct/${id}`);
    if (result.data.status) {
      // toast.success(result.data.message, { theme: "colored" });
      return result.data.products;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    // console.log("error get related products", error);
    return false;
  }
};

export const getNumberOfProductsInCategory = async (id) => {
  try {
    const result = await API.get(
      `/products/getNumberOfProductsInCategory/${id}`
    );
    if (result.data.status) {
      // return toast.success(result.data.message, { theme: "colored" });
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const getProductsInSale = async () => {
  try {
    const result = await API.get("/products/getProductsInSale");
    if (result.data.status) {
      // toast.success(result.data.message, { theme: "colored" });
      return result.data.products;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const getProductsBySearch = async (term) => {
  try {
    const result = await API.get(
      `/products/getProductsBySearch?search=${term}`
    );
    if (result.data.status) {
      return result.data.products;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

//======================================================================================================
//======================================================================================================
//======================================================================================================
//=======categories==============================categories===============categories==========================

export const addCategories = async (data) => {
  try {
    const result = await API.post("categories/addCategory", data);
    if (result.data.status) {
      toast.success(result.data.message, { theme: "colored" });
      return result.data.category;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const getCategories = async () => {
  try {
    const result = await API.get("/categories/getCategories");
    if (result.data.status) {
      // toast.success(result.data.message, { theme: "colored" });
      return result.data.categories;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const getCategoryByName = async (name) => {
  try {
    const result = await API.get(`/categories/getCategory/${name}`);
    if (result.data.status) {
      if (result.data.category == null) {
        toast.warn("Thers is no Category has that name.", { theme: "colored" });
        // return;
      } else {
        // toast.success(result.data.message, { theme: "colored" });
        return result.data;
      }
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const editCategory = async ({ data, id }) => {
  try {
    const result = await API.put(`/categories/editCategory/${id}`, data);
    if (result.data.status) {
      toast.success(result.data.message, { theme: "colored" });
      return result.data.category;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const deleteCategory = async (name) => {
  try {
    const result = await API.delete(`/categories/deleteCategory/${name}`);
    if (result.data.status) {
      return toast.success(result.data.message, { theme: "colored" });
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

//======================================================================================================
//======================================================================================================
//======================================================================================================
//=======Brands==============================Brands===============Brands==========================

export const addBrands = async (data) => {
  try {
    if (!data) return toast.warning("add data", { theme: "colored" });
    const result = await API.post("/brands/addBrand", data);
    if (result.data.status) {
      toast.success(result.data.message, { theme: "colored" });
      return result.data.brand;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const getBrands = async () => {
  try {
    const result = await API.get("/brands/getBrands");
    if (result.data.status) {
      // toast.success(result.data.message, { theme: "colored" });
      return result.data.brands;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const getBrandByName = async (name) => {
  try {
    const result = await API.get(`/brands/getBrand/${name}`);
    if (result.data.status) {
      if (result.data.brand == null) {
        toast.warn("There is no brand has that name.", {
          theme: "colored",
        });
        // return;
      }
      // toast.success(result.data.message, { theme: "colored" });
      return result.data;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const editBrand = async ({ data, id }) => {
  try {
    const result = await API.put(`/brands/editBrand/${id}`, data);
    if (result.data.status) {
      toast.success(result.data.message, { theme: "colored" });
      return result.data.brand;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const deleteBrand = async (name) => {
  try {
    const result = await API.delete(`/brands/deleteBrand/${name}`);
    if (result.data.status) {
      return toast.success(result.data.message, { theme: "colored" });
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

//======================================================================================================
//======================================================================================================
//======================================================================================================
//=======Banners==============================Banners===============Banners==========================

export const getBanners = async () => {
  try {
    const result = await API.get("/Banners/getBanners");
    if (result.data.status) {
      // toast.success(result.data.message, { theme: "colored" });
      return result.data.banners;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const addBanner = async (data) => {
  try {
    const result = await API.post("/Banners/addBanner", data);
    if (result.data.status) {
      toast.success(result.data.message, { theme: "colored" });
      return result.data.banner;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const deleteBanner = async (id) => {
  try {
    const result = await API.delete(`/Banners/deleteBanner/${id}`);
    if (result.data.status) {
      return toast.success(result.data.message, { theme: "colored" });
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

//======================================================================================================
//======================================================================================================
//======================================================================================================
//=======Innovations==============================Innovations===============Innovations==========================

export const addInnovation = async (data) => {
  try {
    const result = await API.post("/Innovations/addInnovation", data);
    if (result.data.status) {
      toast.success(result.data.message, { theme: "colored" });
      return result.data.innovation;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const getInnovations = async () => {
  try {
    const result = await API.get("/Innovations/getInnovations");
    if (result.data.status) {
      // toast.success(result.data.message, { theme: "colored" });
      return result.data.innovations;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const getInnovationsLimiy = async () => {
  try {
    const result = await API.get("/Innovations/getInnovationsLimit");
    if (result.data.status) {
      // toast.success(result.data.message, { theme: "colored" });
      return result.data.innovations;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const deleteInnovation = async (id) => {
  try {
    const result = await API.delete(`/Innovations/deleteInnovation/${id}`);
    if (result.data.status) {
      return toast.success(result.data.message, { theme: "colored" });
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

//======================================================================================================
//======================================================================================================
//======================================================================================================
//=======ImageHeader==============================ImageHeader===============ImageHeader==========================

export const getImageHeaders = async () => {
  try {
    const result = await API.get("/ImageHeaders/getImageHeaders");
    if (result.data.status) {
      // toast.success(result.data.message, { theme: "colored" });
      return result.data.imageHeaders;
    }
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const addImageHeaders = async (data) => {
  try {
    const result = await API.post("/ImageHeaders/addImageHeader", data);
    if (result.data.status) {
      toast.success(result.data.message, { theme: "colored" });
      return result.data.imageHeader;
    }
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const deleteImageHeader = async (id) => {
  try {
    const result = await API.delete(`/ImageHeaders/deleteImageHeader/${id}`);
    if (result.data.status) {
      return toast.success(result.data.message, { theme: "colored" });
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

//======================================================================================================
//======================================================================================================
//======================================================================================================
//=======USERS=================================USERS==================USERS==============================

export const loginWithGoogle = async (token) => {
  try {
    const result = await API.post("/Users/login/google", token);
    if (result.data.status) {
      // console.log(`User:`, result.data.user);
      toast.success(result.data.message, { theme: "colored" });
      return result.data.user;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const LoginWithEmailandPassword = async ({ email, password }) => {
  try {
    const result = await API.post("/Users/login/WithEmailAndPassword", {
      email,
      password,
    });
    if (result.data.status) {
      // console.log(`User:`, result.data);
      toast.success(result.data.message, { theme: "colored" });
      return result.data.user;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const Rigester = async ({ name, email, password }) => {
  try {
    const result = await API.post("/Users/register", { name, email, password });
    if (result.data.status) {
      // console.log(`User:`, result.data);
      toast.success(result.data.message, { theme: "colored" });
      return result.data.user;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const Vefiry = async () => {
  try {
    const result = await API.post(
      "/Users/verify",
      {},
      { withCredentials: true }
    );
    // console.log(result, "verify");

    if (result.data.status) {
      return true;
    }
    toast.warn(result.data.error, { theme: "colored" });
    return false;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const EditUserInfo = async (user) => {
  try {
    const result = await API.put("/Users/edit", user);
    if (result.data.status) {
      toast.success(result.data.message, { theme: "colored" });
      return result.data.user;
    }
    return result.data.user;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const Logout = async () => {
  try {
    const result = await API.post("/Users/logout");
    if (result.data.status) {
      toast.success(result.data.message, { theme: "colored" });
      return true;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const Checkout = async ({ items, totalAmount }) => {
  try {
    const stripePromise = loadStripe(
      "pk_test_51OjCv7GFLxJyq56infvpNtL7oMxUDZxv8e8cSRwJLWmJNPT4334GXUdF46AFBpGckFERGiaV7cqwnfFjxvN9oHRr00yVkxU1wX"
    );
    const stripe = await stripePromise;
    const result = await API.post("/checkout", { items, totalAmount });
    if (result.data.id) {
      await stripe.redirectToCheckout({ sessionId: result.data.id });
      return toast.success(result.data.message);
    }
  } catch (error) {
    // console.log("Error", error);
    toast.error(error?.response?.data.message, { theme: "colored" });
    return false;
  }
};

export const ForgetPassword = async (email) => {
  try {
    const result = await API.post("/Users/ForgetPass", { email });
    if (result.data.status) {
      // console.log(result.data);
      toast.success(result.data.message, { theme: "colored" });
      return result.data;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};

export const ResetPassword = async ({ token, password, passwordConfirm }) => {
  try {
    const result = await API.post("/Users/ResetPass", {
      token,
      password,
      passwordConfirm,
    });
    if (result.data.status) {
      // console.log(result.data);
      toast.success(result.data.message, { theme: "colored" });
      return true;
    }
    // return;
  } catch (error) {
    toast.error(error?.response?.data.error, { theme: "colored" });
    return false;
  }
};
