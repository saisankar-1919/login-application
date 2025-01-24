import axios, { AxiosResponse } from "axios";
import { Country } from "../types/home";

const COUNTRIES_URL =
  "https://restcountries.com/v2/all?fields=name,region,flag";

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
