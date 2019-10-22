import React from 'react';
import ReactDOM from 'react-dom';
import MoodListItem from './MoodListItem';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('MoodListItem component testing', () => {
  const entry = {
    id: 1,
    title: 'title 1',
    content: 'content 1',
    duration: 1,
    mood_type: 'Low'
  }
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
  
    ReactDOM.render(
    <MemoryRouter>
      <MoodListItem entry={entry} index={1} />
    </MemoryRouter>
    , div);
  
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders UI as expected', () => {
    const tree = renderer
        .create(
          <MemoryRouter>
            <MoodListItem entry={entry} index={1}/>
          </MemoryRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
  })
})