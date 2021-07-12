import React from "react";
import CreateGame from "./components/CreateGame";

const App = () => {
  const [heading, setHeading] = React.useState("Welcome to TicTacToe Game");
  const [isLanguage, setIsLanguage] = React.useState(false);

  const getSelectedLanguageContent = (lang) => {
    setHeading("Welcome to TicTacToe Game in English");
  };

  const createGame = () => {
    setIsLanguage(true);
  };

  return (
    <div className='container'>
      <h3 className='header'>{heading}</h3>
      {!isLanguage ? (
        <CreateGame
          onSelectLanguage={getSelectedLanguageContent}
          onCreateGame={createGame}
        />
      ) : (
        <>
          <h1> Play the game</h1>
          <h2>Hi there</h2>
        </>
      )}{" "}
    </div>
  );
};
export default App;
