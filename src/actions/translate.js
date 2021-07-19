import axios from "axios";
import BASE_URL from '../environment'

export const getTranslations = (lang) => {
  return axios
    .get(`${BASE_URL}translations/${lang}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};
