import { configureStore } from "@reduxjs/toolkit"
import RegisterSlice from "../Splice/Company/RegisterSlice"



export const Store = configureStore({
    reducer:{
        RegisterSlice
    }
})