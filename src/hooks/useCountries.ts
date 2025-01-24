import { useState, useEffect } from "react";
import { getAllCountries } from "../api/countries";
import { Country, CountryFilter } from "../types/home";

const COUNTRIES_URL =
  "https://restcountries.com/v2/all?fields=name,region,flag";
const PAGE_SIZE = 12;

export const useCountries = (filterRegion: string | undefined) => {
  console.log("filterRegion", filterRegion);
  const [countries, setCountries] = useState<Country[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCountries = async (page: number) => {
    try {
      setLoading(true);
      setError(null);

      const allCountries = await getAllCountries();
      console.log("All countries:", allCountries);

      const filteredCountries = filterRegion
        ? allCountries.filter(
            (country: Country) =>
              country.region &&
              country.region.toLowerCase() === filterRegion.toLowerCase()
          )
        : allCountries;
      console.log("filtered countries", filteredCountries);

      const startIndex = (page - 1) * PAGE_SIZE;
      const endIndex = page * PAGE_SIZE;

      const paginatedCountries = filteredCountries.slice(startIndex, endIndex);

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

  useEffect(() => {
    setCountries([]);
    setPage(1);
    fetchCountries(1);
  }, [filterRegion]);

  return {
    countries,
    loading,
    error,
    loadMoreCountries: () => fetchCountries(page),
  };
};
