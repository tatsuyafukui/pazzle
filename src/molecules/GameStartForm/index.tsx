import React, { ChangeEvent, FormEvent, FormEventHandler, useEffect, useState } from 'react';
import { gameStart, changeMode, gameEnd, updateTime } from '../../modules/pieses';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.css';

import { createCanvasList, createStartColumns, shuffleArray } from '../../lib/canvas';
import Button from '../../atoms/Button';
import Txt from '../../atoms/Txt';
import { ESize } from '../../types';

const modeSelector = (state: any) => state.pieceReducer.mode;
const imageSelector = (state: any) => state.collectionReducer.activeImage;

interface IProps {
  imageId: string;
}

const GameStartForm: React.FC<IProps> = props => {
  const dispatch = useDispatch();
  const image = useSelector(imageSelector);
  const mode = useSelector(modeSelector);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const modeNumber = parseInt(event.target.value);
    dispatch(changeMode(modeNumber));
  };

  const startSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.addEventListener('load', () => {
      const canvasList = createCanvasList(img, mode);
      const afterShuffleCanvasList = shuffleArray(canvasList);
      const StartColumns = createStartColumns(mode, afterShuffleCanvasList);
      const startTime = Date.now();
      dispatch(
        gameStart(
          StartColumns,
          setInterval(() => {
            dispatch(updateTime(Date.now() - startTime));
          }, 10)
        )
      );
    });
    img.src = image.path;
  };

  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={startSubmitHandler}>
        <div className={styles.selectMode}>
          <div className={styles.mode}>
            <label className={`${styles.label} ${mode === 3? styles.active:null}`}>
              <input
                type="radio"
                name="mode"
                value={3}
                className={`${styles.easy} ${styles.radio}`}
                checked={mode === 3}
                onChange={changeHandler}
              />
              <Txt fontSize={ESize.s} style={{color: 'white'}}>Easy</Txt>
            </label>
            <label className={`${styles.label} ${mode === 6? styles.active:null}`}>
              <input
                type="radio"
                name="mode"
                value={6}
                className={`${styles.normal} ${styles.radio}`}
                onChange={changeHandler}
                checked={mode === 6}
              />
              <Txt fontSize={ESize.s} style={{color: 'white'}}>Normal</Txt>
            </label>
            <label className={`${styles.label} ${mode === 9? styles.active:null}`}>
              <input
                type="radio"
                name="mode"
                value={9}
                className={`${styles.hard} ${styles.radio}`}
                onChange={changeHandler}
                checked={mode === 9}
              />
              <Txt fontSize={ESize.s} style={{color: 'white'}}>Hard</Txt>
            </label>
          </div>
        </div>
        <Button
          className={`${styles.submit} ${styles.startBtn}`}
          type={'submit'}>
          ゲームスタート
        </Button>
      </form>
    </div>
  );
};

export default GameStartForm;
