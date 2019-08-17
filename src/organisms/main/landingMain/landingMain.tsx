import React from 'react';
import styles from './landingMain.css';
import speakRectangle from '../../../public/images/speakRectangle.png'
import piece1 from '../../../public/images/piece1.svg'
import timeImage from '../../../public/images/timeImage.png'

import piece2 from '../../../public/images/piece2.svg'
import rankingImage from '../../../public/images/rankingImage.png'

import piece3 from '../../../public/images/piece3.svg'
import modeImage from '../../../public/images/modeImage.png'
import piece4 from '../../../public/images/piece4.svg'
import shareImage from '../../../public/images/shareImage.png'
import { clickLogin } from '../../../modules/auth';
import { useDispatch } from 'react-redux';

interface IProps {
  title: string;
}

const LandingMain: React.FC = props => {
  const dispatch = useDispatch();

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div>
          <div className={styles.inner}>
            <div className={styles.innerContents}>
              <div className={styles.middleContents}>
                <h1>Welcome to Puzzle Game.</h1>
                <div className={styles.landingLogin}>
                  <button onClick={() => dispatch(clickLogin())}>
                    <div/>
                    Get Started
                  </button>
                </div>
              </div>
              <div className={`${styles.time} ${styles.future}`}>
                <span>Time attack.</span>
                <img src={speakRectangle} />
              </div>
              <div className={styles.piece1}>
                <img src={piece1}/>
              </div>
              <div className={`${styles.ranking} ${styles.future}`}>
                <span>Enjoy ranking battles<br/> of cleared times.</span>
                <img src={speakRectangle} />
              </div>
              <div className={styles.piece2}>
                <img src={piece2}/>
              </div>
              <div className={`${styles.mode} ${styles.future}`}>
                <span>Three difficulty <br/>levels are available.</span>
                <img src={speakRectangle} />
              </div>
              <div className={styles.piece3}>
                <img src={piece4}/>
              </div>
              <div className={`${styles.share} ${styles.future}`}>
                <span>Share results to social media.</span>
                <img src={speakRectangle} />
              </div>
              <div className={styles.piece4}>
                <img src={piece3}/>
              </div>
            </div>
          </div>
          <div className={styles.floatContents}>
            <div className={styles.timePeace}>
              <img src={timeImage}/>
            </div>
            <div className={styles.rankingPeace}>
              <img src={rankingImage}/>
            </div>
            <div className={styles.modePeace}>
              <img src={modeImage}/>
            </div>
            <div className={styles.sharePeace}>
              <img src={shareImage}/>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingMain;
