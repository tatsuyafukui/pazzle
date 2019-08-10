import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import CanvasList from '../lists/canvasList/canvasList';

interface IProps {
  id: number;
  mode: number;
  canvasList: any;
}

const Column: React.FC<IProps> = props => {
  return (
    <div style={{ margin: '3px' }}>
      <Droppable droppableId={`${props.id}`}>
        {provided => (
          <div ref={provided.innerRef} style={{ paddingBottom: '300px' }}>
            <CanvasList
              mode={props.mode}
              innerRef={provided.innerRef}
              {...provided.droppableProps}
              canvasList={props.canvasList}
            />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
