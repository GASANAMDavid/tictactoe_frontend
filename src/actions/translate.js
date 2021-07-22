import axios from "axios";

export const getTranslations = (lang) => {
  return axios
    .get(`${process.env.REACT_APP_BASE_URL}translations/${lang}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};
