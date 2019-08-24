import React, { useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { getNewColumns } from '../../lib/canvas';
import { changeColumns, gameEnd } from '../../modules/pieses';
import { useDispatch, useSelector } from 'react-redux';
import Column from '../../molecules/columns/column';

const columnsSelector = (state: any) => state.pieceReducer.columns;
const modeSelector = (state: any) => state.pieceReducer.mode;

const Playground: React.FC = () => {
  const columns = useSelector(columnsSelector);
  const mode = useSelector(modeSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    let finalDone: boolean[] = checkClear(columns, mode);
    if (finalDone.indexOf(false) == -1) {
      dispatch(gameEnd());
    }
  }, [columns]);

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

const checkClear = (arr: any, mode: number): boolean[] => {
  let finalDone: any = [];
  arr.forEach((column: any) => {
    const isDone = column.tasks.map((item: any, i: number) => {
      const columnId = i * mode + column.id;
      console.log(columnId === item.id);

      return columnId === item.id;
    });
    finalDone.push(isDone.indexOf(false) === -1);
  });
  return finalDone;
};
