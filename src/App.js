import React from 'react';
import './App.scss';
import Logo from './components/Logo';
import SearchContent from './components/SearchContent.js';

function App() {
  return (
    <div id="search-layout">
      <div id="header">
        <Logo/>
      </div>
      <div id="content">
        <SearchContent/>
      </div>
    </div>
  );
}

export default App;
