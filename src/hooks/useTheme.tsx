import { useContext } from "react";
import { ThemeContext } from "./usecontext/ThemeContext";

export const useTheme =()=> useContext(ThemeContext)