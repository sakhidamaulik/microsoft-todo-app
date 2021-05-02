export enum LoadState {
  Initial,
  Loading,
  LoadSuccessFul,
  LoadFailed,
}

export interface IProjectList {
  id: string;
  title: string;
  count: number;
  createdAt: string;
  updatedAt: string;
}
