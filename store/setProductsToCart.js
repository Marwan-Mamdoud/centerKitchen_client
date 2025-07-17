// store.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const setProductsToCart = create(
  persist(
    (set) => ({
      cart: [],
      deleteCart: () => set((state) => ({ cart: [] })),
      setProducts: (products) => set({ cart: products }),
      setCart: (cart) => set((state) => ({ cart: cart })),
      addProductToCart: (product) =>
        set((state) => ({ cart: [...state.cart, product] })),
      deleteProduct: (product) =>
        set((state) => ({
          cart: state.cart.filter((item) => product._id !== item._id),
        })),
    }),
    {
      name: "productsCart", // ده المفتاح اللي هيتخزن بيه البيانات في localStorage
      getStorage: () => localStorage, // نحدد إننا هنستخدم localStorage
    }
  )
);

export default setProductsToCart;
