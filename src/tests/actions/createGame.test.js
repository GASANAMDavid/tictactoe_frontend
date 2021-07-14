import { createGame } from "../../actions/createGame";
import moxios from "moxios";

describe("createGame", () => {
  beforeEach(() => moxios.install);
  afterEach(() => moxios.uninstall);

  it("creates a game and returns an object", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: {
          id: 1,
          game_mode: 2,
          board: [["-", "-", "-"]],
          player_name: "Muhanguzi",
          symbol: "X",
        },
      });
    });

    return createGame({
      language: "en",
      playerName: "Muhanguzi",
      boardSize: 3,
      symbol: "X",
      gameMode: 2,
    }).then((createdGame) => {
      expect(createdGame["game_mode"]).toEqual(2);
    });
  });

  describe("when missing params", () => {
    it("logs the error to the console", () => {
      console.log = jest.fn();
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 422,
          response: {
            errors: {
              symbol: ["can't be blank"],
              board: ["can't be blank"],
            },
          },
        });
      });

      return createGame({ boardSize: null, symbol: null }).then(() => {
        expect(console.log).toHaveBeenCalled();
      });
    });
  });
});
