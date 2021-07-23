import axios from "axios";

export const resetBoard = (id) => {
  return axios
    .put(`${process.env.REACT_APP_BASE_URL}games/${id}/reset`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};
