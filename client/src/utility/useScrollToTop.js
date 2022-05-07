// Utility function scrolling to top on initial pageload
// todo: rework to custom hook

import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
};

export default useScrollToTop;
