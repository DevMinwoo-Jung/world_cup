import React from 'react';
import { useHistory } from 'react-router-dom';

const WorldCupMaker = () => {
  let history = useHistory();

  function goList(){
    history.push("/lists");
  }

  function goHome(){
    history.push("/");
  }

  return (
    <>
      <h1>나는 만들기 페이지얌</h1>
      <button onClick={goList}>리스트로</button>
      <button onClick={goHome}>Logout</button>
    </>
  );
};

export default WorldCupMaker;