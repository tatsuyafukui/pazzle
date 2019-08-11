import React, { ChangeEvent, useEffect } from 'react';
import Header from '../organisms/header/header';
import Main from '../organisms/main/main';
import { useDispatch, useSelector } from 'react-redux';
import { activeImage } from '../modules/collection';
import { RouteComponentProps } from 'react-router-dom';
import Spinner from '../atoms/Spinner/Spinner';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { changeColumns, changeMode } from '../modules/pieses';
import Column from '../molecules/columns/column';
import { getNewColumns, createCanvasList, shuffleArray, createStartColumns } from '../lib/canvas';

interface MatchParams {
  id: string;
}
interface Props extends RouteComponentProps<MatchParams> {}

const userSelector = (state: any) => state.authReducer.user;
const imageSelector = (state: any) => state.collectionReducer.activeImage;
const loadingSelector = (state: any) => state.collectionReducer.loading;
const columnsSelector = (state: any) => state.pieceReducer.columns;
const modeSelector = (state: any) => state.pieceReducer.mode;

const Playing: React.FC<Props> = props => {
  const user = useSelector(userSelector);
  const columns = useSelector(columnsSelector);
  const mode = useSelector(modeSelector);
  const image = useSelector(imageSelector);
  const loading = useSelector(loadingSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activeImage(user.uid, props.match.params.id));
  }, [dispatch, props.match.params.id, user.uid]);

  const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const modeNumber = parseInt(event.target.value);
    dispatch(changeMode(modeNumber));
  };

  const startClickHandler = () => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.addEventListener('load', () => {
      const canvasList = createCanvasList(img, mode);
      const afterShuffleCanvasList = shuffleArray(canvasList);
      const StartColumns = createStartColumns(mode, afterShuffleCanvasList);
      dispatch(changeColumns(StartColumns));
    });
    img.src = image.path;
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const newColumns = getNewColumns(columns, source, destination);

    dispatch(changeColumns(newColumns));
  };

  if (loading || image === null || image === undefined) {
    return <Spinner />;
  }

  const columnsEl = columns.map((column: any) => {
    return <Column key={column.id} id={column.id} mode={mode} canvasList={column.tasks} />;
  });

  return (
    <div>
      <Header />
      <Main>
        <h1>GAME</h1>
        <div>
          <img src={image.path} id={'img'} />
          <select id={'mode'} onChange={changeHandler}>
            <option value={3}>easy</option>
            <option value={6}>middle</option>
            <option value={9}>hard</option>
          </select>
          <button onClick={startClickHandler}>スタート</button>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <div>
            <h1>parts</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>{columnsEl}</div>
          </div>
        </DragDropContext>
      </Main>
    </div>
  );
};

export default Playing;
