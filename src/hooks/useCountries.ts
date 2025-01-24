import { useState, useEffect } from "react";
import { getAllCountries } from "../api/countries";
import { Country } from "../types/home";

const COUNTRIES_URL =
  "https://restcountries.com/v2/all?fields=name,region,flag";
const PAGE_SIZE = 12;

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [page, setPage] = useState(1); // Track the current page
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCountries = async (page: number) => {
    try {
      setLoading(true);
      setError(null);

      const allCountries = await getAllCountries();

      const startIndex = (page - 1) * PAGE_SIZE;
      const endIndex = page * PAGE_SIZE;

      const paginatedCountries = allCountries.slice(startIndex, endIndex);

      setCountries((prevCountries) => [
        ...prevCountries,
        ...paginatedCountries,
      ]);
      setPage((prevPage) => prevPage + 1);
    } catch (error: any) {
      setError("Error fetching countries: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Initial call to fetch countries
  useEffect(() => {
    fetchCountries(page);
  }, []); // Only run once when the component mounts

  return {
    countries,
    loading,
    error,
    loadMoreCountries: () => fetchCountries(page), // Trigger for loading more countries
  };
};
