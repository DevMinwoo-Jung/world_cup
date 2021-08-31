import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Game from '../game/game';

const WorldCupMaker = () => {
  let history = useHistory();

  function gotoGame(){
    history.push("/game");
  }

  function goHome(){
    history.push("/");
  }

  return (
    <>
      <h1>나는 만들기 페이지얌</h1>
      <button onClick={gotoGame}>게임하기</button>
      <Link exact to="/game">Game</Link>
      <button onClick={goHome}>Logout</button>
    <Switch>
      <Route path="/game">
        <Game/>
      </Route>  
    </Switch>  
    </>
  );
};

export default WorldCupMaker;