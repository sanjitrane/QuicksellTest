import { createSlice } from "@reduxjs/toolkit"

const orderState = localStorage.getItem('orderState')

const initialState = {
  orderBy:  orderState || 'Priority'
}

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers:{
    setOrder:(state, action)=>{
      state.orderBy = action.payload;
    }
  }
})

export default orderSlice.reducer;
export const {setOrder} = orderSlice.actions;