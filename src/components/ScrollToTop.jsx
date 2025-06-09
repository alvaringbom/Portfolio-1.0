import { useState, useEffect } from "react";
import ArrowUp from "../images/ArrowUp.png";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top ${visible ? "show" : ""}`}
      aria-label="Scroll to top"
    >
      <img src={ArrowUp} alt="Pil" className="arrow-scroll" />
      <p className="to-top-text">till toppen</p>
    </button>
  );
};

export default ScrollToTop;
