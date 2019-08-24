import ScrollReveal from 'scrollreveal';
import styles from '../organisms/main/landingMain/landingMain.css';

export const setReveal = () => {
  const windowHeight = window.innerHeight;
  const puzzleSection = document.getElementById('puzzleSection');
  if (!puzzleSection) return;
  const diff = Math.floor(puzzleSection.clientHeight * 0.05) + 10;
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
      flame1.classList.add(styles.flameActive);
    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame1);
      flame1.classList.remove(styles.flameActive);
    },
  });

  ScrollReveal().reveal(`#trigger2`, {
    afterReveal: () => {
      const flame1: any = document.getElementById(styles.flame2);
      flame1.classList.add(styles.flameActive);
    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame2);
      flame1.classList.remove(styles.flameActive);
    },
  });

  ScrollReveal().reveal(`#trigger3`, {
    afterReveal: () => {
      const flame1: any = document.getElementById(styles.flame3);
      flame1.classList.add(styles.flameActive);
    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame3);
      flame1.classList.remove(styles.flameActive);
    },
  });
  ScrollReveal().reveal(`#trigger4`, {
    afterReveal: () => {
      const flame1: any = document.getElementById(styles.flame4);
      flame1.classList.add(styles.flameActive);
    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame4);
      flame1.classList.remove(styles.flameActive);
    },
  });
  ScrollReveal().reveal(`#trigger5`, {
    afterReveal: () => {
      const flame1: any = document.getElementById(styles.flame5);
      flame1.classList.add(styles.flameActive);
    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame5);
      flame1.classList.remove(styles.flameActive);
    },
  });
  ScrollReveal().reveal(`#trigger6`, {
    afterReveal: () => {
      const flame1: any = document.getElementById(styles.flame6);
      flame1.classList.add(styles.flameActive);
    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame6);
      flame1.classList.remove(styles.flameActive);
    },
  });
  ScrollReveal().reveal(`#trigger7`, {
    afterReveal: () => {
      const flame1: any = document.getElementById(styles.flame7);
      flame1.classList.add(styles.flameActive);
    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame7);
      flame1.classList.remove(styles.flameActive);
    },
  });
  ScrollReveal().reveal(`#trigger8`, {
    afterReveal: () => {
      const flame1: any = document.getElementById(styles.flame8);
      flame1.classList.add(styles.flameActive);
    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame8);
      flame1.classList.remove(styles.flameActive);
    },
  });
  ScrollReveal().reveal(`#trigger9`, {
    afterReveal: () => {
      const flame1: any = document.getElementById(styles.flame9);
      flame1.classList.add(styles.flameActive);
    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame9);
      flame1.classList.remove(styles.flameActive);
    },
  });
  ScrollReveal().reveal(`#trigger10`, {
    afterReveal: () => {
      const flame1: any = document.getElementById(styles.flame10);
      flame1.classList.add(styles.flameActive);
    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame10);
      flame1.classList.remove(styles.flameActive);
    },
  });
  ScrollReveal().reveal(`#trigger11`, {
    afterReveal: () => {
      const flame1: any = document.getElementById(styles.flame11);
      flame1.classList.add(styles.flameActive);
    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame11);
      flame1.classList.remove(styles.flameActive);
    },
  });
  ScrollReveal().reveal(`#trigger12`, {
    viewOffset: { top: -500 },
    beforeReveal: () => {
      const flame1: any = document.getElementById(styles.flame12);
      flame1.classList.add(styles.flameActive);
    },
    afterReset: () => {
      const flame1: any = document.getElementById(styles.flame12);
      flame1.classList.remove(styles.flameActive);
    },
  });
};

export const photoTypes = () => {
  ScrollReveal().reveal(`#test`, {
    viewOffset: { bottom: 200 , top: 0},
    duration: 600,
    interval: 200,
    reset: false,
  });
};

export default ScrollReveal;
