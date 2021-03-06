import Cell from "../../components/Cell";
import { shallow } from "enzyme";

describe("Cell", () => {
  let cell;
  let isOngoing = true;
  const cellIndex = 1;

  const mockOnFinishedGame = jest.fn();
  const mockOnCellClick = jest.fn();

  beforeEach(() => {
    cell = shallow(
      <Cell
        isOngoing={isOngoing}
        cellPosition={cellIndex}
        onFinishedGame={mockOnFinishedGame}
        onClick={mockOnCellClick}
      />
    );
  });

  describe("when a cell is clicked", () => {
    it("calls onCellClick function when the game is ongoing", () => {
      cell.find(".cell").simulate("click");
      expect(mockOnCellClick).toHaveBeenCalledWith(cellIndex);
    });

    it("calls onFinishedGame when the game is finished", () => {
      const anotherCell = shallow(
        <Cell isOngoing={false} onFinishedGame={mockOnFinishedGame} />
      );
      anotherCell.find(".cell").simulate("click");
      expect(mockOnFinishedGame).toHaveBeenCalled();
    });
  });
});
