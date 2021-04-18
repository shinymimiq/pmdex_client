import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
