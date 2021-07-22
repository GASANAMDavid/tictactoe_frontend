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
  });

  describe("when the game is created", () => {
    const newCreatedGameState = {
      id: 1,
      board: [["-"], ["-"]],
      state: {
        message: "",
        ongoing: true,
      },
    };

    beforeEach(() => {
      app = shallow(<App gameCreated={newCreatedGameState} />);
    });

    it("renders the 'Board' component", () => {
      expect(app.find("Board").exists()).toBe(true);
    });
  });
});
