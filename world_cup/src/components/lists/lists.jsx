import React from 'react';
import { useHistory } from 'react-router-dom';

const Lists = () => {
  let history = useHistory();

  function goMaker(){
    history.push("/maker");
  }

  function goHome(){
    history.push("/");
  }

  return(
        <>
          <h1>나는 리스트 asdasd</h1>
          <button onClick={goMaker}>만들기</button>  
          <button onClick={goHome}>Logout</button>
        </>
  )
};

export default Lists;