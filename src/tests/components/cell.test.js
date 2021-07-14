import Cell from "../../components/Cell";
import { shallow } from "enzyme";

describe("Cell", () => {
  let cell;
  const cellIndex = 1;
  const mockonCellClick = jest.fn();
  beforeEach(() => {
    cell = shallow(<Cell cellPosition={cellIndex} onClick={mockonCellClick} />);
  });

  it("renders correctly", () => {
    expect(cell).toMatchSnapshot();
  });

  it("calls onCellClick function when user clicks on a cell", () => {
    cell.find(".cell").simulate("click");
    expect(mockonCellClick).toHaveBeenCalledWith(cellIndex);
  });
});
