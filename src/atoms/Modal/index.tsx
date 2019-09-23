import React from 'react';
import styles from './styles.css';

interface IProps extends React.AllHTMLAttributes<HTMLElement> {
  hasShow: boolean;
}

const Modal: React.FC<IProps> = props => (
  <div
    className={[props.hasShow ? styles.rootShow : styles.rootHidden, props.hasShow ? styles.show : styles.hidden].join(
      ' '
    )}
  >
    <div className={styles.inner}>{props.children}</div>
    <div className={styles.modalBackground} onClick={props.onClick} />
  </div>
);

export default Modal;
