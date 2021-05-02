import { combineReducers } from "redux";
import { projectListReducer } from "./reducers/ProjectList.Reducers";

export const rootReducer = combineReducers({
  projectListState: projectListReducer,
});

export type RootReducerState = ReturnType<typeof rootReducer>;
