// sto// store.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const SetId = create(
  persist(
    (set) => ({
      id: false,
      setId: (id) => set(() => ({ id: id })),
    }),
    {
      name: "set-id-storage", // اسم المفتاح في localStorage
      getStorage: () => localStorage, // التخزين المستخدم (localStorage افتراضي)
    }
  )
);
export default SetId;
