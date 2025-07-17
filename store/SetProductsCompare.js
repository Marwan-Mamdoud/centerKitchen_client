// store.js
import { deleteProduct } from "@/lib/APIS";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const setProductsCompare = create(
  persist(
    (set) => ({
      productsCompare: [],
      setProductsCompare: (products) => set({ productsCompare: products }),
      addProductCompare: (product) =>
        set((state) => ({
          productsCompare: [...state.productsCompare, product],
        })),
      deleteProductCompare: (product) =>
        set((state) => ({
          productsCompare: state.productsCompare.filter(
            (item) => item.product._id !== product.product._id
          ),
        })),
    }),
    {
      name: "productsCompare", // ده المفتاح اللي هيتخزن بيه البيانات في localStorage
      getStorage: () => localStorage, // نحدد إننا هنستخدم localStorage
    }
  )
);

export default setProductsCompare;
