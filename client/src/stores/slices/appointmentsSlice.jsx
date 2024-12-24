import { createSlice } from '@reduxjs/toolkit';
import { fetchAppointments, updateAppointmentStatus } from '../actions/appointmentsAction'
const initialState = {
    appointments: [],
    loading: false,
    error: null,
};


const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAppointments.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAppointments.fulfilled, (state, action) => {
                state.loading = false;
                state.appointments = action.payload;
            })
            .addCase(fetchAppointments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch appointments';
            })
            .addCase(updateAppointmentStatus.fulfilled, (state, action) => {
                const index = state.appointments.findIndex((app) => app.id === action.payload.id);
                if (index !== -1) {
                    state.appointments[index] = action.payload;
                }
            });
    },
});

export default appointmentsSlice.reducer;
