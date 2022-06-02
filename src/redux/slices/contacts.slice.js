import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { listContacts: [] },
  reducers: {
    setContacts: (state, action) => {
      state.listContacts = action.payload.contacts;
    },
  },
});

export const { setContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
