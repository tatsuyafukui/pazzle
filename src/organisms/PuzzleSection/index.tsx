import React, { useEffect } from 'react';
import * as styles from './styles.css';
import ScrollReveal from '../../config/scrollReveal';
import { clickLogin } from '../../modules/auth';
import { useDispatch } from 'react-redux';
import getStartedStyle from '../../molecules/getStartedButton/styles.css';
import GetStartedButton from '../../molecules/getStartedButton';
import { CreamTxt } from '../../atoms/Txt';
import Heading from '../../atoms/Heading';
import { ESize } from '../../types';

const PuzzleSection: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setReveal();
    return () => {
      // ScrollReveal().destroy();
    };
  }, []);
  return (
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
        <div>
          <Heading className={styles.heading}>作るのは楽しい！</Heading>
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
                {/*<CreamTxt>夢中で作った砂のダム。積み木で作ったお城。大したものじゃなかったけど、いつだって作ることは楽しい！</CreamTxt>*/}
                <CreamTxt fontSize={ESize.l} >パズルを作るのに難しい知識は必要なし。ただピースをはめることに没頭しよう！</CreamTxt>
                <CreamTxt fontSize={ESize.l}>気がつけば日が暮れているような、気がつけば夜が明けているような、素敵な時間になりますように！</CreamTxt>
              </div>
              <GetStartedButton
                onClick={() => {dispatch(clickLogin())}}
                className={getStartedStyle.messageSectionHalfRightButton}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PuzzleSection;

const setReveal = () => {
  const windowHeight = window.innerHeight;
  const puzzleSection = document.getElementById('puzzleSection');
  if (!puzzleSection) return;
  const diff = Math.floor(puzzleSection.clientHeight * 0.045);
  const center = Math.floor(windowHeight / 2);

  ScrollReveal({
    reset: true,
    duration: 10,
    viewOffset: { bottom: center, top: center - diff },
  });
  ScrollReveal().reveal(`#trigger1`, {
    viewOffset: { bottom: 0 },
    afterReveal: () => {
      const flame1: any = document.getElementById(styles.flame1);
      if(flame1){
        flame1.classList.remove(styles.flameActive);
      }    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame1);
      if(flame1){
        flame1.classList.remove(styles.flameActive);
      }    },
  });

  ScrollReveal().reveal(`#trigger2`, {
    afterReveal: () => {
      const flame1: any = document.getElementById(styles.flame2);
      flame1.classList.add(styles.flameActive);
    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame2);
      if(flame1){
        flame1.classList.remove(styles.flameActive);
      }    },
  });

  ScrollReveal().reveal(`#trigger3`, {
    afterReveal: () => {
      const flame1: any = document.getElementById(styles.flame3);
      flame1.classList.add(styles.flameActive);
    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame3);
      if(flame1){
        flame1.classList.remove(styles.flameActive);
      }    },
  });
  ScrollReveal().reveal(`#trigger4`, {
    afterReveal: () => {
      const flame1: any = document.getElementById(styles.flame4);
      flame1.classList.add(styles.flameActive);
    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame4);
      if(flame1){
        flame1.classList.remove(styles.flameActive);
      }    },
  });
  ScrollReveal().reveal(`#trigger5`, {
    afterReveal: () => {
      const flame1: any = document.getElementById(styles.flame5);
      flame1.classList.add(styles.flameActive);
    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame5);
      if(flame1){
        flame1.classList.remove(styles.flameActive);
      }    },
  });
  ScrollReveal().reveal(`#trigger6`, {
    afterReveal: () => {
      const flame1: any = document.getElementById(styles.flame6);
      flame1.classList.add(styles.flameActive);
    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame6);
      if(flame1){
        flame1.classList.remove(styles.flameActive);
      }    },
  });
  ScrollReveal().reveal(`#trigger7`, {
    afterReveal: () => {
      const flame1: any = document.getElementById(styles.flame7);
      flame1.classList.add(styles.flameActive);
    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame7);
      if(flame1){
        flame1.classList.remove(styles.flameActive);
      }    },
  });
  ScrollReveal().reveal(`#trigger8`, {
    afterReveal: () => {
      const flame1: any = document.getElementById(styles.flame8);
      flame1.classList.add(styles.flameActive);
    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame8);
      if(flame1){
        flame1.classList.remove(styles.flameActive);
      }    },
  });
  ScrollReveal().reveal(`#trigger9`, {
    afterReveal: () => {
      const flame1: any = document.getElementById(styles.flame9);
      flame1.classList.add(styles.flameActive);
    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame9);
      if(flame1){
        flame1.classList.remove(styles.flameActive);
      }    },
  });
  ScrollReveal().reveal(`#trigger10`, {
    afterReveal: () => {
      const flame1: any = document.getElementById(styles.flame10);
      flame1.classList.add(styles.flameActive);
    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame10);
      if(flame1){
        flame1.classList.remove(styles.flameActive);
      }    },
  });
  ScrollReveal().reveal(`#trigger11`, {
    afterReveal: () => {
      const flame1: any = document.getElementById(styles.flame11);
      flame1.classList.add(styles.flameActive);
    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame11);
      if(flame1){
        flame1.classList.remove(styles.flameActive);
      }    },
  });
  ScrollReveal().reveal(`#trigger12`, {
    viewOffset: { top: -500 },
    beforeReveal: () => {
      const flame1: any = document.getElementById(styles.flame12);
      flame1.classList.add(styles.flameActive);
    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame12);
      if(flame1){
        flame1.classList.remove(styles.flameActive);
      }

    },
  });
};
