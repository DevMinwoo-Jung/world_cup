import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../header/header';

const WorldCupMaker = ({authService}) => {
  const history = useHistory();
  const historyState = history?.location?.state;
  const [userId, setUserId] = useState(historyState && historyState.id);
  
  const onLogout = useCallback(() => {
    alert("여기로온다");
    authService.logout();
  }, [authService]);

  useEffect(() => {
    authService.onAuthChange(user => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push('/');
      }
    });
  }, [userId, history, authService]);

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