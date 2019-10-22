import React from 'react';
import ReactDOM from 'react-dom';
import RegisterPage from './RegisterPage'
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<RegisterPage />, div)

  ReactDOM.unmountComponentAtNode(div)
})

it('renders UI as expected', () => {
  const tree = renderer
  .create(<RegisterPage />)
  .toJSON();
  expect(tree).toMatchSnapshot();
})