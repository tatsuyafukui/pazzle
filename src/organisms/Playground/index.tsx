import React, { useEffect } from 'react';
import styles from './styles.css';
import PlayingSummary from '../PlayingSummary';
import PlayingCanvas from '../PlayingCanvas';
import { RouteComponentProps } from 'react-router';
import { activeImage } from '../../modules/collection';
import { useDispatch, useSelector } from 'react-redux';
import { gameCancel, getUserSelfRecord } from '../../modules/pieses';
import ClearModal from '../ClearModal';
import { closeClearModal } from '../../modules/ui';


const showClearModalSelector = (state: any) => state.uiReducer.showClearModal;
const imagesSelector = (state: any) => state.collectionReducer.activeImage;
const newRecordInfoSelector = (state: any) => state.uiReducer.newRecordInfo;


interface MatchParams {
  id: string;
}
interface Props extends RouteComponentProps<MatchParams> {
  user: any;
}

const Playground: React.FC<Props> = props => {
  const dispatch = useDispatch();
  const showClearModal = useSelector(showClearModalSelector);
  const image = useSelector(imagesSelector);
  const newRecordInfo = useSelector(newRecordInfoSelector);

  useEffect(() => {
    dispatch(activeImage(props.match.params.id));
    dispatch(getUserSelfRecord(props.user.providerData[0].uid, props.match.params.id));

    return () => {
      dispatch(gameCancel());
    };
  }, [props.match.params.id, dispatch, props.user.providerData]);

  const continueGameHandler = () => {
    dispatch(closeClearModal())
  };

  const otherGameHandler = () => {
    props.history.push('/');
    dispatch(closeClearModal())
  };

  return (
    <div className={styles.root}>
      <div className={styles.playingLeft}>
        <PlayingCanvas {...props} />
      </div>
      <div className={styles.playingRight}>
        <PlayingSummary {...props} />
      </div>

      {showClearModal?
        <ClearModal
          text={'完成したパズルとクリアタイムをシェアしよう！'}
          image={image}
          continuegamehandler={continueGameHandler}
          othergamehandler={otherGameHandler}
          info={newRecordInfo}
        />: null
      }
    </div>
  );
};

export default Playground;
