import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {AppDispatch, RootState} from "app/providers/StoreProvider/index"

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;