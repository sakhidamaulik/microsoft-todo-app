import { IProjectListResponse } from "./../redux/actions/ProjectList.Actions";
import axios from "axios";

const BASE_URL = "http://localhost:3004";

export const projectListService = {
  getProjectList: async (): Promise<IProjectListResponse> => {
    const url = `${BASE_URL}/projects`;

    const response = await axios.get<IProjectListResponse>(url);

    return response.data;
  },
};
