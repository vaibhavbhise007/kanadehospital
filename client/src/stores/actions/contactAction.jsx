import { createAsyncThunk } from '@reduxjs/toolkit';
import { POST, GET } from "../../utils/http";
import { handleError } from "../../utils/error";

// Async thunk for sending contact form data to the database
export const sendContactFormData = createAsyncThunk(
    'contact/sendContactFormData',
    async (formData, { rejectWithValue }) => {
      try {
        const { response, json } = await POST("/contacts", formData);
              if (response.status === 201) {
                  return json;
              }
              return rejectWithValue(handleError(json));
          } catch (error) {
              return rejectWithValue(handleError(error));
          }
    }
    
  );
  
      