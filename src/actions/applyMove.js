import axios from "axios";

export const applyMove = (id, cellPosition) => {
  return axios
    .put(`http://localhost:3000/games/${id}/play`, {
      move: cellPosition,
    })
    .then((response) => response.data)
};
