import { createContext } from "react";
import type { ThemeProviderState } from "../../types/interface";

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);
