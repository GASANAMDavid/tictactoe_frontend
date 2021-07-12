import React from "react";
import Select from "react-select";
import Button from "./Button";
import { Form } from "react-bootstrap";

const languageOptions = [
  { value: "en", label: "English" },
  { value: "fr", label: "French" },
];

const modeOptions = [
  { value: 1, label: "Human V Random Computer" },
  { value: 2, label: "Human V Intelligent Computer" },
];

const boardSizeOptions = [
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
];

const CreateGame = ({ onSelectLanguage, onCreateGame }) => {
  const [isLanguageSet, setIsLanguageSet] = React.useState(false);
  const [language, setLanguage] = React.useState("");
  const [playerName, setPlayerName] = React.useState("");
  const [symbol, setSymbol] = React.useState("");
  const [gameMode, setGameMode] = React.useState(1);
  const [boardSize, setBoardSize] = React.useState();

  const handleChange = (lang) => {
    setIsLanguageSet(true);
    onSelectLanguage(lang);
    setLanguage(lang);
    
  };

  const handleClick = () => {
    console.log(symbol);
    console.log(language);
    console.log(playerName);
    console.log(gameMode);
    console.log(boardSize);
    onCreateGame()
  };

  return (
    <div className='create-game'>
      {!isLanguageSet ? (
        <label>
          choose language
          <Select
            className='select-language'
            options={languageOptions}
            value={language}
            onChange={(event) => handleChange(event.value)}
          />
        </label>
      ) : (
        <Form>
          <Form.Row>
            <label>
              Player name:
              <input
                className='input-player-name'
                placeholder='Enter name'
                value={playerName}
                onChange={(event) => {
                  setPlayerName(event.target.value);
                }}
              />
            </label>
          </Form.Row>
          <Form.Row>
            <label>
              Symbol:
              <input
                className='input-symbol'
                value={symbol}
                placeholder='Enter player symbol'
                onChange={(event) => setSymbol(event.target.value)}
              />
            </label>
          </Form.Row>
          <Form.Row>
            <label>
              Game mode:
              <Select
                className='select-game-mode'
                options={modeOptions}
                onChange={(event) => setGameMode(event.value)}
                value={gameMode}
              />
            </label>
          </Form.Row>
          <Form.Row>
            <label>
              BoardSize:
              <Select
                className='select-board-size'
                options={boardSizeOptions}
                isClearable
                onChange={(event) => setBoardSize(event.value)}
                value={boardSize}
              />
            </label>
          </Form.Row>
          <Button color='#2699ab' text='Create game' onClick={handleClick} />
        </Form>
      )}
    </div>
  );
};

export default CreateGame;
