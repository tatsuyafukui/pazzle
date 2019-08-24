import ScrollReveal from 'scrollreveal';

export const photoTypes = () => {
  ScrollReveal().reveal(`#test`, {
    viewOffset: { bottom: 200 , top: 0},
    duration: 600,
    interval: 200,
    reset: false,
  });
};

export default ScrollReveal;
