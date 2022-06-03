import { createSlice } from "@reduxjs/toolkit";

const genericsSlice = createSlice({
  name: "generic",
  initialState: {
    loading: false,
    error: false,
    success: false,
  },
  reducers: {
    initLoading: (state, action) => {
      state.loading = true;
    },

    endLoading: (state, action) => {
      state.loading = false;
    },

    setError: {
      reducer(state, action) {
        state.error = action.payload.message;
        state.text = action.payload.text;
        state.icon = action.payload.icon;
        state.button = action.payload.button;
      },
      prepare({ message, text, icon, button }) {
        return { payload: { message, text, icon, button } };
      },
    },

    unsetError: (state, action) => {
      state.error = false;
    },

    setSuccess: {
      reducer(state, action) {
        state.success = action.payload.message;
        state.text = action.payload.text;
        state.icon = action.payload.icon;
        state.button = action.payload.button;
      },
      prepare({ message, text, icon, button }) {
        return { payload: { message, text, icon, button } };
      },
    },
  },
});

export const {
  initLoading,
  endLoading,
  setError,
  unsetError,
  setSuccess,
  unsetSuccess,
  setPicture,
  setReload,
} = genericsSlice.actions;

export default genericsSlice.reducer;
