import React, { useEffect } from 'react';
import Heading from '../../atoms/Heading';
import styles from './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { gameEnd, updateSelfRecord, updateTime } from '../../modules/pieses';
import { RouteComponentProps } from 'react-router';
import { EMode } from '../../types';

const timeSelector = (state: any) => state.pieceReducer.time;
const startTimeSelector = (state: any) => state.pieceReducer.interval;
const playingSelector = (state: any) => state.pieceReducer.playing;
const columnsSelector = (state: any) => state.pieceReducer.columns;
const modeSelector = (state: any) => state.pieceReducer.mode;
const bestTimeSelector = (state: any) => state.pieceReducer.bestTime;
const userSelector = (state: any) => state.authReducer.user;
const selfBestTimeSelector = (state: any) => state.pieceReducer.selfTime;

interface MatchParams {
  id: string;
}
interface IProps extends RouteComponentProps<MatchParams> {
  bestTime: string;
}

const DisplayTime: React.FC<IProps> = props => {
  const time = useSelector(timeSelector);
  const playing = useSelector(playingSelector);
  const columns = useSelector(columnsSelector);
  const mode = useSelector(modeSelector);
  const bestTime = useSelector(bestTimeSelector);
  const interval = useSelector(startTimeSelector);
  const user = useSelector(userSelector);
  const selfTime = useSelector(selfBestTimeSelector);

  const dispatch = useDispatch();


  let selfBestTime = '--:--:--';

  if(selfTime) {
    switch (mode) {
      case EMode.easy:
        selfBestTime = selfTime.easyTime || '--:--:--' ;
        break;
      case EMode.normal:
        selfBestTime = selfTime.normalTime || '--:--:--' ;
        break;
      case EMode.hard:
        selfBestTime = selfTime.hardTime || '--:--:--' ;
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    let finalDone: boolean[] = checkClear(columns, mode);
    if (playing && finalDone.indexOf(false) === -1) {
      clearInterval(interval);
      dispatch(gameEnd(user, time, bestTime, selfBestTime, props.match.params.id));
    }
  }, [columns]);



  return (
    <div className={styles.root}>
      <div className={styles.timeBody}>
        <div className={styles.timeBest}>
          <Heading level={6} visualLevel={5}>
            世界記録
          </Heading>
          <Heading>{bestTime.time}</Heading>
        </div>
        <div className={styles.timeBest}>
          <Heading level={6} visualLevel={5}>
            自己ベスト
          </Heading>
          <Heading>{selfBestTime}</Heading>
        </div>
        <div className={styles.timePlay}>
          <Heading level={6} visualLevel={5}>
            タイム
          </Heading>
          <Heading>{time !== 0 ? getDisplayTime(time) : '--:--:--'}</Heading>
        </div>
      </div>
    </div>
  );
};

export default DisplayTime;

export const getDisplayTime = (time: number): string => {
  //m(分) = 135200 / 60000ミリ秒で割った数の商　-> 2分
  const m = Math.floor(time / 60000).toString();

  //s(秒) = 135200 % 60000ミリ秒で / 1000 (ミリ秒なので1000で割ってやる) -> 15秒
  const s = Math.floor((time % 60000) / 1000).toString();

  const ms = Math.floor((time % 1000) / 10).toString();

  //HTML 上で表示の際の桁数を固定する　例）3 => 03　、 12 -> 012
  //javascriptでは文字列数列を連結すると文字列になる
  //文字列の末尾2桁を表示したいのでsliceで負の値(-2)引数で渡してやる。
  const mDisplay = ('0' + m).slice(-2);
  const sDisplay = ('0' + s).slice(-2);
  const msDisplay = ('0' + ms).slice(-2);

  return mDisplay + ':' + sDisplay + ':' + msDisplay;
};

/**
 * ピースの位置がすべて正しいかの判定
 * @param arr
 * @param mode
 */
const checkClear = (arr: any, mode: number): boolean[] => {
  let finalDone: any = [];
  arr.forEach((column: any) => {
    const isDone = column.tasks.map((item: any, i: number) => {
      const columnId = i * mode + column.id;
      return columnId === item.id;
    });
    finalDone.push(isDone.indexOf(false) === -1);
  });
  return finalDone;
};
