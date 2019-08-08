import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';

interface IProps {
  id: number,
  size: string,
  index: number
}

const Canvas: React.FC<IProps> = React.memo((props) => {
  return (
    <Draggable draggableId={`${props.id}`} index={props.index} key={props.index}>
      {(provided) => (
        <div
          // className={styles.firstLine}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {props.id}
        </div>
      )}
    </Draggable>
  );
});

export default Canvas;
