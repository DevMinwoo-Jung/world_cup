import './app.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/login/login';
import Lists from './components/lists/lists';
import WorldCupMaker from './components/world_cup_maker/world_cup_maker';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login/>
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
