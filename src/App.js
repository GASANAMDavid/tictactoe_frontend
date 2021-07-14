import React, { useState } from "react";
import CreateGame from "./components/CreateGame";
import { getTranslations } from "./actions/translate";
import { createGame } from "./actions/createGame";
import { applyMove } from "./actions/applyMove";
import Board from "./components/Board"

const App = () => {
  const [gameCreated, setGameCreated] = useState({
    id: null,
    board: [['-'],['-']]
  });

  const [gameInfo, setGameInfo] = useState({
    playerName: "",
    symbol: "",
    boardSize: 3,
    gameMode: 1,
    language: null,
  });

  const [translations, setTranslations] = useState({
    welcomeMessage: "Welcome to TicTacToe Game",
  });

  const getSelectedLanguageContent = (lang) => {
    getTranslations(lang).then((data) => {
      setTranslations(data);
    });
  };

  const handleCreateGame = () => {
    let id;
    let board;
    createGame(gameInfo).then((createdGame) => {
      setGameCreated((({ id, board } = createdGame), { id, board }));
    });
  };

  const handleCellClick = (cellPosition) => {
    applyMove(gameCreated.id, cellPosition).then((response) => {
      setGameCreated({ ...gameCreated, ...response})
    })
  }

  return (
    <div className='container'>
      {gameCreated.id ? (
        <div>
          <h3 className='header'>{translations.playGameHeader}</h3>
          <Board board={gameCreated.board} onCellClick = {handleCellClick}/>
        </div>
      ) : (
        <div>
          <h3 className='header'>{translations.welcomeMessage}</h3>
          <CreateGame
            onSelectLanguage={getSelectedLanguageContent}
            onCreateGame={handleCreateGame}
            translations={translations}
            gameInfo={gameInfo}
            setGameInfo={setGameInfo}
          />
        </div>
      )}
    </div>
  );
};
export default App;
