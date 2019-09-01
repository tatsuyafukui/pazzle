import React, { ChangeEvent, FormEvent, FormEventHandler, useEffect, useState } from 'react';
import Select from '../../../atoms/Form/Select/select';
import { gameStart, changeColumns, changeMode, gameEnd, updateTime } from '../../../modules/pieses';
import { useDispatch, useSelector, useStore } from 'react-redux';
import styles from './startForm.css';
import selectColor from '../../../atoms/Form/Select/select.css';

import { createCanvasList, createStartColumns, shuffleArray } from '../../../lib/canvas';
import Button from '../../../atoms/Button';
import Spinner from '../../../atoms/Spinner/Spinner';
import { activeImage } from '../../../modules/collection';

const modeSelector = (state: any) => state.pieceReducer.mode;
const imageSelector = (state: any) => state.collectionReducer.activeImage;
const userSelector = (state: any) => state.authReducer.user;

const startTimeSelector = (state: any) => state.pieceReducer.startTime;
const playingTimeSelector = (state: any) => state.pieceReducer.playing;

interface IProps {
  imageId: string;
}

const StartForm: React.FC<IProps> = props => {
  const dispatch = useDispatch();
  const image = useSelector(imageSelector);
  const mode = useSelector(modeSelector);
  const user = useSelector(userSelector);
  const startTime = useSelector(startTimeSelector);
  const playing = useSelector(playingTimeSelector);

  useEffect(() => {
    dispatch(activeImage(user.uid, props.imageId));
  }, [dispatch, props.imageId, user.uid]);

  const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
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
      // setInterval(() => {
      //   dispatch(updateTime(Date.now() - startTime))
      // }, 10);
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

  const gameEndHandler = (event: any) => {
    dispatch(gameEnd());
  };

  let color = '';
  if (mode === 3) color = selectColor.easy;
  if (mode === 6) color = selectColor.normal;
  if (mode === 9) color = selectColor.hard;

  if (image === null || image === undefined) {
    return <Spinner />;
  }

  return (
    <form className={styles.startForm} onSubmit={startSubmitHandler}>
      <div className={styles.menuItem}>
        <img src={image.path} id={'img'} />
      </div>
      <div className={styles.menuItem}>
        <Select
          onChange={changeHandler}
          options={[{ value: 3, content: 'EASY' }, { value: 6, content: 'NORMAL' }, { value: 9, content: 'HARD' }]}
          color={color}
        />
      </div>
      <div className={styles.menuItem}>
        <Button type={'submit'}>ゲームスタート</Button>
      </div>
      <div className={styles.menuItem}>
        <Button color={'red'} type={'button'} onClick={gameEndHandler}>
          ゲームエンド
        </Button>
      </div>
    </form>
  );
};

export default StartForm;
