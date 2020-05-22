import React from 'react';
import { Provider } from 'react-redux';
import "./App.scss";
import { Header } from './header/header';
import { MovieSearch } from './modules/MusicSearch/containers/musicSearchPage';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieSearch />
    </div>
  );
}

export default App;
