import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import eventsServices from "./eventsServices";

const initialState = {
  events: [],
  isErrorE: false,
  isSuccessE: false,
  isLoadingE: false,
  messageE: "",
};

export const createEvent = createAsyncThunk(
  "events/createEvent",
  async (eventsData, thunkAPI) => {
    try {
      return await eventsServices.createEvent(eventsData);
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

//get user posts
export const getEvents = createAsyncThunk(
  "events/getEvents",
  async (_, thunkAPI) => {
    try {
      return await eventsServices.getEvents();
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

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    resetEvent: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createEvent.pending, (state) => {
        state.isLoadingE = true;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.isLoadingE = false;
        state.isSuccessE = true;
        state.events.push(action.payload);
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.isLoadingE = false;
        state.isErrorE = true;
        state.messageE = action.payload;
      })
      .addCase(getEvents.pending, (state) => {
        state.isLoadingE = true;
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.isLoadingE = false;
        state.isSuccessE = true;
        state.events = action.payload;
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.isLoadingE = false;
        state.isErrorE = true;
        state.messageE = action.payload;
      });
  },
});

export const { resetEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
