import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Results from './components/Results';
import './css/App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Results />
    </div>
  );
}

export default App;
