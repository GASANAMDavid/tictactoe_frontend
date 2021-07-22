import axios from "axios";

const BASE_URL=process.env.BASE_URL;

export const applyMove = (id, cellPosition) => {
  return axios
    .put(`${BASE_URL}games/${id}/play`, {
      move: cellPosition,
    })
    .then((response) => response.data)
};
