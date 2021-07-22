import axios from "axios";

export const applyMove = (id, cellPosition) => {
  return axios
    .put(`${process.env.REACT_APP_BASE_URL}games/${id}/play`, {
      move: cellPosition,
    })
    .then((response) => response.data)
};
