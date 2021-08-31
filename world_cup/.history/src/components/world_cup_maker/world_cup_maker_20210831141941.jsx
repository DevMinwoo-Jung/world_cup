import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from '../header/header';

const WorldCupMaker = () => {
  let history = useHistory();

  function gotoGame(){
    history.push("/game");
  }

  function gotoHome(){
    history.push("/");
  }

  return (
    <>
      <Header/>
      <button onClick={gotoGame}>게임하기</button>
      <button onClick={gotoHome}>Logout</button>
    </>
  );
};

export default WorldCupMaker;