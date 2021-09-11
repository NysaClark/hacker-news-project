import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoryProvider } from "./util/context";
import './styles/main.css'

ReactDOM.render(
  <React.StrictMode>
    <StoryProvider>
      <App />
    </StoryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
