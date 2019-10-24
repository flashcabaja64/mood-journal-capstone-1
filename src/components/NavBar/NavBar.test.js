import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar'
import {MemoryRouter} from 'react-router';
import renderer from 'react-test-renderer';

describe('NavBar component testing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
  
    ReactDOM.render(<MemoryRouter><NavBar /></MemoryRouter>, div);
  
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders UI as expected', () => {
    const tree = renderer
        .create(<MemoryRouter><NavBar /></MemoryRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
  })

})
