import { useContext } from "react";
import { CloseContext } from "./usecontext/CloseContext";

export const useClose =()=> useContext(CloseContext)