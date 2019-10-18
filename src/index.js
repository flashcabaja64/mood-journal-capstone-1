import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { MoodPageProvider } from './MoodContext/MoodContext'
import { CommentProvider } from './MoodContext/CommentContext';

ReactDOM.render(
  <BrowserRouter>
  <CommentProvider>
  <MoodPageProvider>
    <App />
  </MoodPageProvider>
  </CommentProvider>
  </BrowserRouter>, document.getElementById('root'));