import { configureStore } from "@reduxjs/toolkit";

import bookSlice from "./bookSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: { books: bookSlice.reducer, cart: cartSlice.reducer },
});

export default store;
