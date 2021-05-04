import { useState, useEffect, useCallback } from "react";

export const usePMData = (asyncFunc) => {
  const [data, setData] = useState();

  const execute = useCallback(() => {
    return asyncFunc()
      .then((res) => {
        setData(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [asyncFunc]);

  useEffect(() => {
    execute();
  }, [execute]);

  return data;
};
