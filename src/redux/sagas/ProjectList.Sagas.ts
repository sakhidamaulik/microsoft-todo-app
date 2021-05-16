import { IProjectList } from "./../../models/ProjectList.Models";
import {
  Action,
  ProjectListActionTypes,
  ProjectListActions,
} from "./../actions/ProjectList.Actions";
import { SagaIterator } from "redux-saga";
import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { projectListService } from "../../services/ProjectList.Service";

function* GetProjectList(
  action: Action<ProjectListActionTypes.GET_PROJECTLIST, {}>
): SagaIterator {
  try {
    const projectList = yield call(projectListService.getProjectList);

    yield put(ProjectListActions.GetProjectListSuccess(projectList));
  } catch (e) {
    yield put(ProjectListActions.GetProjectListFailure(e));
  }
}

function* CreateProjectList(
  action: Action<ProjectListActionTypes.CREATE_PROJECTLIST, IProjectList>
): SagaIterator {
  try {
    const projectListResult = yield call(
      projectListService.createProjectList,
      action.payload
    );
    yield put(ProjectListActions.CreateProjectListSuccess(projectListResult));
  } catch (e) {
    yield put(ProjectListActions.CreateProjectListFailure(e));
  }
}

export function* WatchProjectListSagas(): SagaIterator {
  yield takeEvery(ProjectListActionTypes.CREATE_PROJECTLIST, CreateProjectList);
  yield takeLatest(ProjectListActionTypes.GET_PROJECTLIST, GetProjectList);
}
