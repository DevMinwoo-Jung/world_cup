import React, { memo } from 'react';
import styles from './header.module.css'

const Header = memo(({ onLogout }) => (
  <header className={styles.header}>
    <span className={styles.title}>
      My Wrold Cup Maker
    </span>
    {onLogout && (
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
    )}
  </header>
));

export default Header;