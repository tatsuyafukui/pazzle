import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles from './landingMain.css';
import speakRectangle from '../../../public/images/speakRectangle.png';
import piece1 from '../../../public/images/piece1.svg';
import timeImage from '../../../public/images/timeImage.png';

import piece2 from '../../../public/images/piece2.svg';
import rankingImage from '../../../public/images/rankingImage.png';

import piece3 from '../../../public/images/piece3.svg';
import modeImage from '../../../public/images/modeImage.png';
import piece4 from '../../../public/images/piece4.svg';
import shareImage from '../../../public/images/shareImage.png';
import viewing from '../../../public/images/viewing.jpg';
import design from '../../../public/images/design.jpg';
import sara from '../../../public/images/sara.jpeg';
import cat from '../../../public/images/cat.jpg';
import fuji from '../../../public/images/fuji.jpg';
import obsidian from '../../../public/images/puzzle.png';

import { clickLogin } from '../../../modules/auth';
import { useDispatch } from 'react-redux';
import ScrollReveal, { setReveal,photoTypes } from '../../../config/scrollReveal';


const LandingMain: React.FC = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    setReveal();
    photoTypes()
    return () => {
      ScrollReveal().destroy()
    };
  }, []);

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
      <section className={styles.picturesSection}>
        <div className={styles.picturesSectionContainer}>
          <h2>Photo types ...</h2>
          <div className={styles.picturesSectionIcons}>
            <div className={styles.picturesSectionIconsItem}>
              <div className={styles.square}>
                <img src={viewing} id={'test'} />
                <div className={`${styles.circleBackground} ${styles.circleBackgroundBlue}`} />
              </div>
            </div>
            <div className={styles.picturesSectionIconsItem}>
              <div className={styles.square}>
                <img src={cat} id={'test'} />
                <div className={`${styles.circleBackground} ${styles.circleBackgroundPeople}`} />
              </div>
            </div>
            <div className={styles.picturesSectionIconsItem}>
              <div className={styles.square}>
                <img src={sara} id={'test'} />
                <div className={`${styles.circleBackground} ${styles.circleBackgroundOrange}`} />
              </div>
            </div>
            <div className={styles.picturesSectionIconsItem}>
              <div className={styles.square}>
                <img src={design} id={'test'} />
                <div className={`${styles.circleBackground} ${styles.circleBackgroundBlue}`} />
              </div>
            </div>
            <div className={styles.picturesSectionIconsItem}>
              <div className={styles.square}>
                <img src={fuji} id={'test'} />
                <div className={`${styles.circleBackground} ${styles.circleBackgroundPeople}`} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.picturesSectionUnderBody}>
          <div className={styles.picturesSectionUnderBodyContainer}>
            <p id={'test'}>
              景色、動物、模様、絵画、パズルに使う題材は自由自在。
              <br />
              お好きなものをアップしてゲームを楽しみましょう。
            </p>
          </div>
        </div>
      </section>
      <section className={styles.sectionOrange}>
        <div className={styles.sectionOrangeContainer}>
          <div className={styles.sectionOrangeBackground}>
            <div className={styles.sectionOrangeMessageBlock}>
              <div>
                <p>
                  没頭する時間。
                  <br />
                  作り上げる達成感。
                </p>
              </div>
              <div className={styles.sectionOrangeMessageBlockButton}>
                <button onClick={() => dispatch(clickLogin())}>
                  Get Started
                  <div />
                </button>
              </div>
            </div>
            <div className={styles.sectionOrangeAnimationBlock}>
              <div className={styles.near} />
              <div className={styles.middle} />
              <div className={styles.far} />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.messageSection} id={'puzzleSection'}>
        <div className={`${styles.trigger} ${styles.trigger1}`} id={'trigger1'} />
        <div className={`${styles.trigger} ${styles.trigger2}`} id={'trigger2'} />
        <div className={`${styles.trigger} ${styles.trigger3}`} id={'trigger3'} />
        <div className={`${styles.trigger} ${styles.trigger4}`} id={'trigger4'} />
        <div className={`${styles.trigger} ${styles.trigger5}`} id={'trigger5'} />
        <div className={`${styles.trigger} ${styles.trigger6}`} id={'trigger6'} />
        <div className={`${styles.trigger} ${styles.trigger7}`} id={'trigger7'} />
        <div className={`${styles.trigger} ${styles.trigger8}`} id={'trigger8'} />
        <div className={`${styles.trigger} ${styles.trigger9}`} id={'trigger9'} />
        <div className={`${styles.trigger} ${styles.trigger10}`} id={'trigger10'} />
        <div className={`${styles.trigger} ${styles.trigger11}`} id={'trigger11'} />
        <div className={`${styles.trigger} ${styles.trigger12}`} id={'trigger12'} />

        <div className={styles.messageSectionContainer}>
          <div className={styles.messageSectionInner}>
            <h2>作るのは楽しい！</h2>
            <div className={styles.messageSectionBlock}>
              <div className={styles.messageSectionHalfLeft}>
                <div className={styles.messageSectionHalfLeftInner}>
                  <div id={styles.flame1} className={styles.flame} />
                  <div id={styles.flame2} className={styles.flame} />
                  <div id={styles.flame3} className={styles.flame} />
                  <div id={styles.flame4} className={styles.flame} />
                  <div id={styles.flame5} className={styles.flame} />
                  <div id={styles.flame6} className={styles.flame} />
                  <div id={styles.flame7} className={styles.flame} />
                  <div id={styles.flame8} className={styles.flame} />
                  <div id={styles.flame9} className={styles.flame} />
                  <div id={styles.flame10} className={styles.flame} />
                  <div id={styles.flame11} className={styles.flame} />
                  <div id={styles.flame12} className={styles.flame} />
                </div>
              </div>
              <div className={styles.messageSectionHalfRight}>
                <div className={styles.messageSectionHalfRightText}>
                  <p>夢中で作った砂のダム。積み木で作ったお城。大したものじゃなかったけど、いつだって作ることは楽しかった！</p>
                  <p>
                    パズルを作るのに難しい知識ないです。ただピースをはめることに没頭する。それだけです！
                  </p>
                  <p>気がつけば日が暮れているような・。気がつけば夜が明けているような。あの感覚を少しだけ思い出せる、素敵な時間になりますように。</p>
                </div>
                <div className={styles.messageSectionHalfRightButton}>
                  <button onClick={() => dispatch(clickLogin())}>
                    Get Started
                    <div />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.underSection}>
        <div className={styles.underSectionContainer}>
          <div className={styles.underSectionInner}>
            <div className={styles.halfLeft}>
              <img src={obsidian} />
            </div>
            <div className={styles.halfRight}>
              <div className={styles.halfRightText}>
                <h2>さあ、一緒に作ろう!</h2>
              </div>
              <div className={styles.halfRightTextButton}>
                <button  onClick={() => dispatch(clickLogin())}>
                  Get Started
                  <div />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.underSectionEndBlock} />
      </section>
    </main>
  );
};

export default LandingMain;
