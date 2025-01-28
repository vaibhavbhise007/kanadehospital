import { createSlice } from "@reduxjs/toolkit";
import { fetchTreatments } from "../actions/treatmentAction";

const initialState = {
  treatments: [],
  loading: false,
  error: null,
};

const treatmentSlice = createSlice({
  name: "treatment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTreatments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTreatments.fulfilled, (state, action) => {
        state.loading = false;
        state.treatments = action.payload;
      })
      .addCase(fetchTreatments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default treatmentSlice.reducer;
