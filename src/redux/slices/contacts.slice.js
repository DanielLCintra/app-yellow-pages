import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { listContacts: [], filteredListOfContacts: [] },
  reducers: {
    setContacts: (state, action) => {
      state.listContacts = action.payload.contacts;
    },

    setFilteredListOfContacts: (state, action) => {
      state.filteredListOfContacts = action.payload.filteredListOfContacts;
    },
  },
});

export const { setContacts, setFilteredListOfContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
