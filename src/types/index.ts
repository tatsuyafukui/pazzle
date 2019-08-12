export interface IColumn {
  id: number;
  tasks: ICanvas[];
}

export interface ICanvas {
  url: string;
  id: number;
  isCorrect: boolean;
}

export interface IOption {
  value: string | number;
  content: string | number | null;
}
