import {createAsyncThunk} from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { settings } from '../settings';

const initialState = {
  loading: false,
  error:'',
  data: {}
}

export const fetchTickets = createAsyncThunk("tickets/fetchTickets", ()=>{
  return axios.get(settings.apis.tickets)
          .then(response=>response.data)
})

const ticketSlice = createSlice({
  name:'tickets',
  initialState,
  reducers:{},
  extraReducers: (builder)=>{
    builder.addCase(fetchTickets.pending, (state)=>{
      state.loading = true;
    });
    builder.addCase(fetchTickets.fulfilled, (state, action)=>{
      state.loading = false;
      state.error = '';
      state.data = action.payload;
    });
    builder.addCase(fetchTickets.rejected, (state, action)=>{
      state.loading = false;
      state.error = action.error ? action.error.message : 'Something went wrong';
      state.data = [];
    })
  }
})

export default ticketSlice.reducer;