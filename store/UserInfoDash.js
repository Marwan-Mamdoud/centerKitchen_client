// store.js
import { deleteProduct } from "@/lib/APIS";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const setDashInfo = create(
  persist(
    (set) => ({
      status: false,
      setStatus: (status) => set({ status: status }),
    }),
    {
      name: "StatusInfo", // ده المفتاح اللي هيتخزن بيه البيانات في localStorage
      getStorage: () => localStorage, // نحدد إننا هنستخدم localStorage
    }
  )
);

export default setDashInfo;
