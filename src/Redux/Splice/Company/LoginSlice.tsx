import {createSlice} from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { Logins } from "../../Thunk/company/LoginThunk"



export const LoginSlice = createSlice({
    name : "Register",
    initialState :{
        isLoding : false,
        data : undefined,
        error:undefined
    },
    reducers:{

    },
    extraReducers(builder) {
        builder.addCase(Logins.pending , (state)=>{
            state.isLoding =true
        })
        builder.addCase(Logins.fulfilled , (state, action)=>{
            localStorage.setItem("accessToken", action.payload.token)
            state.data = action.payload
            state.isLoding =false
            toast.success(action.payload)
            console.log(state.data);
            
        })
        builder.addCase(Logins.rejected , (state )=>{    
            state.error = state.error
            state.isLoding =false
            toast.error("error")
        })
    },
})


export default LoginSlice.reducer