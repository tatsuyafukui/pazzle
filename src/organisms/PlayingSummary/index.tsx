import React, { useEffect } from 'react';
import DisplayTime from '../../molecules/DisplayTime';
import DisplayPreview from '../../molecules/DisplayPreview';
import dummy from '../../public/images/dammy.jpg';
import GameStartForm from '../../molecules/GameStartForm';

import { RouteComponentProps } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { activeImage } from '../../modules/collection';
import { EMode } from '../../types';
import Spinner from '../../atoms/Spinner/Spinner';
import { IBestTime, setBestTime } from '../../modules/pieses';
interface MatchParams {
  id: string;
}
interface IProps extends RouteComponentProps<MatchParams> {}

const imagesSelector = (state: any) => state.collectionReducer.activeImage;
const modeSelector = (state: any) => state.pieceReducer.mode;
const bestTimeSelector = (state: any) => state.pieceReducer.bestTime;

const PlayingSummary: React.FC<IProps> = props => {
  const image = useSelector(imagesSelector);
  const mode = useSelector(modeSelector);
  const bestTime = useSelector(bestTimeSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!image) return;

    let time: IBestTime;
    switch (mode) {
      case EMode.easy:
        time = {
          time: image.easyTime,
          mode: 'easyTime',
        };
        break;
      case EMode.normal:
        time = {
          time: image.normalTime,
          mode: 'normalTime',
        };
        break;
      case EMode.hard:
        time = {
          time: image.hardTime,
          mode: 'hardTime',
        };
        break;
      default:
        time = {
          time: image.easyTime,
          mode: 'easyTime',
        };
        break;
    }
    dispatch(setBestTime(time));
  }, [mode, image]);

  if (!image) {
    return <Spinner />;
  }

  return (
    <div style={{ marginLeft: '15px' }}>
      <div>
        <DisplayTime bestTime={bestTime.time} {...props} />
        <DisplayPreview src={image ? image.path : dummy} />
        <GameStartForm mode={mode} imageId={''} />
      </div>
    </div>
  );
};

export default PlayingSummary;
