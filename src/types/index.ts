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

export enum ESize {
  s = 's',
  m = 'm',
  l = 'l',
}

export enum EMode {
  easy = 3,
  normal = 6,
  hard = 10,
}

export enum ERole {
  default = 'default',
  info = 'info',
  warning = 'warning',
  white = 'white',
  cream = 'cream',
}

export enum ETag {
  a = 'a',
}

export interface IContainerProps extends React.AllHTMLAttributes<HTMLElement> {
  presenter: any;
}
