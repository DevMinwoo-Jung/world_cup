import React from 'react';
import WorldCupAddForm from '../world_cup_add_form/world_cup_add_form';
import WorldCupEditForm from '../world_cup_edit_form/world_cup_edit_form';
import styles from './editor.module.css'

const Editor = ({FileInput, addCups, cups, updateCups, deleteCups}) => {
  return (
    <div className={styles.editor}>
      <span className={styles.title}>World cup Editor</span>
      {
      Object.keys(cups).map(key => (
        <WorldCupEditForm key={key} FileInput={FileInput} cups={cups[key]} updateCups={updateCups} deleteCups={deleteCups}/>
      ))
      }
      <WorldCupAddForm FileInput={FileInput} onAdd={addCups} cups={cups}/>
    </div>
  );
};

export default Editor;