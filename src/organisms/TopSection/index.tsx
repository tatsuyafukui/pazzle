import React from 'react';
import * as styles from './styles.css';
import piece1 from '../../public/images/piece1.svg';
import piece2 from '../../public/images/piece2.svg';
import piece4 from '../../public/images/piece4.svg';
import piece3 from '../../public/images/piece3.svg';
import Img from '../../atoms/Img';
import Txt from '../../atoms/Txt';
import TitleContent from '../TitleContent';

const TopSection: React.FC = () => {
  const pieces = [
    {style: styles.piece1, image: piece1, text: "最速クリアタイムを目指そう！", styleImage: styles.time},
    {style: styles.piece2, image: piece2, text: "目指せランキング１位！", styleImage: styles.ranking},
    {style: styles.piece3, image: piece3, text: "難易度は３つから選べます！", styleImage: styles.mode},
    {style: styles.piece4, image: piece4, text: "完成したパズルとクリアタイムをSNSでシェアしよう！", styleImage: styles.share},
  ].map((item, i) => (
    <div key={i}>
      <div className={`${item.styleImage} ${styles.future}`}>
        <Txt>{item.text}</Txt>
      </div>
      <div className={item.style}>
        <Img src={item.image} alt={'test'} />
      </div>
    </div>
  ));

  return (
    <section className={styles.section}>
      <div>
        <div className={styles.inner}>
          <div className={styles.innerContents}>
            <TitleContent/>
            {pieces}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
