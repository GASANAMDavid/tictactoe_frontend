import React, { useState } from "react";
import CreateGame from "./components/CreateGame";
import { getTranslations } from "./actions/translate";

const App = () => {
  const [isGameCreated, setIsGameCreated] = useState(false);
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

  const createGame = () => {
    setGameInfo({ ...gameInfo, language: gameInfo.language });
    setIsGameCreated(true);
    console.log(gameInfo)
  };

  return (
    <div className='container'>
      <h3 className='header'>{translations.welcomeMessage}</h3>
      {isGameCreated ? (
        <>
          <h1> Play the game</h1>
        </>
      ) : (
        <CreateGame
          onSelectLanguage={getSelectedLanguageContent}
          onCreateGame={createGame}
          translations={translations}
          gameInfo={gameInfo}
          setGameInfo={setGameInfo}
        />
      )}
    </div>
  );
};
export default App;
