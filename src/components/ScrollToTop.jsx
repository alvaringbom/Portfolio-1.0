import { useEffect, useState } from "react";
import arrowUp from "../images/arrowup.png";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibility = () => {
    const scrollTop = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scroll = (scrollTop / totalHeight) * 100;
    setScrollProgress(scroll);
    setIsVisible(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <svg className="progress-ring" viewBox="0 0 36 36">
            <circle className="ring-bg" cx="18" cy="18" r="16" />
            <circle
              className="ring-progress"
              cx="18"
              cy="18"
              r="16"
              style={{ strokeDashoffset: 100 - scrollProgress }}
            />
          </svg>
          <img src={arrowUp} alt="Till toppen" className="arrow-to-top" />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;

// import { useState, useEffect } from "react";
// import ArrowUp from "../images/ArrowUp.png";

// const ScrollToTop = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       setVisible(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <button
//       onClick={scrollToTop}
//       className={`scroll-to-top ${visible ? "show" : ""}`}
//       aria-label="Scroll to top"
//     >
//       <img src={ArrowUp} alt="Pil" className="arrow-scroll" />
//       <p className="to-top-text">till toppen</p>
//     </button>
//   );
// };

// export default ScrollToTop;
