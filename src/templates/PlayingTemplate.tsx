import React from 'react';
import Main from '../organisms/main/main';
import { RouteComponentProps } from 'react-router-dom';
import Playground from '../organisms/Playground';

interface MatchParams {
  id: string;
}
interface Props extends RouteComponentProps<MatchParams> {
  user: any;
}

const PlayingTemplate: React.FC<Props> = props => {
  return (
    <div>
      <Main>
        <Playground user={props.user} {...props} />
      </Main>
    </div>
  );
};

export default PlayingTemplate;
