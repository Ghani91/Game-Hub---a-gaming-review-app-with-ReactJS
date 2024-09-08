import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

interface FetchGenres {
  count: number;
  results: Genre[];
}
const useGenre = () => {
  /* The `return { genre, errors, isLoading };` statement in the `useGenre` custom hook is returning an
  object with three properties: `genre`, `errors`, and `isLoading`. These properties are being
  returned as an object so that they can be accessed and utilized by the component that is using the
  `useGenre` hook. By returning these values in an object, the component can easily destructure and
  access them for rendering or other logic within the component. */
  /* The line `const [genre, setGenre] = useState("");` in the `useGenre` custom hook is initializing a
  state variable named `genre` using the `useState` hook in React. */
  const [genre, setGenre] = useState<Genre[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGenres>("/genres", { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        setGenre(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setLoading(false);
        setErrors(err.message);
      });
  }, [genre]);

  return { genre, errors, isLoading };
};

export default useGenre;
