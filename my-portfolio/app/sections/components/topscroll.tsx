"use client";
import { useEffect, useState } from "react";
import { FaAnglesUp } from "react-icons/fa6";


const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed lg:bottom-16 bottom-8 lg:right-16 right-8 z-20">

        <button
          onClick={scrollToTop}
          className={`bg-accent text-background z-20 lg:p-7 p-5 rounded-full shadow-lg hover:bg-accent/90 transition transform duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <FaAnglesUp className="text-[20px]" />
        </button>
      
    </div>
  );
};

export default ScrollTop;