import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Header from '../header/header';
import Lists from '../lists/lists';
import styles from './world_cup_maker.module.css'

const WorldCupMaker = ({authService, FileInput, cupsRepository}) => {
  const history = useHistory();
  const historyState = history?.location?.state;
  const [userId, setUserId] = useState(historyState && historyState.id);
  const [cups, setCups] = useState(historyState && historyState.id);
  
  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    if(!userId){
      return;
    }
    const stopSync = cupsRepository.syncCups(userId, cups => {
      setCups(cups);
    })
    return () => stopSync();
  }, [userId, cupsRepository]);

  useEffect(() => {
    authService.onAuthChange(user => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push('/');
      }
    });
  }, [userId, history, authService]);


  const createOrUpdateCups = cup => {

    setCups(cups => {
      const updated = { ...cups };
      updated[cup.id] = cup;
      return updated;
    });
    cupsRepository.saveCups(userId, cup);
  };
  
  const deleteCups = cup => {
    setCups(cups => {
      const updated = { ...cups };
      delete updated[cup.id];
      return updated;
    });
    cupsRepository.removeCups(userId, cup);
  };

  return (
    
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cups={cups} FileInput={FileInput}  addCups={createOrUpdateCups} updateCups={createOrUpdateCups} deleteCups={deleteCups}/>
        <Lists cups={cups}/>
      </div>
    </section>
  );
};

export default WorldCupMaker;