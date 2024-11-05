import { useEffect } from "react";
import MobileDetect from "mobile-detect";
import { clientStateManager } from "loaders";

export const ResizeHandler = () => {
  const md = new MobileDetect(window.navigator.userAgent);

  useEffect(() => {
    const resizeListener = () => {
      const { isMobile: currentState } = clientStateManager.get();
      const isMobile = md.mobile() !== null || window.innerWidth < 850;

      if (currentState === isMobile) return;

      clientStateManager.update({
        isMobile,
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
      });
    };

    window.addEventListener("resize", resizeListener);
    resizeListener();
    setTimeout(resizeListener, 500);
    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  return <></>;
};
