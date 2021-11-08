import React from 'react';
import renderer from "react-test-renderer";
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { shallow, mount } from "enzyme";
import App from './App';
import Users from './Containers/Users';

describe('App component', () => {
  let store = null;
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore({});
  });

  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders correctly", () => {
    const rendered = renderer.create(<Provider store={store}><App /></Provider>);
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const component = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // expect(component.find(Users)).toHaveLength(1);
    expect(component.find(Table)).toHaveLength(1);
  });
});