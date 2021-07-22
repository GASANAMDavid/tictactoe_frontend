import axios from "axios";
import BASE_URL from '../environment'

export const applyMove = (id, cellPosition) => {
  return axios
    .put(`${BASE_URL}games/${id}/play`, {
      move: cellPosition,
    })
    .then((response) => response.data)
};
