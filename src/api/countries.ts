import axios, { AxiosResponse } from "axios";
import { Country } from "../types/home";
import { COUNTRIES_URL } from "../constants";

const apiClient = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllCountries = async (): Promise<Country[]> => {
  const response: AxiosResponse<Country[]> = await apiClient.get(COUNTRIES_URL);
  return response.data;
};
