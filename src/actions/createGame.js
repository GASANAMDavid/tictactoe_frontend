import axios from "axios";

export const createGame = (parameters) => {
  return axios.post("http://localhost:3000/games", {
    language: parameters['language'],
    player_name: parameters['playerName'],
    board_size: parameters['boardSize'],
    symbol: parameters['symbol'],
    game_mode: parameters['gameMode']
  }).then((response) => response.data)
    .catch((error) => console.log(error.message))
};
