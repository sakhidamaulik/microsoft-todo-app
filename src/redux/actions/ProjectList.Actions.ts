import { IProjectList } from "../../models/ProjectList.Models";

export interface Action<T extends string, U> {
  readonly type: T;
  readonly payload: U;
}

export function createAction<T extends string, U extends any>(
  type: T,
  payload: U
): Action<T, U> {
  return {
    type,
    payload,
  };
}

export enum ProjectListActionTypes {
  GET_PROJECTLIST = "Get Projectlist",
  GET_PROJECTLIST_SUCCESS = "Get Projectlist Success",
  GET_PROJECTLIST_FAILURE = "Get Projectlist Failure",

  CREATE_PROJECTLIST = "Create Projectlist",
  CREATE_PROJECTLIST_SUCCESS = "Create Projectlist Success",
  CREATE_PROJECTLIST_FAILURE = "Create Projectlist Failure",
}

export interface IProjectListResponse {
  projectList: IProjectList[];
  eTag?: string;
}

export const ProjectListActions = {
  GetProjectList: (): Action<ProjectListActionTypes.GET_PROJECTLIST, {}> => {
    return createAction(ProjectListActionTypes.GET_PROJECTLIST, {});
  },

  GetProjectListSuccess: (
    projectListResponse: IProjectListResponse
  ): Action<
    ProjectListActionTypes.GET_PROJECTLIST_SUCCESS,
    IProjectListResponse
  > => {
    return createAction(
      ProjectListActionTypes.GET_PROJECTLIST_SUCCESS,
      projectListResponse
    );
  },

  GetProjectListFailure: (
    error: Error
  ): Action<ProjectListActionTypes.GET_PROJECTLIST_FAILURE, Error> => {
    return createAction(ProjectListActionTypes.GET_PROJECTLIST_FAILURE, error);
  },

  CreateProjectList: (
    projectList: IProjectList
  ): Action<ProjectListActionTypes.CREATE_PROJECTLIST, IProjectList> => {
    return createAction(ProjectListActionTypes.CREATE_PROJECTLIST, projectList);
  },
  CreateProjectListSuccess: (
    projectList: IProjectList
  ): Action<
    ProjectListActionTypes.CREATE_PROJECTLIST_SUCCESS,
    IProjectList
  > => {
    return createAction(
      ProjectListActionTypes.CREATE_PROJECTLIST_SUCCESS,
      projectList
    );
  },
  CreateProjectListFailure: (
    error: Error
  ): Action<ProjectListActionTypes.CREATE_PROJECTLIST_FAILURE, Error> => {
    return createAction(
      ProjectListActionTypes.CREATE_PROJECTLIST_FAILURE,
      error
    );
  },
};

export type ProjectListActionAllTypes =
  | ReturnType<typeof ProjectListActions.GetProjectList>
  | ReturnType<typeof ProjectListActions.GetProjectListSuccess>
  | ReturnType<typeof ProjectListActions.GetProjectListFailure>
  | ReturnType<typeof ProjectListActions.CreateProjectList>
  | ReturnType<typeof ProjectListActions.CreateProjectListSuccess>
  | ReturnType<typeof ProjectListActions.CreateProjectListFailure>;
