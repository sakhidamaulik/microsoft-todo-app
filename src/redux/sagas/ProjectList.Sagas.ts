import {
  Action,
  ProjectListActionTypes,
  ProjectListActions,
  IProjectListResponse,
} from "./../actions/ProjectList.Actions";
import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import { projectListService } from "../../services/ProjectList.Service";

function* GetProjectList(
  action: Action<ProjectListActionTypes.GET_PROJECTLIST, {}>
) {
  try {
    const projectListResponse: IProjectListResponse = yield call(
      projectListService.getProjectList
    );

    yield put(ProjectListActions.GetProjectListSuccess(projectListResponse));
  } catch (e) {
    yield put(ProjectListActions.GetProjectListFailure(e));
  }
}

export function* WatchProjectListSagas(): SagaIterator {
  yield takeLatest(ProjectListActionTypes.GET_PROJECTLIST, GetProjectList);
}
