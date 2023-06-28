import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BlogsState from './Context/blogstate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BlogsState>  
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </BlogsState>

);


