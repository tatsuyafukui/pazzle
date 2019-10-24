import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { gameStart, changeMode, updateTime, gameCancel } from '../../modules/pieses';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.css';

import { createCanvasList, createStartColumns, shuffleArray } from '../../lib/canvas';
import Button from '../../atoms/Button';
import Txt from '../../atoms/Txt';
import { EMode, ESize } from '../../types';
import { closeConfirm, openConfirm } from '../../modules/ui';
import ConfirmModal from '../../organisms/ConfirmModal';

const imageSelector = (state: any) => state.collectionReducer.activeImage;
const startTimeSelector = (state: any) => state.pieceReducer.interval;
const playingSelector = (state: any) => state.pieceReducer.playing;
const confirmSelector = (state: any) => state.uiReducer.showConfirm;

interface IProps {
  mode: number;
}

const GameStartForm: React.FC<IProps> = props => {
  const dispatch = useDispatch();
  const image = useSelector(imageSelector);
  const interval = useSelector(startTimeSelector);
  const playing = useSelector(playingSelector);
  const showConfirm = useSelector(confirmSelector);

  useEffect(() => {
    return () => {
      clearInterval(interval);
    };
  }, [interval]);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const modeNumber = parseInt(event.target.value);
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.addEventListener('load', () => {
      const canvasList = createCanvasList(img, modeNumber);
      const newColumns = createStartColumns(modeNumber, canvasList);
      dispatch(changeMode(modeNumber, newColumns));
    });
    img.src = image.path;
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

  const conFirmSubmitHandler = (event: any) => {
    event.preventDefault();
    dispatch(openConfirm());
  };

  const gameContinueHandler = () => {
    dispatch(closeConfirm());
  };

  const gameCancelHandler = () => {
    dispatch(gameCancel());
    dispatch(closeConfirm());
    clearInterval(interval);
  };

  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={playing ? conFirmSubmitHandler : startSubmitHandler}>
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
                disabled={playing}
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
                disabled={playing}
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
                disabled={playing}
              />
              <Txt fontSize={ESize.s} style={{ color: 'white' }}>
                Hard
              </Txt>
            </label>
          </div>
        </div>
        {playing ? (
          <>
            <Button
              style={{ backgroundColor: '#FF1B4D' }}
              className={`${styles.submit} ${styles.startBtn}`}
              type={'submit'}
            >
              ゲームキャンセル
            </Button>
            {/*<Confirm*/}
            {/*  open={showConfirm}*/}
            {/*  onCancel={() => dispatch(closeConfirm())}*/}
            {/*  onConfirm={conFirmCancelHandler}*/}
            {/*/>*/}
          </>
        ) : (
          <Button className={`${styles.submit} ${styles.startBtn}`} type={'submit'}>
            ゲームスタート
          </Button>
        )}
      </form>
      {showConfirm?
        <ConfirmModal
          heading={'ゲームを終了してよろしいですか？'}
          text={'（終了すると途中からゲームを再開することはできません）'}
          okClick={gameCancelHandler}
          cancelClick={gameContinueHandler}
        />:null
      }

    </div>
  );
};

export default GameStartForm;
