import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import CommentForm from './CommentForm'
import renderer from 'react-test-renderer';

it('renders comment form without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <CommentForm />
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders UI as expected', () => {
  const tree = renderer
    .create(<CommentForm />)
    .toJSON();
    expect(tree).toMatchSnapshot();
})