import { useEffect, useState } from "react";
import { useCounter } from "./useCounter";

const localCache = {};

export const useFetch = (url) => {
  
  const [state, setstate] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    errorMessage: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setstate({
      data: null,
      isLoading: false,
      hasError: false,
      errorMessage: null,
    });
  };

  const getFetch = async () => {
    if(localCache[url]) {
      setstate({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        errorMessage: null,
      });
      return;
    }
    setLoadingState();
    const response = await fetch(url);
    if (!response.ok) {
      setstate({
        data: null,
        isLoading: false,
        hasError: true,
        errorMessage: {
          code: response.status,
          message: response.statusText,
        },
      });
    }
    const data = await response.json();
    setstate({
      data: data,
      isLoading: false,
      hasError: false,
    });
    localCache[url] = data;
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
