import { ProjectListActionTypes, ProjectListActionAllTypes } from './../actions/ProjectList.Actions';
import { IProjectList, LoadState } from './../../models/ProjectList.Models';

export interface IProjectListState {
  projectList: IProjectList[];
  projectListLoadState: LoadState;
}

const initialState: IProjectListState = {
  projectList: [],
  projectListLoadState: LoadState.Initial
}

export function projectListReducer(
  state: IProjectListState = initialState,
  action: ProjectListActionAllTypes
): IProjectListState {
  
  switch (action.type) {
    case ProjectListActionTypes.GET_PROJECTLIST:
      return {
        ...state,
        projectListLoadState: LoadState.Loading
      }
    case ProjectListActionTypes.GET_PROJECTLIST_SUCCESS:
      return {
        ...state,
        projectList: state.projectList,
        projectListLoadState: LoadState.LoadSuccessFul
      }
    case ProjectListActionTypes.GET_PROJECTLIST_FAILURE:
      return {
        ...state,
        projectListLoadState: LoadState.LoadFailed
      }
    default:
      return state;
  }
}

export type ProjectListReducerState = ReturnType<typeof projectListReducer>