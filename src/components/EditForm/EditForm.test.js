import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EditForm from './EditForm'
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

describe('Edit Form component', () => {
  const props = {
    entries: [
      {
        id: 1,
        title: 'Journal #1',
        content: 'This is journal entry #1',
        duration: 2,
        mood_type: 'Low'
      },
      {
        id: 2,
        title: 'Journal #2',
        content: 'This is journal entry #2',
        duration: 2,
        mood_type: 'Balanced'
      },
      {
        id: 3,
        title: 'Journal #3',
        content: 'This is journal entry #3',
        duration: 2,
        mood_type: 'Erratic'
      },
    ]
  };

  const match = {
    params: {
      entry_id: 1
    }
  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <EditForm match={match} />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders an empty list', () => {
    const wrapper = shallow(<EditForm match={match} entries={[]}/>);
    expect(wrapper.find('mood-content').children().length)
  });

  it('renders an entry in the array', () => {
    const options = shallow(<EditForm match={match} {...props}/>).find('mood-content');
    expect(toJson(options)).toMatchSnapshot();
  })
})