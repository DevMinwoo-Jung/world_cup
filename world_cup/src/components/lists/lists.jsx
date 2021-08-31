import React from 'react';
import {
  Route,
  useHistory,
} from "react-router-dom";
import Game from '../game/game';

const Lists = () => {
  let history = useHistory();

  function gotoMaker(){
    history.push("/maker");
  }

  function gotoGame(){
    history.push("/game");
  }

  function gotoHome(){
    history.push("/");
  }

  return(
  <>
    <h1>나는 리스트 asdasd</h1>
    <button onClick={gotoGame}>게임하기</button>  
    <button onClick={gotoMaker}>만들기</button>  
    <button onClick={gotoHome}>Logout</button>
  </> 
  )
};

export default Lists;