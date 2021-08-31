import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../header/header';

const WorldCupMaker = ({authService}) => {

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  let history = useHistory();

  function gotoGame(){
    history.push("/game");
  }

  function gotoHome(){
    history.push("/");
  }

  return (
    <>
      <Header onLogout={onLogout} />
      <button onClick={gotoGame}>게임하기</button>
    </>
  );
};

export default WorldCupMaker;