import { IProjectList } from "./../models/ProjectList.Models";
import { IProjectListResponse } from "./../redux/actions/ProjectList.Actions";
import axios from "axios";

const BASE_URL = "http://localhost:3004";

export const projectListService = {
  getProjectList: async (): Promise<IProjectList[]> => {
    const url = `${BASE_URL}/projects`;
    const response = await axios.get<IProjectList[]>(url);

    return response.data;
  },

  createProjectList: async (
    projectList: IProjectList
  ): Promise<IProjectList> => {
    const url = `${BASE_URL}/projects`;
    const response = await axios.post<IProjectList>(url, projectList);

    return response.data;
  },

  deleteProjectList: async (projectListId: string): Promise<void> => {
    const url = `${BASE_URL}/projects/${projectListId}`;

    return await axios.delete(url);
  },

  updateProjectList: async (
    projectList: IProjectList
  ): Promise<IProjectList> => {
    const url = `${BASE_URL}/projects/${projectList.id}`;
    const response = await axios.put<IProjectList>(url, projectList);

    return response.data;
  },
};
