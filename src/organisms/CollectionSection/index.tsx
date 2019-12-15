import React, { useEffect } from 'react';
import * as styles from './styles.css';
import viewing from '../../public/images/viewing.jpg';
import cat from '../../public/images/cat.jpg';
import sara from '../../public/images/sara.jpeg';
import design from '../../public/images/design.jpg';
import fuji from '../../public/images/fuji.jpg';
import { photoTypes } from '../../config/scrollReveal';
import Heading from '../../atoms/Heading';
import Img from '../../atoms/Img';
import { CreamTxt } from '../../atoms/Txt';
import Section from '../../molecules/Section';

const CollectionSection: React.FC = () => {
  useEffect(() => {
    photoTypes();
    return () => {
      // ScrollReveal().destroy()
    };
  }, []);

  const images = [
    { background: styles.circleBackgroundBlue, image: viewing },
    { background: styles.circleBackgroundPeople, image: cat },
    { background: styles.circleBackgroundOrange, image: sara },
    { background: styles.circleBackgroundBlue, image: design },
    { background: styles.circleBackgroundPeople, image: fuji },
  ].map((item, i) => (
    <div key={i} className={styles.picturesSectionIconsItem}>
      <div className={styles.square}>
        <Img src={item.image} id={'test'} />
        <div className={`${styles.circleBackground} ${item.background}`} />
      </div>
    </div>
  ));

  return (
    <Section>
      <div className={styles.picturesSectionContainer}>
        <Heading className={styles.heading}>パズルの種類がたくさん！</Heading>
        <div className={styles.picturesSectionIcons}>{images}</div>
      </div>
      <div className={styles.picturesSectionUnderBody}>
        <div className={styles.picturesSectionUnderBodyContainer}>
          <CreamTxt id={'test'}>
            景色、動物、模様、絵画、<span className={styles.br} />パズルに使う題材は自由自在。
            <br />
            好きな画像をアップして<span className={styles.br} />ゲームを楽しもう！
          </CreamTxt>
        </div>
      </div>
    </Section>
  );
};

export default CollectionSection;
