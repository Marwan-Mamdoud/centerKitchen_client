// store.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const SetShippingAddress = create(
  persist(
    (set) => ({
      addressShipping: false,
      setAddress: (address) => set({ addressShipping: address }),
      deleteAddressShipping: () => set({ addressShipping: false }),
    }),
    {
      name: "AddressShipping", // ده المفتاح اللي هيتخزن بيه البيانات في localStorage
      getStorage: () => localStorage, // نحدد إننا هنستخدم localStorage
    }
  )
);

export default SetShippingAddress;
