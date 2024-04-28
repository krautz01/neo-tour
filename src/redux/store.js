import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./slices/todoSlices";

export const store = configureStore({
  reducer: {
    addTour: addReducer,
  },
});
