import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { MoodPageProvider } from './MoodContext/MoodContext'

ReactDOM.render(
  <BrowserRouter>
  <MoodPageProvider>
    <App />
  </MoodPageProvider>
  </BrowserRouter>, document.getElementById('root'));