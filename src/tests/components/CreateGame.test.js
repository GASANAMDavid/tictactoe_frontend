// import React from "react";
import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CreateGame from "../../components/CreateGame";

describe("CreateGame", () => {
  let createGame;
  const mockTranslations = { gameModes: [] };
  const mockGetSelectedLanguageContent = jest.fn();
  const mockCreateGame = jest.fn();
  const mockSetGameInfo = jest.fn();
  const mockGameInfo = {};

  const lang = "en";

  beforeEach(() => {
    createGame = shallow(
      <CreateGame
        onSelectLanguage={mockGetSelectedLanguageContent}
        translations={mockTranslations}
        onCreateGame={mockCreateGame}
        gameInfo={mockGameInfo}
        setGameInfo={mockSetGameInfo}
      />
    );
    createGame.find(".select-language").simulate("change", { value: lang });
  });

  it("renders correctly", () => {
    expect(toJson(createGame)).toMatchSnapshot();
  });

  describe("when language is not set", () => {
    it("calls onSelectLanguage with the selected_language", () => {
      expect(mockGetSelectedLanguageContent).toHaveBeenCalledWith(lang);
    });
  });

  describe("when language is set", () => {
    it("should have input for player name", () => {
      createGame.find('.input-player-name').simulate('change', { target: { value: 'David' } })
      expect(mockSetGameInfo).toHaveBeenCalled()
      expect(createGame.find(".input-player-name").exists()).toBe(true);
    });

    it("should have input for symbol", () => {

      createGame.find('.input-symbol').simulate('change', { target: { value: 'David' } })
      expect(mockSetGameInfo).toHaveBeenCalled()
      expect(createGame.find(".input-symbol").exists()).toBe(true);
    });

    it("should allow user to choose game mode", () => {
      createGame.find('.select-game-mode').simulate('change', { target: { value: 'David' } })
      expect(mockSetGameInfo).toHaveBeenCalled()
      expect(createGame.find(".select-game-mode").exists()).toBe(true);
    });

    it("allows user to choose boardSize", () => {
      createGame.find('.select-board-size').simulate('change', { target: { value: 'David' } })
      expect(mockSetGameInfo).toHaveBeenCalled()
      expect(createGame.find(".select-board-size").exists()).toBe(true);
    });

    describe("submit button", () => {
      it("has a Button component to create game", () => {
        expect(createGame.find("Button").exists()).toBe(true);
      });

      it("call onCreateGame when button clicked", () => {
        createGame.find("Button").simulate("click");
        expect(mockCreateGame).toHaveBeenCalled();
      });
    });
  });
});
