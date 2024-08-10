import {createAsyncThunk} from "@reduxjs/toolkit"
import { companies_axios } from "../../../config/axios/Company_axios";
import { toast } from "react-toastify";


interface Data {
    email : string;
    password : string;
 }


export const Logins = createAsyncThunk('company/login' , async({ email , password} : Data)=>{
    try{
    const res = await companies_axios.post(`/logins`,{ email , password})
    toast.success(res.data.message)
    return  res.data
    }catch(err){
      console.log(err);
      
    }
})