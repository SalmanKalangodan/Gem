import {createAsyncThunk} from "@reduxjs/toolkit"
import { companies_axios } from "../../../config/axios/Company_axios";
import { toast } from "react-toastify";

interface Data {
   name : string;
   email : string;
   password : string;
}
export const Register = createAsyncThunk('company/registers' , async({name, email , password} : Data)=>{
    const res = await companies_axios.post(`/registers`,{name, email , password})
    toast.success(res.data.message)
    return  res.data
})