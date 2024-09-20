import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((resp) => {
          setData(resp.data.results);
          setLoading(false);
        })
        .catch((errs) => {
          if (errs instanceof CanceledError) return;
          setErrors(errs.message);
          setLoading(false);
        });
      return () => {
        controller.abort();
      };
    },
    deps ? [...deps] : []
  );
  return { data, errors, isLoading };
};

export default useData;
