import axios from "axios";
import { BASE_URL } from "../constants/system";

export const ApiProducts = {
  getAll: async () => {
    const response = await axios.get(`${BASE_URL}/products?size=12`);
    return response.data.content;
  },

  getById: async (id: number) => {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  },
};
