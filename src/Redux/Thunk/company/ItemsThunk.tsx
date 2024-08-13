import { createAsyncThunk } from "@reduxjs/toolkit";
import { companies_axios } from "../../../config/axios/Company_axios";
import { toast } from "react-toastify";

export const GetPid = createAsyncThunk("/create/pid" , async ()=>{
    try {
        const res = await companies_axios.get('/create/prid')
        return res.data
    } catch (error) {
        console.log(error);
    }
})


export const Create_Items = createAsyncThunk("/create/items", async (data)=>{
  const res =  await companies_axios.post('/create/items',data).then((res)=>{
        toast.success(res.data)
    }).catch((err)=>{
        toast.error(err.message)
    })
    return {data , res}
})


export const GetItems = createAsyncThunk('/get/items' , async ()=>{
    const res = await companies_axios.get('/getitems')
    return res.data
})