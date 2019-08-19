import React, { useEffect, useLayoutEffect, useState } from 'react';
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
import viewing from '../../../public/images/viewing.jpg'
import character from '../../../public/images/charactor.jpg'
import design from '../../../public/images/design.jpg'
import picture from '../../../public/images/picture.jpg'
import sara from '../../../public/images/sara.jpeg'
import cat from '../../../public/images/cat.jpg'
import fuji from '../../../public/images/fuji.jpg'

import { clickLogin } from '../../../modules/auth';
import { useDispatch, useStore } from 'react-redux';

interface IProps {
  title: string;
}

const LandingMain: React.FC = props => {
  const dispatch = useDispatch();

  useEffect(() => {

    window.addEventListener('scroll',a)
    return () => {
      window.removeEventListener('scroll', a);
    }
  },[])

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
                <span>最速クリアタイムを目指そう！</span>
                <img src={speakRectangle} alt={'test'} />
              </div>
              <div className={styles.piece1}>
                <img src={piece1} alt={'test'}/>
              </div>
              <div className={`${styles.ranking} ${styles.future}`}>
                <span>目指せランキング１位！</span>
                <img src={speakRectangle} alt={'test'} />
              </div>
              <div className={styles.piece2}>
                <img src={piece2} alt={'test'}/>
              </div>
              <div className={`${styles.mode} ${styles.future}`}>
                <span>難易度は３つから選べます！</span>
                <img src={speakRectangle} alt={'test'} />
              </div>
              <div className={styles.piece3}>
                <img src={piece4} alt={'test'}/>
              </div>
              <div className={`${styles.share} ${styles.future}`}>
                <span>完成したパズルとクリアタイムを<br/>SNSでシェアしよう！</span>
                <img src={speakRectangle}  alt={'test'}/>
              </div>
              <div className={styles.piece4}>
                <img src={piece3} alt={'test'}/>
              </div>
            </div>
          </div>
          <div className={styles.floatContents}>
            <div className={styles.timePeace}>
              <img src={timeImage} alt={'test'}/>
            </div>
            <div className={styles.rankingPeace}>
              <img src={rankingImage} alt={'test'}/>
            </div>
            <div className={styles.modePeace}>
              <img src={modeImage} alt={'test'}/>
            </div>
            <div className={styles.sharePeace}>
              <img src={shareImage} alt={'test'} />
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
                <img src={viewing} id={'test1'}/>
                <div className={`${styles.circleBackground} ${styles.circleBackgroundBlue}`}/>
              </div>
            </div>
            <div className={styles.picturesSectionIconsItem}>
              <div className={styles.square}>
                <img src={cat}  id={'test2'}/>
                <div className={`${styles.circleBackground} ${styles.circleBackgroundPeople}`}/>
              </div>
            </div>
            <div className={styles.picturesSectionIconsItem}>
              <div className={styles.square}>
                <img src={sara} id={'test3'} />
                <div className={`${styles.circleBackground} ${styles.circleBackgroundOrange}`}/>
              </div>
            </div>
            <div className={styles.picturesSectionIconsItem}>
              <div className={styles.square}>
                <img src={design}  id={'test4'}/>
                <div className={`${styles.circleBackground} ${styles.circleBackgroundBlue}`}/>
              </div>
            </div>
            <div className={styles.picturesSectionIconsItem}>
              <div className={styles.square}>
                <img src={fuji}  id={'test5'}/>
                <div className={`${styles.circleBackground} ${styles.circleBackgroundPeople}`}/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.picturesSectionUnderBody}>
          <div className={styles.picturesSectionUnderBodyContainer}>
            <p id={'test6'}>景色、動物、模様、絵画、パズルに使う題材は自由自在。<br/>
              お好きなものをアップしてゲームを楽しみましょう。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingMain;

const grayscale = async (image: any) => {
  var canvas = document.createElement("canvas");
  var ctx: any = canvas.getContext("2d");
  var img = new Image();

  const url = await img.addEventListener('load', (e) => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    var pixels: any = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (var y: number = 0; y < pixels.height; y++) {
      for (var x : number= 0; x < pixels.width; x++) {
        var i: number = (y * 4) * pixels.width + x * 4;
        var rgb: number = (pixels.data[i] + pixels.data[i + 1] + pixels.data[i + 2]) / 3;
        pixels.data[i] = rgb;
        pixels.data[i + 1] = rgb;
        pixels.data[i + 2] = rgb;
      }
    }
    ctx.putImageData(pixels, 0, 0, 0, 0, pixels.width, pixels.height);

    // 画像を差し替える
    console.log(canvas.toDataURL())
    return canvas.toDataURL();
  });
  img.src = image
};

const a = (event: any) => {
  const lastScrollY = window.scrollY;//316
  if(lastScrollY < 300) {
    return;
  }

  if(lastScrollY >= 336) {
    const test: any = document.getElementById('test1');
    test.classList.add(styles.open);
  }else{
    const test: any = document.getElementById('test1');
    test.classList.remove(styles.open);
  }

  if(lastScrollY >= 380) {
    const test: any = document.getElementById('test2');
    test.classList.add(styles.open);
  }else{
    const test: any = document.getElementById('test2');
    test.classList.remove(styles.open);
  }

  if(lastScrollY >= 430) {
    const test: any = document.getElementById('test3');
    test.classList.add(styles.open);
  }else{
    const test: any = document.getElementById('test3');
    test.classList.remove(styles.open);
  }

  if(lastScrollY >= 470) {
    const test: any = document.getElementById('test4');
    test.classList.add(styles.open);
  }else{
    const test: any = document.getElementById('test4');
    test.classList.remove(styles.open);
  }

  if(lastScrollY >= 525) {
    const test: any = document.getElementById('test5');
    test.classList.add(styles.open);
  }else{
    const test: any = document.getElementById('test5');
    test.classList.remove(styles.open);
  }

  if(lastScrollY >= 600) {
    const test: any = document.getElementById('test6');
    test.classList.add(styles.open);
  }else{
    const test: any = document.getElementById('test6');
    test.classList.remove(styles.open);
  }
};
