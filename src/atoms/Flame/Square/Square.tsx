import React from 'react';

const Square: React.FC = (props) => {

  const style = {

  };


  return (
    <div className={'square'}>
      {props.children}
    </div>
  )
};

export default Square;
