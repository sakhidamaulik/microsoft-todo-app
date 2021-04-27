export enum LoadState {
  Initial,
  Loading,
  LoadSuccessFul,
  LoadFailed
}

export interface IProjectList {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

