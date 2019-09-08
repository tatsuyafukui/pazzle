import React from 'react';
import styles from './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { clickLogin, clickLogout } from '../../modules/auth';
import Logo from '../../atoms/Logo';
import HeaderMenu from '../../molecules/HeaderMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Txt, { WhiteTxt } from '../../atoms/Txt';
import Img from '../../atoms/Img';
import Balloon from '../../atoms/Balloon';
import ModalBackground from '../../atoms/ModalBackground';
import { toggleModal } from '../../modules/ui';
import Anchor from '../../atoms/Anchor';
const userSelector = (state: any) => state.authReducer.user;
const uiSelector = (state: any) => state.uiReducer.hasModal;

const Header: React.FC<React.AllHTMLAttributes<HTMLElement>> = (props: any) => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const hasModal = useSelector(uiSelector);

  const menuList= [
    user ?
      {
        children: (
          <>
            <div
              style={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Img
                style={{
                  borderRadius: '50%',
                  width: 'auto',
                  height: '50%',
                }}
                src={user ? user.photoURL.split('_normal').join(''): ''}
              />
            <FontAwesomeIcon
              style={{
                marginLeft: '5px',
                color: 'white',
              }}
              icon={faCaretDown}
            />
            </div>
            {hasModal?
              (
                <>
                  <div className={styles.balloonContainer}>
                    <Balloon className={styles.balloon}>
                      <ul className={styles.balloonUl}>
                        <li
                          onClick={() => {
                            dispatch(toggleModal(hasModal));
                          }}
                        >
                          <Anchor to={'/upload'}><Txt>アップロード</Txt></Anchor>
                        </li>
                        <li
                          onClick={() => {
                            dispatch(toggleModal(hasModal));
                          }}
                        >
                          <Anchor to={'/users/profile'}><Txt>プロフィール</Txt></Anchor>
                        </li>
                        <li
                          onClick={() => {
                            dispatch(toggleModal(hasModal));
                            dispatch(clickLogout())
                          }}
                        >
                          <Txt>ログアウト</Txt>
                        </li>
                      </ul>
                    </Balloon>
                  </div>
                  <ModalBackground onClick={() => dispatch(toggleModal(hasModal))} />
                </>
              )
              : null}
          </>
        ),
        onClick: () => {hasModal || dispatch(toggleModal(hasModal))},
      }:
      {
        children: <WhiteTxt className={styles.twitter}><FontAwesomeIcon style={{marginRight: '5px'}} icon={faTwitter}/>ログイン</WhiteTxt>,
        onClick:() => dispatch(clickLogin()),
      },
  ];

  return (
    <header className={styles.header} {...props}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Anchor to={'/'} style={{height: 'inherit'}}><Logo style={{padding: '10px 0'}} /></Anchor>
          <HeaderMenu
            menuList={menuList}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
