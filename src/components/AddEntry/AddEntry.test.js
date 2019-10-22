import React from 'react';
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import toJson from 'enzyme-to-json'
import AddEntry from './AddEntry'
import renderer from 'react-test-renderer';

describe('AddEntry component', () => {
  
  it('renders an .AddEntry by default', () => {
    const wrapper = shallow(<AddEntry />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <AddEntry />
      </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders UI as expected', () => {
    const tree = renderer
      .create(<AddEntry />)
      .toJSON();
      expect(tree).toMatchSnapshot();
  })
})