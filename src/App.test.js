import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import toJson from "enzyme-to-json"

describe('App', () => {
  let app
  beforeEach(() => app = shallow(<App/>))
  it('renders correctly', () => {
    expect(toJson(app)).toMatchSnapshot()
  });

  it('has a header', () => {
    expect(app.find('.header').exists()).toBe(true)
  });

  
})

