import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookTour: [],
};

export const tourSlices = createSlice({
  name: "addTour",
  initialState,
  reducers: {
    addTour(state, action) {
      state.bookTour.push({
        full_name: action.payload.userName,
        phone_number: action.payload.phoneNumber,
        number_of_people: action.payload.peopleCount,
        additional_comments: action.payload.commentToTrip,
      });
    },
  },
});

export const { addTour } = tourSlices.actions;

export default tourSlices.reducer;
