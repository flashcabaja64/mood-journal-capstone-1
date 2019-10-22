import React from 'react';
import ReactDOM from 'react-dom';
import Register from './Register';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('Registration form testing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders UI as expected', () => {
    const tree = renderer
        .create(<Register />)
        .toJSON();
        expect(tree).toMatchSnapshot();
  })
})
