import './app.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/login/login';
import Lists from './components/lists/lists';
import WorldCupMaker from './components/world_cup_maker/world_cup_maker';
import Game from './components/game/game';


function App({authService}) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login authService={authService} />
        </Route>
        <Route path="/game">
          <Game/>
        </Route>
        <Route path="/lists">
          <Lists/>
        </Route>
        <Route path="/maker">
          <WorldCupMaker/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
