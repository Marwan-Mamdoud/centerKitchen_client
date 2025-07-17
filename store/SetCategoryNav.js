// store.js
import { create } from "zustand";

const setCategoryMenu = create((set) => ({
  status: false,
  show: () => set(() => ({ status: true })),
  hide: () => set(() => ({ status: false })),
}));

export default setCategoryMenu;
