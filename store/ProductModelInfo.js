// store.js
import { create } from "zustand";

const SetModelProductInfo = create((set) => ({
  productInfo: {},
  setProductInfo: ({ link, product }) =>
    set(() => ({
      productInfo: {
        link,
        product,
      },
    })),
}));

export default SetModelProductInfo;
