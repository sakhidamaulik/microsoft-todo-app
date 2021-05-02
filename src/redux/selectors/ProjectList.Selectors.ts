import { createSelector } from "reselect";
import { LoadState, IProjectList } from "./../../models/ProjectList.Models";
import { IProjectListState } from "./../reducers/ProjectList.Reducers";
import { RootReducerState } from "../RootReducer";

class ProjectListSelectors {
  public static areProjectListLoading = createSelector<
    RootReducerState,
    IProjectListState,
    boolean
  >(
    (state) => state.projectListState,
    (state) =>
      state.projectListLoadState === LoadState.Initial ||
      state.projectListLoadState === LoadState.Loading
  );

  public static areProjectListFailed = createSelector<
    RootReducerState,
    IProjectListState,
    boolean
  >(
    (state) => state.projectListState,
    (state) => state.projectListLoadState === LoadState.LoadFailed
  );

  public static getProjectList = createSelector<
    RootReducerState,
    IProjectListState,
    IProjectList[]
  >(
    (state) => state.projectListState,
    (state) => state.projectList
  );
}

export default ProjectListSelectors;
