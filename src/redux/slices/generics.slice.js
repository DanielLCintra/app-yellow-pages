import { createSlice } from "@reduxjs/toolkit";

const genericsSlice = createSlice({
  name: "generic",
  initialState: {
    loading: false,
    error: false,
    success: false,
    icon: "AlertCircle",
    text: "",
    button: {
      label: "Voltar",
      action: "",
    },
    picture: { id: null, dados: null, type: null },
    reload: false,
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

    setReload: {
      reducer(state, action) {
        state.reload = action.payload.reload;
      },
      prepare(reload) {
        return { payload: { reload } };
      },
    },

    unsetSuccess: (state, action) => {
      state.success = false;
    },

    setPicture: {
      reducer(state, action) {
        state.picture = action.payload.picture;
      },
      prepare(picture) {
        return { payload: { picture } };
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
