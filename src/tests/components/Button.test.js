import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Button from "../../components/Button";

describe("Button", () => {
  let button;
  const mockCreateGame = jest.fn();
  beforeEach(() => {
    button = shallow(
      <Button color='green' text='Test' onClick={mockCreateGame} />
    );
  });

  it("sets button text from props", () => {
    expect(button.find(".btn-create").text()).toEqual("Test");
  });

  it("calls mockCreatGame function when clicked", () => {
    button.find(".btn-create").simulate("click");
    expect(mockCreateGame).toHaveBeenCalled();
  });
});
