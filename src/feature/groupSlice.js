import { createSlice } from "@reduxjs/toolkit";

const groupState = localStorage.getItem('groupState')

const initialState = {
  status: groupState || 'Status'
}

const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers:{
    selectGroup: (state, action)=>{
      state.status = action.payload
    }
  }
})

export default groupSlice.reducer;
export const {selectGroup} = groupSlice.actions;