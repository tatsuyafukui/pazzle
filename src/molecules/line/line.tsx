import React, { useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Canvas from '../../atoms/Canvas/canvas';
import { gameEnd } from '../../modules/pieses';
import { useDispatch } from 'react-redux';

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

const Line: React.FC<IProps> = props => {

  const dispatch = useDispatch();

  let size: any;
  if (props.mode === 3) size = '300px';
  if (props.mode === 6) size = '150px';
  if (props.mode === 9) size = '100px';

  const canvasList = props.canvasList.map((item: ICanvas, i: number) => {
    const columnId = i * props.mode + props.column;
    item.isCorrect = columnId === item.id;

    return (
      <div key={i}>
        <Canvas item={item} index={i} size={size} />
      </div>
    );
  });

  return (
    <div style={{ margin: '3px' }}>
      <Droppable droppableId={`${props.column}`}>
        {provided => (
          <div ref={provided.innerRef} style={{ paddingBottom: '300px' }}>
            {canvasList}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Line;

