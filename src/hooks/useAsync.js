import { useState, useEffect } from "react";

export const useAsync = (asyncFn, dependencies) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  if (!Array.isArray(dependencies)) {
    dependencies = [];
  }

  useEffect(() => {
    setIsLoading(true);

    asyncFn()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, dependencies);

  return {
    data,
    error,
    isLoading,
  };
};
