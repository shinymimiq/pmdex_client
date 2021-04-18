import { useLocation } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

export const ScrollRestoration = () => {
  const history = useHistory();
  const location = useLocation();
  useEffect(
    () =>
      history.listen(({ pathname }, action) => {
        if (action === "PUSH" && pathname !== location.pathname)
          window.scrollTo(0, 0);
      }),
    [location.pathname, history],
  );
  return null;
};