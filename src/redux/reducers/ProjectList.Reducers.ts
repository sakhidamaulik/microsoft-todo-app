import {
  ProjectListActionTypes,
  ProjectListActionAllTypes,
} from "./../actions/ProjectList.Actions";
import { IProjectList, LoadState } from "./../../models/ProjectList.Models";

export interface IProjectListState {
  projectList: IProjectList[];
  eTag: string | undefined;
  projectListLoadState: LoadState;
}

const initialState: IProjectListState = {
  projectList: [],
  eTag: undefined,
  projectListLoadState: LoadState.Initial,
};

export function projectListReducer(
  state: IProjectListState = initialState,
  action: ProjectListActionAllTypes
): IProjectListState {
  switch (action.type) {
    case ProjectListActionTypes.GET_PROJECTLIST:
      return {
        ...state,
        projectListLoadState: LoadState.Loading,
      };
    case ProjectListActionTypes.GET_PROJECTLIST_SUCCESS: {
      return {
        ...state,
        projectList: action.payload.projectList,
        eTag: action.payload.eTag,
        projectListLoadState: LoadState.LoadSuccessFull,
      };
    }
    case ProjectListActionTypes.GET_PROJECTLIST_FAILURE:
      return {
        ...state,
        projectListLoadState: LoadState.LoadFailed,
      };
    case ProjectListActionTypes.CREATE_PROJECTLIST:
      return {
        ...state,
        projectListLoadState: LoadState.Loading,
      };
    case ProjectListActionTypes.CREATE_PROJECTLIST_SUCCESS: {
      const newProjectList = [action.payload, ...state.projectList];

      return {
        ...state,
        projectList: newProjectList,
        projectListLoadState: LoadState.LoadSuccessFull,
      };
    }
    case ProjectListActionTypes.CREATE_PROJECTLIST_FAILURE:
      return {
        ...state,
        projectListLoadState: LoadState.LoadFailed,
      };
    default:
      return state;
  }
}

export type ProjectListReducerState = ReturnType<typeof projectListReducer>;
