import { createAsyncThunk } from '@reduxjs/toolkit';
import { POST, GET } from "../../utils/http";
import { handleError } from "../../utils/error";


export const fetchTreatments = createAsyncThunk('treatment/fetchTreatment', async (_, { rejectWithValue }) => {
    try {
            const { response, json } = await GET("/treatments");
                  if (response.status === 200) {
                      return json;
                  }
                  return rejectWithValue(handleError(json));
              } catch (error) {
                  return rejectWithValue(handleError(error));
              }
});
