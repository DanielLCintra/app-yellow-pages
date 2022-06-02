import axios from "axios";

export const contactsApi = axios.create({
  baseURL: "https://yellow-pages-api.herokuapp.com/",
});
