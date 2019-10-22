import React from 'react';
import ReactDOM from 'react-dom';
import MoodPage from './MoodPage'
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<MoodPage />, div)

  ReactDOM.unmountComponentAtNode(div)
})

it('renders UI as expected', () => {
  const tree = renderer
  .create(<MoodPage />)
  .toJSON();
  expect(tree).toMatchSnapshot();
})