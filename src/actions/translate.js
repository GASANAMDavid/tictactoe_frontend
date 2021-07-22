import axios from "axios";

const BASE_URL=process.env.BASE_URL;

export const getTranslations = (lang) => {
  return axios
    .get(`${BASE_URL}translations/${lang}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};
