/* eslint-disable */

import { Route, Switch, Redirect } from 'react-router';
import './App.css';
import Footer from './components/footer/Footer';
import Game from './components/game/Game';
import Lobby from './components/lobby/Lobby';
import Settings from './components/settings/Settings';
import Welcome from './components/welcome/Welcome';
import Header from './components/header/Header';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store/store';
import { useState, useEffect } from 'react';
import { socket } from './common/utils/socket/socket';

function App() {
  const [wievPage, setWievPage] = useState('/');
  let text;
  useEffect(() => {
    if (wievPage === '/') {
      socket.once('room_created', () => {
        setWievPage('/settings')
      });
      socket.once('room_joined', () => {
        setWievPage('/lobby')
      });
    }
  }, []);

  switch (wievPage) {
    case '/lobby': text = 'Players lobby'; break;
    case '/settings': text = 'Master game settings'; break;
    default: text = 'Welcome to Pointing Pocker!';
  }

  return (
    <Provider store={store}>
      <div className="app">
        <Header text={text} />
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => <Welcome />}></Route>
            <Route path="/lobby" render={() => <Lobby />} ></Route>
            <Route path="/settings" render={() => <Settings />} ></Route>
            <Route path="/game" render={() => <Game />} ></Route>
          </Switch>
          <Redirect to={wievPage} />
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
