import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../constants/system";

export const ApiProducts = {
  getAll: async (page: number, name: string, size = 12, sort = "name") => {
    const config: AxiosRequestConfig = {
      method: "GET",
      baseURL: BASE_URL,
      url: "/products",
      params: {
        page,
        name,
        size,
        sort,
      },
    };

    //const response = await axios.get(`${BASE_URL}/products?`);
    return axios(config);
  },

  getById: async (id: number) => {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  },
};
