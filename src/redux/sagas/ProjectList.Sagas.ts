import { IProjectList } from "./../../models/ProjectList.Models";
import {
  Action,
  ProjectListActionTypes,
  ProjectListActions,
} from "./../actions/ProjectList.Actions";
import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import { projectListService } from "../../services/ProjectList.Service";

function* GetProjectList(
  action: Action<ProjectListActionTypes.GET_PROJECTLIST, {}>
) {
  try {
    const projectList: IProjectList[] = yield call(
      projectListService.getProjectList
    );
    yield put(ProjectListActions.GetProjectListSuccess(projectList));
  } catch (e) {
    yield put(ProjectListActions.GetProjectListFailure(e));
  }
}

export function* WatchProjectListSagas(): SagaIterator {
  yield takeLatest(ProjectListActionTypes.GET_PROJECTLIST, GetProjectList);
}
