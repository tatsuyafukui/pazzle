import React from 'react';
import * as styles from './header.css';
import { useDispatch, useSelector } from 'react-redux';
import { clickLogin, clickLogout } from '../../modules/auth';
import Logo from '../../atoms/Logo/logo';
const userSelector = (state: any) => state.user;

const Header: React.FC = (props: any) => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  return (
    <header className={styles.header}>
      <Logo />
      <ul>
        {user ? (
          <li className={styles.logout} onClick={() => dispatch(clickLogout())}>
            Logout
          </li>
        ) : (
          <li className={styles.twitter} onClick={() => dispatch(clickLogin())}>
            Twitter Login
          </li>
        )}
        <li>about</li>
        <li>help</li>
      </ul>
    </header>
  );
};

export default Header;
