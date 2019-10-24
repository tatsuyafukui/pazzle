import React from 'react';
import styles from './styles.css';
import { InfoTxt } from '../../atoms/Txt';
import { Button } from '@material-ui/core';
import Heading from '../../atoms/Heading';
import { closeConfirm } from '../../modules/ui';
import { useDispatch } from 'react-redux';

interface IProps extends React.AllHTMLAttributes<HTMLElement> {
  heading: string;
  text?: string;
  okClick?: () => void;
  cancelClick?: () => void;
}

const ConfirmModal: React.FC<IProps> = (props) => {

  const dispatch = useDispatch();

  const closeHandler = (event: any) => {
    const tagName = event.target.classList.contains(styles.root);
    if(!tagName) return;
    dispatch(closeConfirm());
  };

  return (
    <div
      className={styles.root}
      onClick={closeHandler}
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.contentHeading}>
            <Heading
              visualLevel={3}
              style={{color: '#8c8c8c', fontWeight: 'normal'}}
            >
              {props.heading}
            </Heading>
            <InfoTxt>{props.text}</InfoTxt>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            className={styles.no}
            size={'large'}
            onClick={props.cancelClick}
          >
            CANCEL
          </Button>
          <Button
            className={`${styles.yes}`}
            size={'large'}
            onClick={props.okClick}
          >
            OK
          </Button>
        </div>
      </div>
    </div>
  );
};

ConfirmModal.defaultProps = {
  okClick: () => {},
  cancelClick: () => {},
};

export default ConfirmModal;


