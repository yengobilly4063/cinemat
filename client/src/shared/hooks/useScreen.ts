import { useState } from "react";

const useScreen = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => setScreenWidth(window.innerWidth));

  const isMobile = screenWidth <= 600;
  const isDesktop = !isMobile;

  return { isMobile, isDesktop };
};

export default useScreen;
