import Select from "react-select";
import Button from "./Button";
import { Form } from "react-bootstrap";
import { useState } from "react";

const languageOptions = [
  { value: "en", label: "English" },
  { value: "fr", label: "French" },
];

const boardSizeOptions = [
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
];

const CreateGame = ({
  onSelectLanguage,
  onCreateGame,
  translations,
  gameInfo,
  setGameInfo,
}) => {
  const [isLanguageSet, setIsLanguageSet] = useState(false);

  const modeOptions = translations['gameModes'].map((mode) => {
    return { value: mode, label: mode.label }
  })
  
  const handleChange = (lang) => {
    setGameInfo({ ...gameInfo, language: lang });
    onSelectLanguage(lang);
    setIsLanguageSet(true);
  };
  return (
    <div className='create-game'>
      {isLanguageSet ? (
        <Form>
          <Form.Row>
            <label>{translations.playerName}:</label>
            <input
              className='input-player-name'
              placeholder={translations.promptPlayerName}
              value={gameInfo.playerName}
              onChange={(event) => {
                setGameInfo({ ...gameInfo, playerName: event.target.value });
              }}
            />
          </Form.Row>
          <Form.Row>
            <label>{translations.symbol}:</label>
            <input
              className='input-symbol'
              value={gameInfo.symbol}
              placeholder={translations.promptSymbol}
              onChange={(event) =>
                setGameInfo({ ...gameInfo, symbol: event.target.value })
              }
            />
          </Form.Row>
          <Form.Row>
            <label>{translations.gameMode}:</label>
            <Select
              className='select-game-mode'
              placeholder={translations.select}
              options={modeOptions}
              value={modeOptions.find(option => option.value === gameInfo.gameMode)}
              onChange={(event) =>
                setGameInfo({ ...gameInfo, gameMode: event.value })
              }
            />
          </Form.Row>
          <Form.Row>
            <label>{translations.boardSize}:</label>
            <Select
              className='select-board-size'
              options={boardSizeOptions}
              placeholder={translations.select}
              onChange={(event) =>
                setGameInfo({ ...gameInfo, boardSize: event.value })
              }
              value={boardSizeOptions.find(option => option.value === gameInfo.boardSize)}
            />
          </Form.Row>
          <Button
            color='#2699ab'
            text={translations.newGame}
            onClick={() => onCreateGame()}
          />
        </Form>
      ) : (
        <label>
          Choose language
          <Select
            className='select-language'
            options={languageOptions}
            value={languageOptions.find(option => option.value === gameInfo.language)}
            onChange={(event) => {
              handleChange(event.value);
            }}
          />
        </label>
      )}
    </div>
  );
};

export default CreateGame;
