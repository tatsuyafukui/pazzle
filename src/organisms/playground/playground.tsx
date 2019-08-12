import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { getNewColumns } from '../../lib/canvas';
import { changeColumns } from '../../modules/pieses';
import { useDispatch, useSelector } from 'react-redux';
import Column from '../../molecules/columns/column';

const columnsSelector = (state: any) => state.pieceReducer.columns;
const modeSelector = (state: any) => state.pieceReducer.mode;

const Playground: React.FC = () => {
  const columns = useSelector(columnsSelector);
  const mode = useSelector(modeSelector);

  const dispatch = useDispatch();

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const newColumns = getNewColumns(columns, source, destination);

    dispatch(changeColumns(newColumns));
  };

  const columnsEl = columns.map((column: any) => {
    return <Column key={column.id} column={column.id} mode={mode} canvasList={column.tasks} />;
  });


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>{columnsEl}</div>
    </DragDropContext>
  );
};

export default Playground;

