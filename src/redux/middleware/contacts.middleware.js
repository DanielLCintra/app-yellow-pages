import {
  initLoading,
  endLoading,
  setError,
  unsetError,
  setSuccess,
  unsetSuccess,
} from "../slices/generics.slice";
import { contactsApi } from "../api/http";
import { setContacts } from "../slices/contacts.slice";

export const getContacts = () => {
  return async (dispatch) => {
    dispatch(initLoading());
    try {
      let response = await contactsApi.get("contacts");
      if (response.status === 200 || response.status === 201) {
        dispatch(setContacts({ contacts: response.data.data }));
        dispatch(unsetError());
        dispatch(
          setSuccess({
            message: response.data.message,
          })
        );
      } else {
        dispatch(unsetSuccess());
        dispatch(setError({ message: "There is one or more errors." }));
      }

      dispatch(endLoading());
    } catch (error) {
      dispatch(unsetSuccess());
      dispatch(
        setError({
          message: error.message,
        })
      );
      dispatch(endLoading());
    }
  };
};
