export enum LoadState {
  Initial,
  Loading,
  LoadSuccessFull,
  LoadFailed,
}

export interface IProjectList {
  id: string;
  title: string | undefined;
  count?: number;
  createdAt?: string;
  updatedAt?: string;
}
