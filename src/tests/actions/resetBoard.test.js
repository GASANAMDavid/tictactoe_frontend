import { resetBoard } from "../../actions/resetBoard";
import moxios from "moxios";

describe("resetBoard", () => {
    let id = 1
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it("reset the game board", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          board: [["-", "-", "-"]],
        },
      });
    });

    return resetBoard(id).then((response) => {
      expect(response["board"]).toEqual([["-", "-", "-"]]);
    });
  });
});
