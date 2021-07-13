import axios from "axios";

export const getTranslations = (lang) => {
  return axios
    .post("http://localhost:3000/games/1/translate", {
      language: lang,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};
