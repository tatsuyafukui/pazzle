import React from 'react';
import Canvas from '../../Canvas/canvas';

interface IProps {
  mode: number;
  innerRef: any;
  canvasList: any;
}

const CanvasList: React.FC<IProps> = props => {
  const arr = props.canvasList.map((item: any, i: any) => {
    let size: any;
    if (props.mode === 3) size = '300px';
    if (props.mode === 6) size = '150px';
    if (props.mode === 9) size = '100px';
    return (
      <div key={i}>
        <Canvas id={item.id} index={i} url={item.url} size={size} />
      </div>
    );
  });

  return <>{arr}</>;
};

export default CanvasList;
