import moxios from "moxios";
import { applyMove } from "../../actions/applyMove";

describe("applyMove", () => {
  const move = 5;
  const id = 1;

  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it("applies human and opponent move to the board", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          board: [
            ["-", "-"],
            ["-", "-"],
            ["-", "-"],
          ],
          state: "Ongoing",
        },
      });
    });
    return applyMove(id, move).then((response) => {
      expect(response["board"]).toEqual([
        ["-", "-"],
        ["-", "-"],
        ["-", "-"],
      ]);
      expect(response["state"]).toEqual("Ongoing");
    });
  });
});
