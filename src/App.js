/* eslint-disable */
import React from "react";
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

function App() {
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
          {/* <Redirect to='/' /> */}
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
