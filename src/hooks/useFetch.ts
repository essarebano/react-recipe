import { useState, useEffect, useRef } from 'react';

const cache: { [key: string]: any } = {};

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const cacheRef = useRef(cache);

  useEffect(() => {
    if (cacheRef.current[url]) {
      setData(cacheRef.current[url]);
      setLoading(false);
    } else {
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
          }
          const result = await response.json();
          cacheRef.current[url] = result;
          setData(result);
        } catch (error) {
          if (error instanceof Error) {
            setError(error.message);
          } else {
            setError(String(error));
          }
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
