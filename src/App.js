import React, { useState } from "react";
import CreateGame from "./components/CreateGame";
import { getTranslations } from "./actions/translate";
import { createGame } from "./actions/createGame";

const App = () => {
  const [gameCreated, setGameCreated] = useState({
    id: null
  })

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
      setGameCreated(({ id, board } = createdGame, { id, board }));
    });
  };

  return (
    <div className='container'>
      {gameCreated.id ? (
        <>
          <h3 className='header'>{translations.playGameHeader}</h3>
          <h1> Play the game</h1>
        </>
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
