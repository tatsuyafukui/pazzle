import React from 'react';
import * as styles from './header.css';
import { useDispatch, useSelector } from 'react-redux';
import { clickLogin, clickLogout } from '../../modules/auth';
import Logo from '../../atoms/Logo/logo';
import { Link } from 'react-router-dom';
const userSelector = (state: any) => state.authReducer.user;

const Header: React.FC = (props: any) => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <div className={styles.inner}>
          <Logo />
          <div className={styles.headerRight}>
            <Link to={'/'} className={styles.collection}>About</Link>
            <Link to={'/'} className={styles.collection}>Help</Link>
            {user ? (
              <>
                <button className={styles.logout} onClick={() => dispatch(clickLogout())}>
                  Logout
                </button>
                <Link to={'/upload'} className={styles.collection}>新規投稿</Link>
              </>
            ) : (
              <button className={styles.twitter} onClick={() => dispatch(clickLogin())}>
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
