import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { MoodPageProvider } from './MoodContext/MoodContext'
import { CommentProvider } from './MoodContext/CommentContext';
import { NavProvider } from './MoodContext/NavContext'

ReactDOM.render(
  <BrowserRouter>
    <NavProvider>
      <CommentProvider>
        <MoodPageProvider>
          <App />
        </MoodPageProvider>
      </CommentProvider>
    </NavProvider>
  </BrowserRouter>, document.getElementById('root'));