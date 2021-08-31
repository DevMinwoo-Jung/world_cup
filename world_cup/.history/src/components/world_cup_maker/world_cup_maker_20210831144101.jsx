import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../header/header';

const WorldCupMaker = ({authService}) => {
  const history = useHistory();
  const onLogout = useCallback(() => {
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