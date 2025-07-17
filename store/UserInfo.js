// store.js
import { deleteProduct } from "@/lib/APIS";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const setUserInfo = create(
  persist(
    (set) => ({
      user: false,
      setUser: (user) => set({ user: user }),
      deleteUser: () => set({ user: false }),
    }),
    {
      name: "UserInfo", // ده المفتاح اللي هيتخزن بيه البيانات في localStorage
      getStorage: () => localStorage, // نحدد إننا هنستخدم localStorage
    }
  )
);

export default setUserInfo;
