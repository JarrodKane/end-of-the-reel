import { useState, useEffect } from "react";

interface Size {
  width: number | undefined;
  height: number | undefined;
}

// Hook
const useWindowSize = () => {
  // Handler to call on window resize
  const handleResize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  // Initialize state with undefined wifth/height so server and client renders match
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
