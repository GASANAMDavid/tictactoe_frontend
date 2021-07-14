import axios from "axios";

export const getTranslations = (lang) => {
  return axios
    .get(`http://localhost:3000/translations/${lang}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};
