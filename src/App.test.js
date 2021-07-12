import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json"
import App from "./App";

describe('App', () => {
  let app
  beforeEach(() => app = shallow(<App/>))
  it('renders correctly', () => {
    expect(toJson(app)).toMatchSnapshot()
  });

  it('has a header', () => {
    expect(app.find('.header').exists()).toBe(true)
  });

  it('has a create game component', () => {
    expect(app.find('CreateGame').exists()).toBe(true)
  })

  
})

