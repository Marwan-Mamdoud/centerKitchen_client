// store.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const SetBillingAddress = create(
  persist(
    (set) => ({
      BillingAddress: false,
      setAddress: (address) => set({ BillingAddress: address }),
      deleteAddressBilling: () => set({ BillingAddress: false }),
    }),
    {
      name: "AddressBilling", // ده المفتاح اللي هيتخزن بيه البيانات في localStorage
      getStorage: () => localStorage, // نحدد إننا هنستخدم localStorage
    }
  )
);

export default SetBillingAddress;
