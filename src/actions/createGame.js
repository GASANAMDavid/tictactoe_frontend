import axios from "axios";

const BASE_URL=process.env.BASE_URL;

export const createGame = (parameters) => {

  return axios.post(`${BASE_URL}games`, {
    language: parameters['language'],
    player_name: parameters['playerName'],
    board_size: parameters['boardSize'],
    symbol: parameters['symbol'],
    game_mode: parameters['gameMode']
  }).then((response) => response.data)
    .catch((error) => console.log(error.message))
};
