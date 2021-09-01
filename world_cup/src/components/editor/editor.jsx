import React from 'react';
import WorldCupAddForm from '../world_cup_add_form/world_cup_add_form';
import styles from './editor.module.css'

const Editor = ({FileInput, addCups, cups}) => {
  return (
    <div className={styles.editor}>
      <span className={styles.title}>World cup Add From</span>
      <WorldCupAddForm FileInput={FileInput} onAdd={addCups} cups={cups}/>
    </div>
  );
};

export default Editor;