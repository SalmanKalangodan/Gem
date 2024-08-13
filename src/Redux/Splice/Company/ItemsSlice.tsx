import {createSlice} from "@reduxjs/toolkit"
import { Create_Items, GetPid } from "../../Thunk/company/ItemsThunk"




const Items = createSlice({
    name : 'items',
    initialState : {
        isLoading : false,
        data : [],
        pr_id : 0,
        error : undefined
    },
    reducers:{},
    extraReducers(builder){
        builder.addCase(GetPid.pending, (state)=>{
            state.isLoading = true
        })
        builder.addCase(GetPid.fulfilled, (state,action)=>{
            state.pr_id = action.payload.pr_id
            state.isLoading = false
        })
        builder.addCase(Create_Items.pending,(state)=>{
           state.isLoading = true
        })
        builder.addCase(Create_Items.fulfilled, ()=>{
            
        })
    }
})


export default Items.reducer