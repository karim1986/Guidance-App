import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import interesstedService from "./interesstedServices";

const initialState = {
  interesstedIn: [],
  isErrorI: false,
  isSuccessI: false,
  isLoadingI: false,
  messageI: "",
};

export const interesstedEvents = createAsyncThunk(
  "interessted/events",
  async (eventId, interesstedIn, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token;
      return await interesstedService.interesstedEvents(eventId, interesstedIn);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const interesstedSlice = createSlice({
  name: "interesstedEvents",
  initialState,
  reducers: {
    resetInteressted: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(interesstedEvents.pending, (state) => {
        state.isLoadingI = true;
      })
      .addCase(interesstedEvents.fulfilled, (state, action) => {
        state.isLoadingI = false;
        state.isSuccessI = true;
        // state.interesstedIn.push(action.payload);
      })
      .addCase(interesstedEvents.rejected, (state, action) => {
        state.isLoadingI = false;
        state.isErrorI = true;
        state.messageI = action.payload;
      });
  },
});

export const { resetInteressted } = interesstedSlice.actions;
export default interesstedSlice.reducer;
