import React, { useState } from 'react';
import styles from './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { clickLogin, clickLogout } from '../../modules/auth';
import Logo from '../../atoms/Logo';
import HeaderMenu from '../../molecules/HeaderMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Txt, { WhiteTxt } from '../../atoms/Txt';
const userSelector = (state: any) => state.authReducer.user;

const Header: React.FC<React.AllHTMLAttributes<HTMLElement>> = (props: any) => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  const [menuList, setMenuList] = useState([
    {
      children: <WhiteTxt>ヘルプ</WhiteTxt>,
      onClick: (e: any) => {},
    },
    {
      children: <WhiteTxt>パズルを登録</WhiteTxt>,
      onClick:() => {},
    },
    user ?
      {
        children: <WhiteTxt className={styles.logout}><FontAwesomeIcon style={{marginRight: '5px'}} icon={faTwitter}/>ログアウト</WhiteTxt>,
        onClick:() => dispatch(clickLogout()),
      }:
      {
        children: <WhiteTxt className={styles.twitter}><FontAwesomeIcon style={{marginRight: '5px'}} icon={faTwitter}/>ログイン</WhiteTxt>,
        onClick:() => dispatch(clickLogin()),
      },
  ]);

  return (
    <header className={styles.header} {...props}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Logo style={{padding: '10px 0'}} />
          <HeaderMenu
            menuList={menuList}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
