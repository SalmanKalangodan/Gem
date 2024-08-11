import { configureStore } from "@reduxjs/toolkit"
import RegisterSlice from "../Splice/Company/RegisterSlice"
import LoginSlice from '../Splice/Company/LoginSlice'


export const Store = configureStore({
    reducer:{
        RegisterSlice,
        LoginSlice
    }
})