import React, { useEffect } from 'react';
import styles from './styles.css';
import PlayingSummary from '../PlayingSummary';
import PlayingCanvas from '../PlayingCanvas';
import { RouteComponentProps } from 'react-router';
import { activeImage } from '../../modules/collection';
import { useDispatch, useSelector } from 'react-redux';
import { gameCancel } from '../../modules/pieses';
interface MatchParams {
  id: string;
}
interface Props extends RouteComponentProps<MatchParams> {}

const Playground: React.FC<Props> = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activeImage(props.match.params.id));

    return () => {
      dispatch(gameCancel());
    };
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.playingLeft}>
        <PlayingCanvas {...props} />
      </div>
      <div className={styles.playingRight}>
        <PlayingSummary {...props} />
      </div>
    </div>
  );
};

export default Playground;
