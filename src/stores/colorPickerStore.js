import Cookies from "js-cookie";
import { create } from "zustand";

const defaultPrimary = "rgba(158,167,179, 0.6)";
const defaultSecondary = "rgba(158,167,179, 0.3)";
const defaultAccent = "rgba(158,167,179, 0.1)";

const initialPrimary = Cookies.get("primary") || defaultPrimary;
const initialSecondary = Cookies.get("secondary") || defaultSecondary;
const initialAccent = Cookies.get("accent") || defaultAccent;

const useColorPickerStore = create((set) => ({
  primaryColor: initialPrimary,
  secondaryColor: initialSecondary,
  accentColor: initialAccent,

  setPrimaryColor: (color) => set({ primaryColor: color }),
  setSecondaryColor: (color) => set({ secondaryColor: color }),
  setAccentColor: (color) => set({ accentColor: color }),
}));
export default useColorPickerStore;
