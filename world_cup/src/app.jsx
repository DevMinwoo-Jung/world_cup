import './app.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/login/login';
import WorldCupMaker from './components/world_cup_maker/world_cup_maker';
import Game from './components/game/game';


function App({authService, FileInput, cupsRepository}) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login authService={authService} />
        </Route>
        <Route path="/maker">
          <WorldCupMaker authService={authService} FileInput={FileInput} cupsRepository={cupsRepository}/>
        </Route>
        <Route path="/game">
          <Game/>
        </Route>  
      </Switch>
    </Router>
  );
}

export default App;
