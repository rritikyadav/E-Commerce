"use client"; 

import { Provider } from "react-redux";
import  store from "@/redux/store.js";

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
