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

/*
{
  "responses": [
    {
      "labelAnnotations": [
        {
          "mid": "/m/01yrx",
          "description": "Cat",
          "score": 0.99598557,
          "topicality": 0.99598557
        },
        {
          "mid": "/m/04rky",
          "description": "Mammal",
          "score": 0.9890478,
          "topicality": 0.9890478
        },
        {
          "mid": "/m/09686",
          "description": "Vertebrate",
          "score": 0.9851104,
          "topicality": 0.9851104
        },
        {
          "mid": "/m/07k6w8",
          "description": "Small to medium-sized cats",
          "score": 0.97989506,
          "topicality": 0.97989506
        },
        {
          "mid": "/m/0307l",
          "description": "Felidae",
          "score": 0.96784574,
          "topicality": 0.96784574
        },
        {
          "mid": "/m/0g4cd0",
          "description": "Tabby cat",
          "score": 0.96596164,
          "topicality": 0.96596164
        },
        {
          "mid": "/m/04c41_",
          "description": "European shorthair",
          "score": 0.9617771,
          "topicality": 0.9617771
        },
        {
          "mid": "/m/01l7qd",
          "description": "Whiskers",
          "score": 0.95964164,
          "topicality": 0.95964164
        },
        {
          "mid": "/m/012c9l",
          "description": "Domestic short-haired cat",
          "score": 0.9346434,
          "topicality": 0.9346434
        },
        {
          "mid": "/m/01lrl",
          "description": "Carnivore",
          "score": 0.9342105,
          "topicality": 0.9342105
        }
      ]
    }
  ]
}

 */
