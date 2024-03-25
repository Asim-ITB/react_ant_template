import Cookies from "js-cookie";
import { create } from "zustand";
import lang from "../lang";

const langSwitch = (newLang) => {
  let langObject;
  if (newLang === "en") {
    langObject = lang.en.messages;
  } else if (newLang === "nep") {
    langObject = lang.nep.messages;
  } else {
    langObject = lang.en.messages;
  }
  return langObject;
};

const defaultLang = lang.en.messages;
const initialLang = langSwitch(Cookies.get("lang")) || defaultLang;
const useLangStore = create((set) => ({
  lang: initialLang,
  setLang: (newLang) => {
    set({ lang: langSwitch(newLang) });
    Cookies.set("lang", newLang);
  },
}));
export default useLangStore;
