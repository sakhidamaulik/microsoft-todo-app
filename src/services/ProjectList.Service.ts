import { IProjectList } from "../models/ProjectList.Models";
import axios from "axios";

const BASE_URL = "http://localhost:3004";

export const projectListService = {
  getProjectList: async (): Promise<IProjectList[]> => {
    const url = `${BASE_URL}/projectlist`;
    const response = await axios.get<IProjectList[]>(url);

    return response.data;
  },
};
