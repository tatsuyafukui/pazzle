import React from 'react';
import Header from '../organisms/Header';
import Main from '../organisms/main/main';
import { RouteComponentProps } from 'react-router-dom';
import Playground from '../organisms/Playground';

interface MatchParams {
  id: string;
}
interface Props extends RouteComponentProps<MatchParams> {}

const PlayingTemplate: React.FC<Props> = props => {
  return (
    <div>
      <Header />
      <Main>
        <Playground {...props}/>
      </Main>
    </div>
  );
};

export default PlayingTemplate;
