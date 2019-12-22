import React from 'react';
import styles from './styles.css';
import { Button } from '@material-ui/core';
import Heading from '../../atoms/Heading';
import { closeClearModal, INewRecordInfo } from '../../modules/ui';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

interface IProps extends React.AllHTMLAttributes<HTMLElement> {
  text?: string;
  image?: any;
  continuegamehandler?: () => void;
  othergamehandler?: () => void;
  info: INewRecordInfo;
}
const isPhone = (navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0;

const ClearModal: React.FC<IProps> = (props) => {

  const dispatch = useDispatch();

  const closeHandler = (event: any) => {
    const tagName = event.target.classList.contains(styles.root);
    if(!tagName) return;
    dispatch(closeClearModal());
  };

  const {
    endTime,
  } = props.info;

  return (
    <div
      className={styles.root}
      onClick={closeHandler}
    >
      <div className={styles.inner}>

        <div className={styles.content}>
          <div className={styles.contentHeading}>
            <Heading
              visualLevel={1}
              style={{fontSize: isPhone?'2.0rem':'2.4rem'}}
            >
              Congratulations!
            </Heading>
            <div className={styles.recordContainer}>
              <div>
                <Heading
                  visualLevel={1}
                  style={{fontSize: '2rem', color: '#fff'}}
                >
                  {endTime}
                </Heading>
              </div>
            </div>
            <Heading
              visualLevel={1}
              style={{
                fontSize: '1.2rem',
                color: '#fff',
                fontWeight: 'normal',
                marginTop: '24px'
              }}
            >
              みんなにシェアしよう！
            </Heading>
            <div className={styles.shareContainer}>
              <Button
                className={[styles.facebook, styles.shareButton].join(' ')}
                size={'large'}
                target={'_blank'}
                href={`https://www.facebook.com/share.php?u=${window.location}`}
              >
                <FontAwesomeIcon style={{ marginRight: '8px' }} icon={faFacebookF} />
              </Button>
              <Button
                className={[styles.twitter, styles.shareButton].join(' ')}
                size={'large'}
                target={'_blank'}
                href={`https://twitter.com/intent/tweet?text=パズルをクリアしました！新記録達成です！&url=${window.location}&hashtags=PuzzleGame&via=ingtaTsuya_0801`}
              >
                <FontAwesomeIcon style={{ marginRight: '8px' }} icon={faTwitter} />
              </Button>
              {/*<Button*/}
              {/*  className={[styles.instagram, styles.shareButton].join(' ')}*/}
              {/*  size={'large'}*/}
              {/*>*/}
              {/*  <FontAwesomeIcon style={{ marginRight: '8px' }} icon={faInstagram} />*/}
              {/*</Button>*/}
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            size={'large'}
            className={styles.otherGame}
            onClick={props.othergamehandler}
          >
            他のパズルを探す
          </Button>
          <Button
            size={'large'}
            className={styles.continueGame}
            onClick={props.continuegamehandler}
          >
            このまま遊ぶ
          </Button>
        </div>
      </div>
    </div>
  );
};

ClearModal.defaultProps = {
  continuegamehandler: () => {},
  othergamehandler: () => {},
};

export default ClearModal;


