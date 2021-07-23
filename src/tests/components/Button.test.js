import React from "react";
import { shallow } from "enzyme";
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
    expect(button.find(".btn").text()).toEqual("Test");
  });

  it("calls mockCreatGame function when clicked", () => {
    button.find(".btn").simulate("click");
    expect(mockCreateGame).toHaveBeenCalled();
  });
});
