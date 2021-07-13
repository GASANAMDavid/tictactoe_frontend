import moxios from "moxios";
import { getTranslations } from "../../actions/translate.js";

describe("getTranslations", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  describe("when language is valid", () => {
    it("returns a translations Object", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            welcomeMessage: "Welcome to Tic Tac Toe game",
            playerName: "Player name",
            symbol: "Symbol",
          },
        });
      });

      return getTranslations("en").then((translations) => {
        expect(translations["welcomeMessage"]).toEqual(
          "Welcome to Tic Tac Toe game"
        );
        expect(translations["playerName"]).toEqual("Player name");
        expect(translations["symbol"]).toEqual("Symbol");
      });
    });
  });
  describe("when language is invalid", () => {
    it("returns a translations Object", () => {
      console.log = jest.fn();
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: {
            errors: "No translations found for `hello`",
          },
        });
      });

      return getTranslations("hello").then((translations) => {
        expect(console.log).toHaveBeenCalled();
      });
    });
  });
});
