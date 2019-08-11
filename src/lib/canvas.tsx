import { DraggableLocation } from 'react-beautiful-dnd';

export const shuffleArray = (arr: ICanvas[]): ICanvas[] => {
  const newArray = [...arr];
  for (let i = newArray.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    const tmp = newArray[i];
    newArray[i] = newArray[r];
    newArray[r] = tmp;
  }
  return newArray;
};

export const getSize = (mode: number): number => {
  let size = 0;
  if (mode === 3) size = 300;
  if (mode === 6) size = 150;
  if (mode === 9) size = 100;
  return size;
};

interface IColumn {
  id: number;
  tasks: ICanvas[];
}
export const createStartColumns = (mode: number, canvasList: ICanvas[]): IColumn[] => {
  const columns: any = [...Array(mode)].map(
    (_, i): IColumn => {
      return {
        id: i,
        tasks: [],
      };
    }
  );

  let columnNumber = 0;
  canvasList.forEach((canvas, i) => {
    if (isNewLine(i, mode)) {
      columnNumber = 0;
    }
    columns[columnNumber].tasks.push(canvas);
    columnNumber++;
  });
  return columns;
};

interface ICanvas {
  url: string;
  id: number;
}
export const createCanvasList = (img: HTMLImageElement, mode: number): ICanvas[] => {
  const size: number = getSize(mode);
  let sy = 0;
  let sx = 0;
  const canvasArr: ICanvas[] = [];

  for (let i = 0; i < mode * mode; i++) {
    if (isNewLine(i, mode)) {
      sy += size;
      sx = 0;
    }
    canvasArr.push({
      url: getCanvasPartsURL(img, sx, sy, size),
      id: i,
    });

    sx += size;
  }
  return canvasArr;
};

const getCanvasPartsURL = (img: HTMLImageElement, sx: number, sy: number, size: number): string => {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx: any = canvas.getContext('2d');
  ctx.drawImage(img, sx, sy, size, size, 0, 0, size, size);
  return canvas.toDataURL('image/png');
};

const isNewLine = (count: number, mode: number): boolean => {
  return count !== 0 && count % mode === 0;
};

export const getNewColumns = (
  columns: IColumn[],
  source: DraggableLocation,
  destination: DraggableLocation
): IColumn[] => {
  let changeColumn = [...columns];
  const startCanvasList = columns[parseInt(source.droppableId)].tasks;
  const startTasks = Array.from(startCanvasList);
  startTasks.splice(source.index, 1);

  if (source.droppableId === destination.droppableId) {
    startTasks.splice(destination.index, 0, startCanvasList[source.index]); //移動
  } else {
    const finishCanvasList = columns[parseInt(destination.droppableId)].tasks;
    const finishTasks = Array.from(finishCanvasList);
    finishTasks.splice(destination.index, 0, startCanvasList[source.index]);
    changeColumn[parseInt(destination.droppableId)] = {
      ...columns[parseInt(destination.droppableId)],
      tasks: finishTasks,
    };
  }

  changeColumn[parseInt(source.droppableId)] = {
    ...columns[parseInt(source.droppableId)],
    tasks: startTasks,
  };

  return changeColumn;
};
