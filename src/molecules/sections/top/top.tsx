import React from 'react';
import * as styles from './top.css';
import { clickLogin } from '../../../modules/auth';
import speakRectangle from '../../../public/images/speakRectangle.png';
import piece1 from '../../../public/images/piece1.svg';
import piece2 from '../../../public/images/piece2.svg';
import piece4 from '../../../public/images/piece4.svg';
import piece3 from '../../../public/images/piece3.svg';
import timeImage from '../../../public/images/timeImage.png';
import rankingImage from '../../../public/images/rankingImage.png';
import modeImage from '../../../public/images/modeImage.png';
import shareImage from '../../../public/images/shareImage.png';
import { useDispatch } from 'react-redux';

const TopSection: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <section className={styles.section}>
      <div>
        <div className={styles.inner}>
          <div className={styles.innerContents}>
            <div className={styles.middleContents}>
              <h1>Welcome to Puzzle Game.</h1>
              <div className={styles.landingLogin}>
                <button onClick={() => dispatch(clickLogin())}>
                  <div />
                  Get Started
                </button>
              </div>
            </div>
            <div className={`${styles.time} ${styles.future}`}>
              <span>最速クリアタイムを目指そう！</span>
              <img src={speakRectangle} alt={speakRectangle} />
            </div>
            <div className={styles.piece1}>
              <img src={piece1} alt={'test'} />
            </div>
            <div className={`${styles.ranking} ${styles.future}`}>
              <span>目指せランキング１位！</span>
              <img src={speakRectangle} alt={speakRectangle} />
            </div>
            <div className={styles.piece2}>
              <img src={piece2} alt={'test'} />
            </div>
            <div className={`${styles.mode} ${styles.future}`}>
              <span>難易度は３つから選べます！</span>
              <img src={speakRectangle} alt={speakRectangle} />
            </div>
            <div className={styles.piece3}>
              <img src={piece4} alt={'test'} />
            </div>
            <div className={`${styles.share} ${styles.future}`}>
                <span>
                  完成したパズルとクリアタイムを
                  <br />
                  SNSでシェアしよう！
                </span>
              <img src={speakRectangle} alt={speakRectangle} />
            </div>
            <div className={styles.piece4}>
              <img src={piece3} alt={piece3} />
            </div>
          </div>
          <div className={styles.floatContents}>
            <div className={styles.timePeace}>
              <img src={timeImage} alt={timeImage} />
            </div>
            <div className={styles.rankingPeace}>
              <img src={rankingImage} alt={rankingImage} />
            </div>
            <div className={styles.modePeace}>
              <img src={modeImage} alt={modeImage} />
            </div>
            <div className={styles.sharePeace}>
              <img src={shareImage} alt={shareImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
