import React from 'react';
import Cups from '../cups/cups';
import styles from './lists.module.css'

const Lists = ({cups, deleteCups}) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Cups List</h1>
    <ul className={styles.cups}>
    {
      Object.keys(cups).map(key => (
        <Cups key={key} cup={cups[key]} deleteCups={deleteCups}/>
      ))
    }
    </ul>
  </section>
);

export default Lists;