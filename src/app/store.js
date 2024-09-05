import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "../feature/ticketSlice";
import groupReducer from "../feature/groupSlice";
import orderReducer from "../feature/orderSlice";

export const store = configureStore({
  reducer:{
    tickets: ticketsReducer,
    group: groupReducer,
    order: orderReducer
  }
})
