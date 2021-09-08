import { Route, Switch } from 'react-router';
import './App.css';
import Footer from './components/footer/Footer';
import Game from './components/game/Game';
import Lobby from './components/lobby/Lobby';
import Settings from './components/settings/Settings';
import Welcome from './components/welcome/Welcome';

function App() {
  return (
    <div className="app">
      <h1>HI!</h1>
      <Switch>
        <Route exact path="/" render={() => <Welcome />}></Route>
        <Route path="/lobby" render={() => <Lobby />} ></Route>
        <Route path="/settings" render={() => <Settings />} ></Route>
        <Route path="/game" render={() => <Game />} ></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
