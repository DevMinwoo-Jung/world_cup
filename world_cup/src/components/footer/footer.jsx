import React from 'react';
import styles from './footer.module.css'
import { GoMarkGithub } from "react-icons/go";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>All Rights Reserved By Minwoo</p>
      <a target="_blank" rel="noopener noreferrer" className={styles.logo} href="https://github.com/DevMinwoo-Jung"><GoMarkGithub /></a>
    </div>
  );
};

export default Footer;