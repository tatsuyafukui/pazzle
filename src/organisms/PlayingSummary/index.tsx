import React from 'react';
import DisplayTime from '../../molecules/DisplayTime';
import DisplayPreview from '../../molecules/DisplayPreview';
import dummy from '../../public/images/dammy.jpg';
import GameStartForm from '../../molecules/GameStartForm';

const PlayingSummary: React.FC = props => {



  return (
    <div>
      <div>
        <DisplayTime/>
        <DisplayPreview src={dummy}/>
        <GameStartForm imageId={''}/>
      </div>
    </div>
  );
};

export default PlayingSummary;
