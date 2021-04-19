import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

export const ScrollToTopOnMount = () => {
  useEffect(() => {
    document.body.scrollTo(0, 0);
  }, []);

  return null;
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.scrollTo(0, 0);
  }, [pathname]);

  return null;
} 


export const ScrollRestoration = () => {
  const history = useHistory();
  const location = useLocation();
  useEffect(
    () =>
      history.listen(({ pathname }, action) => {
        if (action === "PUSH" && pathname !== location.pathname)
          document.body.scrollTo(0, 0);
      }),
    [location.pathname, history],
  );
  return null;
};