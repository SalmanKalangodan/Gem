import { configureStore } from "@reduxjs/toolkit"
import RegisterSlice from "../Splice/Company/RegisterSlice"
import LoginSlice from '../Splice/Company/LoginSlice'
import ItemsSlice  from "../Splice/Company/ItemsSlice"


export const Store = configureStore({
    reducer:{
        RegisterSlice,
        LoginSlice,
        ItemsSlice,
    }
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;