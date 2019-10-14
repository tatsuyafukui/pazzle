import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PlayingTemplate from '../templates/PlayingTemplate';

interface MatchParams {
  id: string;
}
interface Props extends RouteComponentProps<MatchParams> {
  user: any;
}

const PlayingPage: React.FC<Props> = props => {
  return (
    <div>
      <PlayingTemplate user={props.user} {...props} />
    </div>
  );
};

export default PlayingPage;
