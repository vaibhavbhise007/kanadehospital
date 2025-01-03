import { createSlice} from '@reduxjs/toolkit';
import { sendContactFormData } from '../actions/contactAction';


const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetStatus: (state) => {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactFormData.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(sendContactFormData.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(sendContactFormData.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export const { resetStatus } = contactSlice.actions;
export default contactSlice.reducer;
