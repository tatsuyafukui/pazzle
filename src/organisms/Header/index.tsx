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
import { toggleModal, toggleUploadModal } from '../../modules/ui';
import Anchor from '../../atoms/Anchor';
import UploadForm from '../UploadForm';
import Flash from '../../atoms/Flash';
const userSelector = (state: any) => state.authReducer.user;
const hasModalSelector = (state: any) => state.uiReducer.hasModal;
const hasUploadModalSelector = (state: any) => state.uiReducer.hasUploadModal;
const hasFlashSelector = (state: any) => state.uiReducer.hasFlash;
const flashMessageSelector = (state: any) => state.uiReducer.flashMessage;

interface IProps extends React.AllHTMLAttributes<HTMLElement> {
  history: {
    push(url: string): void;
  };
}

const Header: React.FC<IProps> = (props: any) => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const hasModal = useSelector(hasModalSelector);
  const hasUploadModal = useSelector(hasUploadModalSelector);
  const hasFlash = useSelector(hasFlashSelector);
  const flashMessage = useSelector(flashMessageSelector);

  const menuList = [
    user
      ? {
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
                  src={user ? user.photoURL.split('_normal').join('') : ''}
                />
                <FontAwesomeIcon
                  style={{
                    marginLeft: '5px',
                    color: 'white',
                  }}
                  icon={faCaretDown}
                />
              </div>
              {hasModal ? (
                <>
                  <div className={styles.balloonContainer}>
                    <Balloon className={styles.balloon}>
                      <ul className={styles.balloonUl}>
                        <li
                          onClick={() => {
                            dispatch(toggleModal(hasModal));
                            dispatch(toggleUploadModal(hasUploadModal));
                          }}
                        >
                          <Txt>新しいパズルを作成</Txt>
                        </li>
                        <li
                          onClick={() => {
                            props.history.push('/');
                            dispatch(toggleModal(hasModal));
                            dispatch(clickLogout());
                          }}
                        >
                          <Txt>ログアウト</Txt>
                        </li>
                      </ul>
                    </Balloon>
                  </div>
                  <ModalBackground onClick={() => dispatch(toggleModal(hasModal))} />
                </>
              ) : null}
            </>
          ),
          onClick: () => {
            hasModal || dispatch(toggleModal(hasModal));
          },
        }
      : {
          children: (
            <WhiteTxt className={styles.twitter}>
              <FontAwesomeIcon style={{ marginRight: '5px' }} icon={faTwitter} />
              ログイン
            </WhiteTxt>
          ),
          onClick: () => dispatch(clickLogin()),
        },
  ];

  return (
    <header className={styles.header} {...props}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Anchor to={'/'} style={{ height: 'inherit' }}>
            <Logo style={{ padding: '10px 0' }} />
          </Anchor>
          <HeaderMenu menuList={menuList} />
        </div>
      </div>
      <UploadForm hasUploadModal={hasUploadModal} />
      {hasFlash ? (
        <Flash count={4000}>
          <WhiteTxt>{flashMessage}</WhiteTxt>
        </Flash>
      ) : null}
    </header>
  );
};

export default Header;
