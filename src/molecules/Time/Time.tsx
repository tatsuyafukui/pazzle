import React, { useEffect } from 'react';
import * as styles from './Time.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateTime } from '../../modules/pieses';

interface IProps {
}

const timeSelector = (state: any) => state.pieceReducer.time;
const startTimeSelector = (state: any) => state.pieceReducer.startTime;

const playingSelector = (state: any) => state.pieceReducer.playing;

const Time: React.FC<IProps> = (props) => {

  const time = useSelector(timeSelector);
  const startTime = useSelector(startTimeSelector);
  const playing = useSelector(playingSelector);
  const dispatch = useDispatch();


  useEffect(() => {
    if(playing) {
      setInterval(() => {
        dispatch(updateTime(Date.now() - startTime))
      }, 10)

    }
  }, [time, playing]);

  return (
    <div className={styles.time}>
      {playing? getDisplayTime(time):'--:--:--'}
    </div>
  );
};

export default Time;

const getDisplayTime = (time: number): string => {
  //m(分) = 135200 / 60000ミリ秒で割った数の商　-> 2分
  const m: string = Math.floor(time / 60000).toString();

  //s(秒) = 135200 % 60000ミリ秒で / 1000 (ミリ秒なので1000で割ってやる) -> 15秒
  const s = Math.floor(time % 60000 / 1000).toString();

  const ms = (time % 1000).toString();

  //HTML 上で表示の際の桁数を固定する　例）3 => 03　、 12 -> 012
  //javascriptでは文字列数列を連結すると文字列になる
  //文字列の末尾2桁を表示したいのでsliceで負の値(-2)引数で渡してやる。
  const mDisplay = ('0' + m).slice(-2);
  const sDisplay = ('0' + s).slice(-2);
  const msDisplay = ('00' + ms).slice(-3);

  return mDisplay + ':' + sDisplay + ':' + msDisplay;
};
