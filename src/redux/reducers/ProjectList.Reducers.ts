import {
  ProjectListActionTypes,
  ProjectListActionAllTypes,
} from "./../actions/ProjectList.Actions";
import { IProjectList, LoadState } from "./../../models/ProjectList.Models";

export interface IProjectListState {
  projectList: IProjectList[];
  projectListLoadState: LoadState;
}

const initialState: IProjectListState = {
  projectList: [],
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
        projectList: action.payload,
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
    case ProjectListActionTypes.DELETE_PROJECTLIST:
      return {
        ...state,
        projectListLoadState: LoadState.Loading,
      };
    case ProjectListActionTypes.DELETE_PROJECTLIST_SUCCESS: {
      const newProjectList = state.projectList.filter(
        (list) => list.id !== action.payload
      );
      return {
        ...state,
        projectList: newProjectList,
        projectListLoadState: LoadState.LoadSuccessFull,
      };
    }
    case ProjectListActionTypes.DELETE_PROJECTLIST_FAILURE:
      return {
        ...state,
        projectListLoadState: LoadState.LoadFailed,
      };

    case ProjectListActionTypes.UPDATE_PROJECTLIST:
      return {
        ...state,
        projectListLoadState: LoadState.Loading,
      };
    case ProjectListActionTypes.UPDATE_PROJECTLIST_SUCCESS: {
      const index = state.projectList.findIndex(
        (list) => list.id === action.payload.id
      );
      let newProjectList: IProjectList[] = [];
      if (index >= 0) {
        // state.projectList.splice(index, 1, action.payload);
        newProjectList = [
          ...state.projectList.slice(0, index),
          action.payload,
          ...state.projectList.slice(index + 1),
        ];
      } else {
        newProjectList = [action.payload, ...state.projectList];
      }
      return {
        ...state,
        projectList: newProjectList,
        projectListLoadState: LoadState.LoadSuccessFull,
      };
    }
    case ProjectListActionTypes.UPDATE_PROJECTLIST_FAILURE:
      return {
        ...state,
        projectListLoadState: LoadState.LoadFailed,
      };

    default:
      return state;
  }
}

export type ProjectListReducerState = ReturnType<typeof projectListReducer>;
