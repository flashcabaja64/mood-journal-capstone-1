import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';
import {MemoryRouter} from 'react-router';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json' 
import { shallow } from 'enzyme'

describe('LoginForm component testing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
  
    ReactDOM.render(
    <MemoryRouter>
      <LoginForm />
    </MemoryRouter>
    , div);
  
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders UI as expected', () => {
    const tree = renderer
        .create(<MemoryRouter><LoginForm /></MemoryRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
  })
  
  it('submits information after clicking click', () => {
    const wrapper = shallow(<LoginForm />)
    wrapper.find('button').at(0).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})