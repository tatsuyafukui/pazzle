import React, { ChangeEvent, FormEvent, FormEventHandler, useEffect, useState } from 'react';
import { gameStart, changeMode, gameEnd, updateTime, gameCancel } from '../../modules/pieses';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.css';

import { createCanvasList, createStartColumns, shuffleArray } from '../../lib/canvas';
import Button from '../../atoms/Button';
import Txt from '../../atoms/Txt';
import { EMode, ESize } from '../../types';

const imageSelector = (state: any) => state.collectionReducer.activeImage;
const startTimeSelector = (state: any) => state.pieceReducer.interval;

interface IProps {
  imageId: string;
  mode: number;
}

const GameStartForm: React.FC<IProps> = props => {
  const dispatch = useDispatch();
  const image = useSelector(imageSelector);
  const interval = useSelector(startTimeSelector);

  useEffect(() => {
    return () => {
      clearInterval(interval);
      // dispatch(gameCancel());
    };
  }, [interval]);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const modeNumber = parseInt(event.target.value);
    dispatch(changeMode(modeNumber));
  };

  const startSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.addEventListener('load', () => {
      const canvasList = createCanvasList(img, props.mode);
      const afterShuffleCanvasList = shuffleArray(canvasList);
      const StartColumns = createStartColumns(props.mode, afterShuffleCanvasList);
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
            <label className={`${styles.label} ${props.mode === EMode.easy ? styles.active : null}`}>
              <input
                type="radio"
                name="mode"
                value={3}
                className={`${styles.easy} ${styles.radio}`}
                checked={props.mode === EMode.easy}
                onChange={changeHandler}
              />
              <Txt fontSize={ESize.s} style={{ color: 'white' }}>
                Easy
              </Txt>
            </label>
            <label className={`${styles.label} ${props.mode === EMode.normal ? styles.active : null}`}>
              <input
                type="radio"
                name="mode"
                value={6}
                className={`${styles.normal} ${styles.radio}`}
                onChange={changeHandler}
                checked={props.mode === EMode.normal}
              />
              <Txt fontSize={ESize.s} style={{ color: 'white' }}>
                Normal
              </Txt>
            </label>
            <label className={`${styles.label} ${props.mode === EMode.hard ? styles.active : null}`}>
              <input
                type="radio"
                name="mode"
                value={10}
                className={`${styles.hard} ${styles.radio}`}
                onChange={changeHandler}
                checked={props.mode === EMode.hard}
              />
              <Txt fontSize={ESize.s} style={{ color: 'white' }}>
                Hard
              </Txt>
            </label>
          </div>
        </div>
        <Button className={`${styles.submit} ${styles.startBtn}`} type={'submit'}>
          ゲームスタート
        </Button>
      </form>
    </div>
  );
};

export default GameStartForm;
