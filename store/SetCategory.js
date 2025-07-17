// store.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const SetCategory = create(
  persist(
    (set) => ({
      category: false,
      setCategory: (category) => set(() => ({ category: category })),
    }),
    {
      name: "category-storage", // اسم المفتاح في localStorage
      getStorage: () => localStorage, // نوع التخزين
    }
  )
);

export default SetCategory;
