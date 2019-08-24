import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styles from './canvas.css';

interface ICanvas {
  url: string;
  id: number;
  isCorrect: boolean;
}
interface IProps {
  index: number;
  size: string;
  item: ICanvas;
}

const Canvas: React.FC<IProps> = props => {
  const { id, url, isCorrect } = props.item;

  const style = {
    width: props.size,
    height: props.size,
    maxWidth: props.size,
    maxHeight: props.size,
    margin: '1px',
  };

  return (
    <Draggable draggableId={`${id}`} index={props.index} key={id}>
      {(provided, snapshot) => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <div>
            <img
              src={url}
              style={{ ...style, border: isCorrect ? '3px solid lightgreen' : 'none' }}
              className={snapshot.isDragging ? styles.border : ''}
            />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Canvas;
