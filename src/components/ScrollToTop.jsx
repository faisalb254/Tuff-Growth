// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     const html = document.documentElement;

//     const originalBehavior = getComputedStyle(html).scrollBehavior;

//     html.style.scrollBehavior = "auto";
//     window.scrollTo(0, 0);

//     setTimeout(() => {
//       html.style.scrollBehavior = originalBehavior;
//     }, 0);
//   }, [pathname]);

//   return null;
// }

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top-left
  }, [pathname]); // run every time the route changes

  return null;
}
