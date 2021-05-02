import { SagaIterator } from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { WatchProjectListSagas } from "./sagas/ProjectList.Sagas";

export default function* rootSaga(): SagaIterator {
  yield all([fork(WatchProjectListSagas)]);
}
