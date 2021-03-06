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

  DELETE_PROJECTLIST = "Delete Projectlist",
  DELETE_PROJECTLIST_SUCCESS = "Delete Projectlist Success",
  DELETE_PROJECTLIST_FAILURE = "Delete Projectlist Failure",

  UPDATE_PROJECTLIST = "Update Projectlist",
  UPDATE_PROJECTLIST_SUCCESS = "Update Projectlist Success",
  UPDATE_PROJECTLIST_FAILURE = "Update Projectlist Failure",
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
    projectList: IProjectList[]
  ): Action<ProjectListActionTypes.GET_PROJECTLIST_SUCCESS, IProjectList[]> => {
    return createAction(
      ProjectListActionTypes.GET_PROJECTLIST_SUCCESS,
      projectList
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

  DeleteProjectList: (
    id: string
  ): Action<ProjectListActionTypes.DELETE_PROJECTLIST, string> => {
    return createAction(ProjectListActionTypes.DELETE_PROJECTLIST, id);
  },
  DeleteProjectListSuccess: (
    id: string
  ): Action<ProjectListActionTypes.DELETE_PROJECTLIST_SUCCESS, string> =>
    createAction(ProjectListActionTypes.DELETE_PROJECTLIST_SUCCESS, id),
  DeleteProjectListFailure: (
    error: Error
  ): Action<ProjectListActionTypes.DELETE_PROJECTLIST_FAILURE, Error> =>
    createAction(ProjectListActionTypes.DELETE_PROJECTLIST_FAILURE, error),

  UpdateProjectList: (
    projectList: IProjectList
  ): Action<ProjectListActionTypes.UPDATE_PROJECTLIST, IProjectList> => {
    return createAction(ProjectListActionTypes.UPDATE_PROJECTLIST, projectList);
  },
  UpdateProjectListSuccess: (
    projectList: IProjectList
  ): Action<ProjectListActionTypes.UPDATE_PROJECTLIST_SUCCESS, IProjectList> =>
    createAction(
      ProjectListActionTypes.UPDATE_PROJECTLIST_SUCCESS,
      projectList
    ),
  UpdateProjectListFailure: (
    error: Error
  ): Action<ProjectListActionTypes.UPDATE_PROJECTLIST_FAILURE, Error> =>
    createAction(ProjectListActionTypes.UPDATE_PROJECTLIST_FAILURE, error),
};

export type ProjectListActionAllTypes =
  | ReturnType<typeof ProjectListActions.GetProjectList>
  | ReturnType<typeof ProjectListActions.GetProjectListSuccess>
  | ReturnType<typeof ProjectListActions.GetProjectListFailure>
  | ReturnType<typeof ProjectListActions.CreateProjectList>
  | ReturnType<typeof ProjectListActions.CreateProjectListSuccess>
  | ReturnType<typeof ProjectListActions.CreateProjectListFailure>
  | ReturnType<typeof ProjectListActions.DeleteProjectList>
  | ReturnType<typeof ProjectListActions.DeleteProjectListSuccess>
  | ReturnType<typeof ProjectListActions.DeleteProjectListFailure>
  | ReturnType<typeof ProjectListActions.UpdateProjectList>
  | ReturnType<typeof ProjectListActions.UpdateProjectListSuccess>
  | ReturnType<typeof ProjectListActions.UpdateProjectListFailure>;
