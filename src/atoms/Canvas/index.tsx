import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styles from './styles.css';

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
    margin: '1px',
  };

  return (
    <Draggable key={`${id}`} draggableId={`${id}`} index={props.index}>
      {(provided, snapshot) => {
        return (
          <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
            <img
              alt={'puzzle'}
              src={url}
              style={{
                ...style,
                border: isCorrect ? '1px solid lightgreen' : 'none',
                width: `${props.size}px`,
                height: `${props.size}px`,
              }}
              className={snapshot.isDragging ? styles.border : ''}
            />
          </div>
        );
      }}
    </Draggable>
  );
};

export default Canvas;
