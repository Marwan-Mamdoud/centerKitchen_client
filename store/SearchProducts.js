// store.js
import { deleteProduct } from "@/lib/APIS";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const SetProductSearch = create(
  persist(
    (set) => ({
      productsSearch: [],
      setProductsSearch: (products) => set({ productsSearch: products }),
      addProduct: (product) =>
        set((state) => ({ products: [...state.productsSearch, product] })),
      deleteProduct: (product) =>
        set((state) => ({
          products: state.products.filter(
            (item) => item.product._id !== product.product._id
          ),
        })),
    }),
    {
      name: "productsSearch", // ده المفتاح اللي هيتخزن بيه البيانات في localStorage
      getStorage: () => localStorage, // نحدد إننا هنستخدم localStorage
    }
  )
);

export default SetProductSearch;
