import { createAsyncThunk } from "@reduxjs/toolkit";
import { companies_axios } from "../../../config/axios/Company_axios";
import { toast } from "react-toastify";

interface Product {
    id: string;
    name: string;
    companyName: string;
    distributor: string;
    buyPrice: number;
    sellPrice: number;
    gstIncluded: boolean;
    gstPercentage: string;
    type : string
  }

export const GetPid = createAsyncThunk("/create/pid" , async ()=>{
    try {
        const res = await companies_axios.get('/create/prid')
        return res.data
    } catch (error) {
        console.log(error);
    }
})


export const Create_Items = createAsyncThunk("/create/items", async (product : Product)=>{
  const res =  await companies_axios.post('/create/items',product).then((res)=>{
        toast.success(res.data)
    }).catch((err)=>{
        toast.error(err.message)
    })
    return {product , res}
})


export const GetItems = createAsyncThunk('/get/items' , async ()=>{
    const res = await companies_axios.get('/getitems')
    return res.data
})