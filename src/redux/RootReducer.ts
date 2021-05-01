import { combineReducers } from "redux";
import { projectListReducer } from "./reducers/ProjectList.Reducers";

export const rootReducer = combineReducers({
  projectList: projectListReducer,
});

export type RootReducerState = ReturnType<typeof rootReducer>;
