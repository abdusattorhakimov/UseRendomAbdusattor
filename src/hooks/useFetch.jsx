import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [IsPending, setIsPending] = useState(false);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data.results);
        setError(null);
        setIsPending(false);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    };
    getData();
  }, [url, refresh]);
  return { data, error, IsPending, setRefresh, refresh };
}

export default useFetch;
