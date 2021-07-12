// import React from "react";
import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CreateGame from "../components/CreateGame";

// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useState: jest.fn(),
// }));

describe("CreateGame", () => {
  let createGame;
  const mockGetSelectedLanguageContent = jest.fn();
  const lang = "en";
  beforeEach(() => {
    createGame = shallow(
      <CreateGame onSelectLanguage={mockGetSelectedLanguageContent} />
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
      // const name = "Manzi";
      // const mockSetPlayerName = jest.fn();
      // React.useState = () => ["", mockSetPlayerName];
      // createGame
      //   .find(".input-player-name")
      //   .simulate("change", { target: { value: name } });

      // expect(mockSetPlayerName).toHaveBeenCalledWith(name); //
      expect(createGame.find(".input-player-name").exists()).toBe(true);
    });

    it("should have input for symbol", () => {
      expect(createGame.find(".input-symbol").exists()).toBe(true);
    });

    it("should allow user to choose game mode", () => {
      expect(createGame.find(".select-game-mode").exists()).toBe(true);
    });

    it('allows user to choose boardSize', () => {
      expect(createGame.find('.select-board-size').exists()).toBe(true)
    })

    describe('submit button', () => {
      it('has a button to create game', () => {
        expect(createGame.find('Button').exists()).toBe(true)
      })
      
    })
    
  });
});
