import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

export const useBgColor = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    // return router.pathname === "/" ? "lightblue" : "lavender";
    switch (router.pathname) {
      case "/":
        return "lightblue";
      case "/about":
        return "lavender";
      default:
        return "";
    }
  }, [router.pathname]);

  // ページが読み込まれた時のイベント
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};
