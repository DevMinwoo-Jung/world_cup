import React, { memo } from 'react';
import styles from './header.module.css'

const Header = memo(({ onLogout }) => (
  <header className={styles.header}>
    {onLogout && (
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
    )}
    <img className={styles.logo} src="/images/logo.png" alt="logo" />
    <h1 className={styles.title}>16강 월드컵 만들기</h1>
  </header>
));

export default Header;