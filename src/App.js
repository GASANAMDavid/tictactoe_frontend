import React, { useState } from "react";
import CreateGame from "./components/CreateGame";
import { getTranslations } from "./actions/translate";
import { createGame } from "./actions/createGame";
import { resetBoard} from "./actions/resetBoard"
import { applyMove } from "./actions/applyMove";
import Button from "./components/Button";
import Board from "./components/Board";

const App = (props) => {
  const [gameCreated, setGameCreated] = useState(props.gameCreated);

  const [gameInfo, setGameInfo] = useState({
    playerName: "",
    symbol: "",
    boardSize: null,
    gameMode: {},
    language: null,
  });

  const [translations, setTranslations] = useState(props.translations);

  const [displayMessage, setDisplayMessage] = useState("");

  const getSelectedLanguageContent = (lang) => {
    getTranslations(lang).then((data) => {
      setTranslations(data);
    });
  };

  const handleInvalidMove = () => {
    setDisplayMessage(`${translations.invalidMove}`);
  };

  const handleCreateGame = () => {
    let id;
    let board;
    createGame({ ...gameInfo, gameMode: gameInfo.gameMode.value }).then(
      (createdGame) => {
        setGameCreated(
          (({ id, board } = createdGame), { ...gameCreated, id, board })
        );
      }
    );
  };

  const handleCellClick = (cellPosition) => {
    applyMove(gameCreated.id, cellPosition).then((response) => {
      setDisplayMessage(response.state.message);
      setGameCreated({ ...gameCreated, ...response });
    });
  };

  const handleFinishedGame = () => {
    setDisplayMessage(
      `${translations.finishedGame}. ${gameCreated.state.message}`
    );
  };

  const handleBoardReset = () => {
    resetBoard(gameCreated.id).then((response) => {
      setGameCreated({ ...gameCreated, board: response.board, state: { message: "", ongoing: true } });
      setDisplayMessage("")
    })
  }

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
            isOngoing={gameCreated.state.ongoing}
            onFinishedGame={handleFinishedGame}
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
        <h4> {translations.gameSettingsHeader} </h4>
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
          {gameInfo.gameMode.label}
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
        <h4>{displayMessage}</h4>
      </div>

      <div className='reset'>
      { !gameCreated.state.ongoing && <Button text={translations.reset} bgColor='rgb(89 228 164)' onClick={handleBoardReset}/> 
      }
      </div>
    </div>
  );
};

App.defaultProps = {
  gameCreated: {
    id: null,
    board: [["-"], ["-"]],
    state: {
      message: "",
      ongoing: true,
    },
  },

  translations: {
    welcomeMessage: "Welcome to TicTacToe Game",
    playGameHeader: "Play Tic Tac Toe",
    gameModes: [],
    reset: "",
    gameSettingsHeader: "Game Settings" 
  },
};
export default App;
