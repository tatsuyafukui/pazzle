import React, { useEffect } from 'react';
import styles from './styles.css';
import PlayingSummary from '../PlayingSummary';
import PlayingCanvas from '../PlayingCanvas';
import { RouteComponentProps } from 'react-router';
interface MatchParams {
  id: string;
}
interface Props extends RouteComponentProps<MatchParams> {}
const Playground: React.FC<Props> = (props) => {

  useEffect(() => {

  },[]);

  return (
    <div className={styles.root}>
      <div className={styles.playingLeft}>
        <PlayingCanvas/>
      </div>
      <div className={styles.playingRight}>
        <PlayingSummary/>
      </div>
    </div>
  );
};

export default Playground;
