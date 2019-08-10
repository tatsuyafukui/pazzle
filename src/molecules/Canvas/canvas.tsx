import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styles from './canvas.css';

interface IProps {
  id: number;
  url: string;
  index: number;
  size: string;
}

const Canvas: React.FC<IProps> = props => {
  const style = {
    width: props.size,
    height: props.size,
    maxWidth: props.size,
    maxHeight: props.size,
    margin: '1px',
  };

  return (
    <Draggable draggableId={`${props.id}`} index={props.index} key={props.id}>
      {(provided, snapshot) => (
        <div
          // className={styles.firstLine}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <img src={props.url} style={style} className={snapshot.isDragging ? styles.border : ''} />
        </div>
      )}
    </Draggable>
  );
};

export default Canvas;
