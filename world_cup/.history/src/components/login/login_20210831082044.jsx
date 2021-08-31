import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css'

const Login = ({authService}) => {
  const history = useHistory();
  const goTomaker = userId => {
    history.push({
      pathname: '/maker',
      state: { id: userId },
    });
  };
  const onLogin = event => {
    authService
      .login(event.currentTarget.textContent)
      .then(data => goTomaker(data.user.uid));
  };

  useEffect(() => {
    authService
      .onAuthChange(user => {
        user && goTomaker(user.uid);
      });

  })

  return(
    <section className={styles.login}>
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>Google</button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
    </section>
  )
};

export default Login;