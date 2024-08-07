import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

interface Data {
   name : string;
   email : string;
   password : string;
}
export const Register = createAsyncThunk('company/registers' , async({name, email , password} : Data)=>{
    const res = await axios.post(`http://localhost:5050/api/companies/registers`,{name, email , password})
    return  res.data
})