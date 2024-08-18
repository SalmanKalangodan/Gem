import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Create_Items, GetItems, GetPid } from "../../Thunk/company/ItemsThunk";

export interface DataState {
    isLoading: boolean;
    data: any[];  // Adjust the type here based on your actual data structure
    pr_id: number;
    error?: string; // or Error depending on your use case
}

const initialState: DataState = {
    isLoading: false,
    data: [],
    pr_id: 0,
    error: undefined
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetPid.pending, (state) => {
        state.isLoading = true;
      })
      builder.addCase(GetPid.fulfilled, (state, action: PayloadAction<{ pr_id: number }>) => {
        state.pr_id = action.payload.pr_id;
        state.isLoading = false;
    })
      .addCase(GetPid.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(Create_Items.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Create_Items.fulfilled, (state) => {
        // state.data = action.payload.product;
        state.isLoading = false;
      })
      .addCase(Create_Items.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
     builder.addCase(GetItems.pending , (state)=>{
        state.isLoading = true
     })
     .addCase(GetItems.fulfilled, (state , action)=>{
        state.data = action.payload
        state.isLoading = false
     })
     .addCase(GetItems.rejected , (state, action)=>{
        state.error = action.error.message
        state.isLoading = false
     })
  },
});

export default itemsSlice.reducer;
