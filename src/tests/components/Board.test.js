import Board from "../../components/Board";
import { shallow } from "enzyme";

describe("Board", () => {
  const mockBoard = [['-','-'], ['-','-'],['-','-']];
  let board;
  beforeEach(() => {
    board = shallow(<Board board={mockBoard} />);
  });

  it("renders correctly", () => {
    expect(board).toMatchSnapshot();
  });

  it("renders the child component Cells correctly", () => {
      expect(board.find(".board").children()).toHaveLength(mockBoard.length * mockBoard[0].length);
      expect(board.find("Cell").exists()).toBe(true)
  });
});
