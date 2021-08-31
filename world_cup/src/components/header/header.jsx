import React, { memo } from 'react';
import styles from './header.module.css'

const Header = memo(({ onLogout }) => (
  <header className={styles.header}>
    {onLogout && (
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
    )}
  </header>
));

export default Header;