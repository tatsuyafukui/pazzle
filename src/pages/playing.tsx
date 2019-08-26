import React from 'react';
import Header from '../organisms/header/header';
import Main from '../organisms/main/main';
import { RouteComponentProps } from 'react-router-dom';
import StartForm from '../molecules/forms/startForm';
import Playground from '../organisms/playground/playground';
import Time from '../atoms/Time/Time';

interface MatchParams {
  id: string;
}
interface Props extends RouteComponentProps<MatchParams> {}

const Playing: React.FC<Props> = props => {
  return (
    <div>
      <Header />
      <Main>
        <h1>GAME</h1>
        <Time />
        <Playground />
        <div>
          <StartForm imageId={props.match.params.id} />
        </div>
      </Main>
    </div>
  );
};

export default Playing;
