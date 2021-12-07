import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

export const useCastomDispatch = () => useDispatch<AppDispatch>();
export const useCastomSelector: TypedUseSelectorHook<RootState> = useSelector