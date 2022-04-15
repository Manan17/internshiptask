import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    isToggle: false,
  },
  reducers: {
    toggleState: (state, action) => {
      state.isToggle = action.payload.task;
    },
  },
});

export const { toggleState } = toggleSlice.actions;
export const selectToggle = (state) => state.isToggle;
export default toggleSlice.reducer;
