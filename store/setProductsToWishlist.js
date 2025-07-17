// store.js
import { deleteProduct } from "@/lib/APIS";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const SetProductsToWishlist = create(
  persist(
    (set) => ({
      products: [],
      setProducts: (products) => set({ products: products }),
      addProduct: (product) =>
        set((state) => ({ products: [...state.products, product] })),
      deleteProduct: (product) =>
        set((state) => ({
          products: state.products.filter(
            (item) => item.product._id !== product.product._id
          ),
        })),
    }),
    {
      name: "productsWishlist", // ده المفتاح اللي هيتخزن بيه البيانات في localStorage
      getStorage: () => localStorage, // نحدد إننا هنستخدم localStorage
    }
  )
);

export default SetProductsToWishlist;
