import axios from "axios";
import { BASE_URL } from "../constants/system";

export const getProducts = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
    headers: { "Content-type": "application/json" },
  });

  return instance;
};

export const api = getProducts(String(`${BASE_URL}`));
