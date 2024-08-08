import {createSlice} from "@reduxjs/toolkit"
import { Register } from "../../Thunk/company/Registerthunk"
import { toast } from "react-toastify"



export const RegisterSlice = createSlice({
    name : "Register",
    initialState :{
        isLoding : false,
        data : undefined,
        error:undefined
    },
    reducers:{},
    extraReducers(builder) {
        builder.addCase(Register.pending , (state)=>{
            state.isLoding =true
        })
        builder.addCase(Register.fulfilled , (state, action)=>{
            state.data = action.payload
            state.isLoding =false
            toast.success(action.payload)
            console.log(action.payload);
        })
        builder.addCase(Register.rejected , (state ,action)=>{
            console.log(action.error);
            
            state.error = state.error
            state.isLoding =false
            toast.error("error")
        })
    },
})


export default RegisterSlice.reducer