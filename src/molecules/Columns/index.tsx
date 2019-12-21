import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Canvas from '../../atoms/Canvas';
import { EMode } from '../../types';

interface ICanvas {
  url: string;
  id: number;
  isCorrect: boolean;
}
interface IProps {
  column: number;
  mode: number;
  canvasList: any;
}
const isPhone = (navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0;

const Column: React.FC<IProps> = props => {
  let size: any;
  if (props.mode === EMode.easy) size = isPhone? '100px':'200px';
  if (props.mode === EMode.normal) size = isPhone? '50px':'100px';
  if (props.mode === EMode.hard) size = isPhone? '30px':'60px';

  const canvasList = props.canvasList.map((item: ICanvas, i: number) => {
    const columnId = i * props.mode + props.column;
    item.isCorrect = columnId === item.id;

    return <Canvas key={i} item={item} index={i} size={size} />;
  });

  return (
    <div style={{ margin: '0' }}>
      <Droppable droppableId={`${props.column}`}>
        {provided => (
          <div
            ref={provided.innerRef}
            style={{
              paddingBottom: '100px',
            }}
          >
            {canvasList.length !== 0 ? (
              canvasList
            ) : (
              <div
              />
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
