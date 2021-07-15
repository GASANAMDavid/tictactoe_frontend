import React, { useState } from "react";
import CreateGame from "./components/CreateGame";
import { getTranslations } from "./actions/translate";
import { createGame } from "./actions/createGame";
import { applyMove } from "./actions/applyMove";
import Board from "./components/Board";

const App = () => {
  let errorMessage = "";
  const [gameCreated, setGameCreated] = useState({
    id: null,
    board: [["-"], ["-"]],
    state: ""
  });

  const [gameInfo, setGameInfo] = useState({
    playerName: "",
    symbol: "",
    boardSize: null,
    gameMode: null,
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

  const handleInvalidMove = () => {
    errorMessage = "Invalid move";
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
      setGameCreated({ ...gameCreated, ...response });
    });
  };

  return (
    <div className='container'>
      <div className='header'>
        {gameCreated.id
          ? translations.playGameHeader
          : translations.welcomeMessage}
      </div>
      <div className='content'>
        {gameCreated.id ? (
          <Board
            board={gameCreated.board}
            onCellClick={handleCellClick}
            onInvalidMove={handleInvalidMove}
            isOngoing={gameCreated.ongoing}
          />
        ) : (
          <CreateGame
            onSelectLanguage={getSelectedLanguageContent}
            onCreateGame={handleCreateGame}
            translations={translations}
            gameInfo={gameInfo}
            setGameInfo={setGameInfo}
          />
        )}
      </div>
      <div className='game-info'>
        <h4> Game Information </h4>
        <div>
          name:
          {gameInfo.playerName}
        </div>
        <div>
          Symbol:
          {gameInfo.symbol}
        </div>
        <div>
          game mode:
          {gameInfo.gameMode}
        </div>
        <div>
          opponent:
          {gameCreated.opponent}
        </div>
        <div>
          opponent symbol:
          {gameCreated.opponentSymbol}
        </div>
        <div></div>
      </div>
      <div className='status'>
        { errorMessage ? errorMessage : gameCreated.state}
      </div>
    </div>
  );
};
export default App;
