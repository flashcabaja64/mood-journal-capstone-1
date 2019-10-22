import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ValidateError from './ValidateError'

describe('ValidateError component testing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
  
    ReactDOM.render(<ValidateError />, div);
  
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders UI as expected', () => {
    const tree = renderer
        .create(<ValidateError />)
        .toJSON();
        expect(tree).toMatchSnapshot();
  })
})
