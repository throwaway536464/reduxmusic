import React from 'react';
import { Provider } from 'react-redux';
import "./App.scss";
import { Header } from './header/header';
import { MovieSearch } from './modules/MusicSearch/containers/musicSearchPage';
import store from './store/configureStore';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <MovieSearch />
      </Provider>
    </div>
  );
}


export default App;

