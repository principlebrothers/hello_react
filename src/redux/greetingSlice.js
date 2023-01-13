import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreetings = createAsyncThunk(
  'greetings/fetchGreetings',
  async () => {
    const response = await fetch('https://bike-web.herokuapp.com/api/v1/bikes');
    const greeting = await response.json();
    return greeting;
  });

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: [],
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.fulfilled, (_state, action) => action.payload);
  }
});

export default greetingSlice.reducer;
