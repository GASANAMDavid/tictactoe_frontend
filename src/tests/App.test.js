import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("App", () => {
  let app;
  const mockDefaultGameState = {
    id: null,
    board: [["-"], ["-"]],
    state: {
      message: "",
      ongoing: true,
      
    },
  };

  describe("when game is not created yet", () => {
    beforeEach(() => {
      app = shallow(<App gameCreated={mockDefaultGameState} />);
    });

    it("renders the 'CreateGame' component", () => {
      expect(app.find("CreateGame").exists()).toBe(true);
    });

    it('sets the header message to "WelcomeMessage"', () => {
      expect(app.find(".header").text()).toEqual("Welcome to TicTacToe Game");
    });
  });

  describe("when the game is created", () => {
    const newCreatedGameState = {
      id: 1,
      board: [["-"], ["-"]],
      state: {
        message: "",
        ongoing: false,
      },
    };

    beforeEach(() => {
      app = shallow(<App gameCreated={newCreatedGameState} />);
    });

    it("renders the 'Board' component", () => {
      expect(app.find("Board").exists()).toBe(true);
    });

    it('sets the header message to "playGameHeader"', () => {
      expect(app.find(".header").text()).toEqual("Play Tic Tac Toe");
    });

    describe('and the game has finished', () => {
      beforeEach(() => {
        app = shallow(<App gameCreated={newCreatedGameState} />)
      })
      it('has a reset button', () => {
        expect(app.find("Button").exists()).toBe(true);
      })
    })
    
  });
});
