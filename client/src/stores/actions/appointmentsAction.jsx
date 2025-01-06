import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAppointments = createAsyncThunk('appointments/fetchAppointments', async () => {
    const response = await fetch('/appointments');
    return response.json();
});

export const updateAppointmentStatus = createAsyncThunk(
    'appointments/updateStatus',
    async ({ id, status }) => {
        // const response = await fetch(`/api/appointments/${id}`, {
        //     method: 'PATCH',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ status }),
        // });
        return response.json();
    }
);