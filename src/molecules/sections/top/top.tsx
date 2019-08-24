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
import GetStartedButton from '../../../atoms/Button/getStartedButton';
import getStartedStyle from '../../../atoms/Button/getStartedButton/index.css';

const TopSection: React.FC = () => {
  const dispatch = useDispatch();

  const floatContents = [
    {style: styles.timePeace, image: timeImage},
    {style: styles.rankingPeace, image: rankingImage},
    {style: styles.modePeace, image: modeImage},
    {style: styles.sharePeace, image: shareImage},
  ].map((item, i) => (
    <div key={i} className={item.style}>
      <img src={item.image} alt={item.image} />
    </div>
  ));

  const pieces = [
    {style: styles.piece1, image: piece1, text: "最速クリアタイムを目指そう！", styleImage: styles.time},
    {style: styles.piece2, image: piece2, text: "目指せランキング１位！", styleImage: styles.ranking},
    {style: styles.piece3, image: piece3, text: "難易度は３つから選べます！", styleImage: styles.mode},
    {style: styles.piece4, image: piece4, text: "完成したパズルとクリアタイムをSNSでシェアしよう！", styleImage: styles.share},
  ].map((item, i) => (
    <>
      <div className={`${item.styleImage} ${styles.future}`}>
        <span>{item.text}</span>
        <img src={speakRectangle} alt={speakRectangle} />
      </div>
      <div key={i} className={item.style}>
        <img src={item.image} alt={'test'} />
      </div>
    </>
  ));

  return (
    <section className={styles.section}>
      <div>
        <div className={styles.inner}>
          <div className={styles.innerContents}>
            <div className={styles.middleContents}>
              <h1>Welcome to Puzzle Game.</h1>
              <GetStartedButton
                onClick={() => {dispatch(clickLogin())}}
                className={getStartedStyle.landingLogin}
              />
            </div>
            {pieces}
          </div>
          <div className={styles.floatContents}>
            {floatContents}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
