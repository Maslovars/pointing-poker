/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from "react-router";
import "./App.css";
import Footer from "./components/footer/Footer";
import Game from "./components/game/Game";
import Lobby from "./components/lobby/Lobby";
import Settings from "./components/settings/Settings";
import Welcome from "./components/welcome/Welcome";
import Header from "./components/header/Header";
import { Provider } from "react-redux";
import { store } from "../src/redux/store/store";
import { socket } from './common/utils/socket/socket';
import { BLOCK_APP } from './common/utils/socket/constants';

function App() {
  
  const [blocked, setBlock] = useState('false');
  

  function blockHandler({ isBlock, message }) {
    if (isBlock === true || isBlock === false) { setBlock(isBlock)}
    if (isBlock === undefined) { setBlock(prev => !prev)}
    if (blocked) { document.getElementById('message').innerHTML = message; }
  }

  function clickHandler(event) {
    console.log('CLICK!!!!!!!!!!!!', event.target.id);
  }
  
  useEffect(() => {
    socket.on(BLOCK_APP, data => blockHandler(data))
    return () => socket.off(BLOCK_APP, data => blockHandler(data));
  }, [])
  
  return (
    <Provider store={store}>
      <div className="app">
        <Header text="Your text could be here..." />
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => <Welcome />}></Route>
            <Route path="/lobby/:gameId?" render={() => <Lobby />}></Route>
            <Route path="/settings" render={() => <Settings />}></Route>
            <Route path="/game" render={() => <Game />}></Route>
          </Switch>
          <Redirect to='/' />
        </div>
        <Footer />
        {blocked === true && <div id='block'></div>}
        {blocked === true && <div id='message' onClick={(event) => clickHandler(event)}></div>}
      </div>
    </Provider>
  );
}

export default App;
